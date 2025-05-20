import "../styles/Navbar.css";
import { useState } from "react";
import { 
    HomeButton,
    QuestionButton,
    CalculatorButton,
    TrophyButton,
    BookButton,
} from "./CustomIcons";

interface Props {
    onUpdate: (value: string) => void;
}

export const Navbar = (props: Props) => {
    const [activeBtn, setActiveBtn] = useState("Home");

    const handleClick = (page: string) => {
        setActiveBtn(page);
        props.onUpdate(page);
    }

    return (
        <>
            <div className="sidenav">
                <button
                    onClick={() => handleClick("Home")}
                    className={activeBtn === "Home" ? "selected" : ""}
                >
                    <div className="elems">
                        <HomeButton active={activeBtn === "Home"} />
                        {activeBtn !== "Home" && <p>Home</p>}                        
                    </div>                    
                </button>
                <button
                    onClick={() => handleClick("Teams")}
                    className={activeBtn === "Teams" ? "selected" : ""}
                >
                    <div className="elems">
                        <QuestionButton active={activeBtn === "Teams"} />
                        {activeBtn !== "Teams" && <p>Teams</p>}
                    </div>
                </button>
                <button
                    onClick={() => handleClick("Calculate")}
                    className={activeBtn === "Calculate" ? "selected" : ""}
                >
                    <div className="elems">
                        <CalculatorButton active={activeBtn === "Calculate"} />
                        {activeBtn !== "Calculate" && <p>Calculate</p>}
                    </div>
                </button>
                <button
                    onClick={() => handleClick("Leagues")}
                    className={activeBtn === "Leagues" ? "selected" : ""}
                >
                    <div className="elems">
                        <TrophyButton active={activeBtn === "Leagues"} />
                        {activeBtn !== "Leagues" && <p>Leagues</p>}
                    </div>
                </button>
                <button
                    onClick={() => handleClick("Simulate")}
                    className={activeBtn === "Simulate" ? "selected" : ""}
                >
                    <div className="elems">
                        <QuestionButton active={activeBtn === "Simulate"} />
                        {activeBtn !== "Simulate" && <p>Simulate</p>}
                    </div>
                </button>
                <button
                    onClick={() => handleClick("Pokedex")}
                    className={activeBtn === "Pokedex" ? "selected" : ""}
                >
                    <div className="elems">
                        <BookButton active={activeBtn === "Pokedex"} />
                        {activeBtn !== "Pokedex" && <p>Pokedex</p>}
                    </div>
                </button>
            </div>
        </>
    );
}
