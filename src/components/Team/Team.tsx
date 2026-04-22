/* needs to be passed list of available Pokemon (and items) in the selected generation */
/* better yet, just use context for the available Pokemon */
/* Team will manage its own state for the Pokemon, but the App will manage its state based on selected Pokemon */

import { PokemonCard } from "../PokemonCard/PokemonCard";
import "./Team.css";

export const Team = () => {
    return (
        <div className="team-layout">
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
        </div>
    );
}