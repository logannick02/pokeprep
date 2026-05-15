import { gen2TypeChart, gen6TypeChart, typeColors } from "../data/TypeCharts";

export const getMultiplier = (
  attacking: string | null,
  defending: string | null,
  generation: number
): number => {
  if (!attacking || !defending) return 1;

  const chart = generation >= 6 ? gen6TypeChart : gen2TypeChart;
  return chart[attacking]?.[defending] ?? 1;
};

export const getColor = (type: string): string => {
    return typeColors[type] ?? "transparent";
}

export const formatMovAbil = (toFormat: string) => {
    return toFormat.split("-").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

export const formatName = (toFormat: string) => {
    return toFormat.split("-").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join("-");
}