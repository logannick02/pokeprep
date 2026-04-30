import { useGeneration } from "../context/GenerationContext";
import { gen2TypeChart, gen6TypeChart, typeColors } from "../data/TypeCharts";

export const getMultiplier = (attacking: string, defending: string) => {
    const {generation} = useGeneration();

    if (generation >= 6) {
        return gen6TypeChart[attacking][defending] ?? 1
    } else {
        return gen2TypeChart[attacking][defending] ?? 1
    }
}

export const getColor = (type: string): string => {
    return typeColors[type] ?? "transparent";
}

export const formatMovAbil = (toFormat: string) => {
    return toFormat.split("-").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

export const formatName = (toFormat: string) => {
    return toFormat.split("-").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join("-");
}