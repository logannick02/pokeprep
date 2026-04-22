/* PokemonCard will have:
   * seven input forms - name, ability, four moves, item
   * one img
   * component that shows type(s)
   

    It will manage its state based on what form is open, its input and the filtered response
    The parent component will then be passed the final input
*/

import { Combobox } from "../Combobox/Combobox";
import "./PokemonCard.css";

export const PokemonCard = () => {
    return (
        <div className="pokemon-card">
            <div className="item"><Combobox options = {[]} placeholder="Name"/></div>
            <div className="item"><Combobox options = {[]} placeholder="Move 1"/></div>
            <div className="spanning-img">Img</div>
            <div className="item"><Combobox options = {[]} placeholder="Move 2"/></div>
            <div className="item"><Combobox options = {[]} placeholder="Move 3"/></div>
            <div className="item"><Combobox options = {[]} placeholder="Move 4"/></div>
            <div className="item"><Combobox options = {[]} placeholder="Ability"/></div>
            <div className="item"><Combobox options = {[]} placeholder="Item"/></div>
        </div>
    );
}