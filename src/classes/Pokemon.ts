export class Pokemon {
    nickname: string | undefined;
    name: string;
    ability: string | undefined;
    item: string | undefined;
    types: string[];
    moves: (string | undefined)[];
    nature: string;
    evs: [number, number, number, number, number, number];
    ivs: [number, number, number, number, number, number];
    shiny: boolean;
    happiness: number;
    level: number;

    constructor(name: string, types: string[]) {
        this.name = name;
        this.types = types;
        this.moves = [];
        this.nature = "serious";
        this.evs = [0,0,0,0,0,0];
        this.ivs = [31,31,31,31,31,31];
        this.shiny = false;
        this.happiness = 255;
        this.level = 100;
    }
}