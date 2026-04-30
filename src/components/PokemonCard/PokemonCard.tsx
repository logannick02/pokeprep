import { Combobox } from "../Combobox/Combobox";
import { useGeneration } from "../../context/GenerationContext";
import { useState, useMemo } from "react";
import { formatMovAbil, formatName } from "../../utils/Utils";
import { Pokemon } from "../../classes/Pokemon";
import missing from "../../../public/broken.png"
import "./PokemonCard.css";


type PokemonCardProps = {
    index: number
    onUpdate: (index: number, pokemon: Pokemon | undefined) => void
}

export const PokemonCard = ({index, onUpdate}: PokemonCardProps) => {    
    const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
    const [availableMoves, setAvailableMoves] = useState<string[]>([]);
    const [availableAbilities, setAvailableAbilities] = useState<string[]>([]);
    const [imageUrl, setImageUrl] = useState(missing);
    const {availableMons} = useGeneration(); // all available Pokemon + associated data for that gen 

    const pokemonNames = useMemo(() => 
        Object.keys(availableMons).map(formatName)
    , [availableMons]);

    const toKey = (name: string) => name.toLowerCase().split(" ").join("-");

    const handlePokemonChange = (selectedName: string) => {
        if (selectedName) {
            const keyed = toKey(selectedName);
            const newPokemon = new Pokemon(selectedName, [...availableMons[keyed].types]);
            setPokemon(newPokemon);

            setAvailableMoves(availableMons[keyed].moves.map(formatMovAbil));
            setAvailableAbilities(availableMons[keyed].abilities.filter(a => a !== null).map(formatMovAbil));
            setImageUrl(availableMons[keyed].sprite);
            onUpdate(index, newPokemon);
       } else {
            setImageUrl(missing);
            setAvailableMoves([]);
            setAvailableAbilities([]);
            setPokemon(undefined);
            onUpdate(index, undefined);
       }
    }

    const handleMoveChange = (move: string, slot: number) => {
        if (pokemon) {
            pokemon.moves[slot] = move;
            onUpdate(index, pokemon);
        }
    }

    const handleItemChange = (item: string) => {
        if (pokemon) {
            pokemon.item = item;
            onUpdate(index, pokemon);
        }
    }

    const handleAbilityChange = (ability: string) => {
        if (pokemon) {
            pokemon.ability = ability;
            onUpdate(index, pokemon);
        }
    }

    return (
        <div className="pokemon-card">
            <div className="item">
                <Combobox options={pokemonNames} placeholder="Name" onChange={handlePokemonChange}/>
            </div>
            <div className="item">
                <Combobox options={pokemon ? availableMoves : []} placeholder="Move 1" onChange={(move) => handleMoveChange(move, 0)}/>
            </div>
            <div className="spanning-img">
                <img src={imageUrl} alt={pokemon ? pokemon.name : "No Pokemon selected."}></img></div>
            <div className="item">
                <Combobox options={pokemon ? availableMoves : []} placeholder="Move 2" onChange={(move) => handleMoveChange(move, 1)}/>
            </div>
            <div className="item">
                <Combobox options={pokemon ? availableMoves : []} placeholder="Move 3" onChange={(move) => handleMoveChange(move, 2)}/>
            </div>
            <div className="item">
                <Combobox options={pokemon ? availableMoves : []} placeholder="Move 4" onChange={(move) => handleMoveChange(move, 3)}/>
            </div>
            <div className="item"><Combobox options={pokemon ? availableAbilities : []} placeholder="Ability" onChange={handleAbilityChange}/></div>
            <div className="item"><Combobox options={pokemon ? [] : []} placeholder="Item" onChange={handleItemChange}/></div>
        </div>
    );
}