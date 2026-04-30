import { createContext, useContext, useState, useEffect } from "react";
import type { Pokedex } from "../types/Pokemon";
import { fetchMockPokemon } from "../data/MockPokemon";

type GenerationContextType = {
    generation: number,
    setGeneration: (gen: number) => void,
    availableMons: Pokedex
};

export const GenerationContext = createContext<GenerationContextType>({
    generation: 6,
    setGeneration: () => {},
    availableMons: {}
})

export const GenerationProvider = ({children, generation, setGeneration}: {
    children: React.ReactNode
    generation: number
    setGeneration: (gen: number) => void
}) => {
    const [availableMons, setAvailableMons] = useState<Pokedex>({});
    
    useEffect(() => {
        const data = fetchMockPokemon(generation);
        if (data) setAvailableMons(data);
    }, [generation]);

    return (
        <GenerationContext.Provider value = {{generation, setGeneration, availableMons}}>
            {children}
        </GenerationContext.Provider>
    );
}

export const useGeneration = () => useContext(GenerationContext);