export type PokemonData = {
    bst: number[],
    abilities: (string | null)[],
    types: (string | null)[],
    moves: string[],
    sprite: string
};

export type Pokedex = Record<string, PokemonData>;

