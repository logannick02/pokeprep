import "./TypeMatchup.css";
import { useGeneration } from "../../context/GenerationContext";
import { Pokemon } from "../../classes/Pokemon";
import { getMultiplier, getColor } from "../../utils/Utils";
import { gen2TypeChart, gen6TypeChart } from "../../data/TypeCharts";
import { DynamicTd } from "../DynamicTd/DynamicTd";

export const TypeMatchup = ({yourTeam, opponentTeam}: {yourTeam: (Pokemon|undefined)[], opponentTeam: (Pokemon|undefined)[]}) => {
    const {generation} = useGeneration();
    const typeChart = generation >= 6 ? gen6TypeChart : gen2TypeChart;
    
    return (
        <div className="type-matchup">
            <div className="tm-display">
                <table>
                    <tbody>
                        <tr>
                            <th style= {{backgroundColor: '#000080'}}>You</th>
                            {Object.keys(typeChart).map((type) => (
                                <th style={{backgroundColor: getColor(type)}} key={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</th>
                            ))}
                        </tr>
                        {yourTeam.filter((p): p is Pokemon => p !== undefined).map((pkmn, index) => (
                            <tr key={index}>
                                <td>{pkmn.name}</td>
                                {Object.keys(typeChart).map((type) => (
                                    <DynamicTd val={getMultiplier(type, pkmn.types[0], generation) 
                                        * getMultiplier(type, pkmn.types[1], generation)} />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="tm-display">
                <table>
                    <tbody>
                        <tr>
                            <th style={{backgroundColor: '#8b0000'}}>Opp</th>
                            {Object.keys(typeChart).map((type) => (
                                <th style={{backgroundColor: getColor(type)}} key={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</th>
                            ))}
                        </tr>
                        {opponentTeam.filter((p): p is Pokemon => p !== undefined).map((pkmn, index) => (
                            <tr key={index}>
                                <td>{pkmn.name}</td>
                                {Object.keys(typeChart).map((type) => (
                                    <DynamicTd val={getMultiplier(type, pkmn.types[0], generation) 
                                        * getMultiplier(type, pkmn.types[1], generation)} />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>    
    );
}