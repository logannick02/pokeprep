import { useGeneration } from "../context/GenerationContext";
import { gen2TypeChart, gen6TypeChart, typeColors } from "../data/TypeCharts";

export const getMultiplier = ({attacking, defending}: {attacking: string, defending: string}) => {
    const gen = useGeneration();

    if (gen >= 6) {
        return gen6TypeChart[attacking][defending] ?? 1
    } else {
        return gen2TypeChart[attacking][defending] ?? 1
    }
}

export const getColor = ({type}: {type: string}) => {
    return typeColors[type] ?? "#ffffff";
}