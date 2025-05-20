import "../../styles/PageContent.css";
import { Calculate } from "./Calculate";
import { Home } from "./Home";
import { Leagues } from "./Leagues";
import { Teams } from "./Teams";
import { BattleSimulator } from "./BattleSimulator";
import { Pokedex } from "./Pokedex";

interface Props {
    active: string;
}

export const PageContent = (props: Props) => {
    return (
        <div className="page-content">
            {props.active === "Home" && <Home />}
            {props.active === "Teams" && <Teams />}
            {props.active === "Calculate" && <Calculate />}
            {props.active === "Leagues" && <Leagues />}
            {props.active === "Simulate" && <BattleSimulator />}
            {props.active === "Pokedex" && <Pokedex />}
        </div>
    );
}