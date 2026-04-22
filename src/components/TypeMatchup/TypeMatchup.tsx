import "./TypeMatchup.css";
import { useGeneration } from "../../context/GenerationContext";
import { getMultiplier } from "../../utils/TypeUtils";
import { gen2TypeChart, gen6TypeChart } from "../../data/TypeCharts";

export const TypeMatchup = () => {
    const gen = useGeneration();
    const typeChart = gen >= 6 ? gen6TypeChart : gen2TypeChart;

    return (
        <div className="type-matchup">
            <div className="tm-display">
                <table>
                    <tr>
                        <th>You</th>
                        {Object.keys(typeChart).map((type) => (
                            <th key={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</th>
                        ))}
                    </tr>
                </table>
            </div>
            <div className="tm-display">

            </div>
        </div>    
    );
}