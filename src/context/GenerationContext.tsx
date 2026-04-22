import { createContext, useContext } from "react";

export const GenerationContext = createContext(9);

export const useGeneration = () => useContext(GenerationContext);