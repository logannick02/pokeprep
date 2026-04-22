import { useState } from "react";
import "./Combobox.css";

type ComboboxProps = {
    options: [];
    placeholder: string;
}

export const Combobox = ({options, placeholder}: ComboboxProps) => {
    const [inputText, setInputText] = useState('');

    return (
        <div className="combobox">
            <input value={inputText} placeholder={placeholder} onChange={(e) => setInputText(e.target.value)}></input>
            <ul>
                {options.map((option) => (
                    <li key={option}>{option}</li>    
                ))}
            </ul>
        </div>
    );
}