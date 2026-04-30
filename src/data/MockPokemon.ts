import type {Pokedex}  from "../types/Pokemon"

const gen6Mons: Pokedex = {
  bulbasaur: {
    bst: [45, 49, 49, 65, 65, 45],
    abilities: ["overgrow", null, "chlorophyll"],
    types: ["grass", "poison"],
    moves: ["razor-leaf", "vine-whip", "solar-beam", "leech-seed"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/1.png"
  },
  ivysaur: {
    bst: [60, 62, 63, 80, 80, 60],
    abilities: ["overgrow", null, "chlorophyll"],
    types: ["grass", "poison"],
    moves: ["razor-leaf", "vine-whip", "solar-beam", "leech-seed"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/2.png"
  },
  fletchinder: {
    bst: [62, 73, 55, 56, 52, 84],
    abilities: ["flame-body", null, "gale-wings"],
    types: ["fire", "flying"],
    moves: ["acrobatics"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/662.png"
  }
}

const gen4Mons: Pokedex = {
    scyther: {
        bst: [70, 110, 80, 55, 80, 105],
        abilities: ["swarm", "technician", null],
        types: ["bug", "flying"],
        moves: ["aerial-ace", "brick-break", "bug-bite", "quick-attack"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/123.png"
    },
    scizor: {
        bst: [70, 130, 100, 55, 80, 65],
        abilities: ["swarm", "technician", null],
        types: ["bug", "steel"],
        moves: ["bullet-punch", "brick-break", "bug-bite", "quick-attack"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/212.png"
    },
    ditto: {
        bst: [48, 48, 48, 48, 48, 48],
        abilities: ["limber", null, null],
        types: ["normal", null],
        moves: ["transform"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/132.png"
    }
}

const data: Record<number, Pokedex> = {
    4: gen4Mons,
    6: gen6Mons
}

export const fetchMockPokemon = (generation: number) => {
    return data[generation] ?? null;
}