import { useState, useRef, useEffect, useMemo } from "react";
import "./Combobox.css";


type ComboboxProps = {
    options: string[],
    placeholder: string
    onChange: (value: string) => void
}

export const Combobox = ({options, placeholder, onChange}: ComboboxProps) => {
    const [query, setQuery] = useState('');
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    
    // for handling clicks outside the combobox
    const comboboxRef = useRef<HTMLDivElement>(null);

    const handleSetValue = (text: string) => {
        setQuery("");
        setValue(text);
        setIsOpen(false);
        onChange(text);
    }

    const handleSetQuery = (text: string) => {
        setValue("");
        setQuery(text);
    }

    // in use with the comboboxRef to handle outside clicks
    useEffect(() => { 
        function handleOutsideClick(event: MouseEvent) {
            if (comboboxRef.current && !comboboxRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setQuery("");
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    // handle when a user clears the Pokemon (if moves/items/abilities are selected they will clear, too)
    useEffect(() => {
        if (options.length == 0) setValue("");
    }, [options]);

    // filters based on user query and options array (its dependency array)
    const filtered = useMemo(() => {
        return options.filter((option) => option.toLowerCase().includes(query.toLowerCase()));
    }, [options, query]);

    const handleClear = () => {
       setQuery("");
       setValue("");
       onChange("");
    }

    return (
        <div ref={comboboxRef} className="combobox">
            { value.length > 0 && (
                <span className="value">{value}</span>
            )}

            <input 
                className={isOpen ? "open" : ""} 
                value={query} 
                placeholder={value.length > 0 ? "" : placeholder} 
                onClick={() => setIsOpen(true)} 
                onChange={(e) => handleSetQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === ' ' && filtered.length > 0) {
                        e.preventDefault();
                        handleSetValue(filtered[0]);
                    }
                }}
            />

            {value.length > 0 && (
                <svg
                    className="clear"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    onClick={() => handleClear()}
                >
                    <path d="M18 6L6 18M6 6l12 12" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round"/>
                </svg>
            )}

            <svg
                className={`chevron ${isOpen ? "open" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                onClick={() => setIsOpen(!isOpen)}
            >
                <path d="M12 15L4 6h16z"/>
            </svg>

            <ul className={isOpen ? "open" : ""}>
                {filtered.length > 0 ? filtered.map((opt) => (
                    <li 
                        onClick={() => handleSetValue(opt)} 
                        key={opt}
                    >
                        {opt}
                    </li>    
                )) : 
                    <li className="no-options">
                        Nothing found.
                    </li>
                }
            </ul>
        </div>
    );
}