/* needs to be passed list of available Pokemon (and items) in the selected generation */
/* better yet, just use context for the available Pokemon */
/* Team will manage its own state for the Pokemon, but the App will manage its state based on selected Pokemon */

import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Pokemon } from "../../classes/Pokemon";
import "./Team.css";

type TeamProps = {
    onUpdate: (index: number, pokemon: Pokemon | undefined) => void;
}

export const Team = ({onUpdate}: TeamProps) => {

    return (
        <div className="team-layout">
            <PokemonCard index={0} onUpdate={onUpdate}/>
            <PokemonCard index={1} onUpdate={onUpdate}/>
            <PokemonCard index={2} onUpdate={onUpdate}/>
            <PokemonCard index={3} onUpdate={onUpdate}/>
            <PokemonCard index={4} onUpdate={onUpdate}/>
            <PokemonCard index={5} onUpdate={onUpdate}/>
            <PokemonCard index={6} onUpdate={onUpdate}/>
            <PokemonCard index={7} onUpdate={onUpdate}/>
            <PokemonCard index={8} onUpdate={onUpdate}/>
            <PokemonCard index={9} onUpdate={onUpdate}/>
            <PokemonCard index={10} onUpdate={onUpdate}/>
            <PokemonCard index={11} onUpdate={onUpdate}/>
        </div>
    );
}