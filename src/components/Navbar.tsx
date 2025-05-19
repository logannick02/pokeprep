import "../styles/Navbar.css";
import { useState } from "react";
import { 
    HomeButton,
    QuestionButton,
    CalculatorButton,
    TrophyButton,
    BookButton,
} from "./CustomIcons";

export const Navbar = () => {
    const [activeBtn, setActiveBtn] = useState("Home");

    const btnIcon = (btn: string) => {
        if (btn === activeBtn) {
            return (
                <div className=""></div>
            );
        }
    }

    return (
        <>
            <div className="sidenav">
                <button
                    onClick={() => setActiveBtn("Home")}
                    className={activeBtn === "Home" ? "selected" : ""}
                >
                    <div className="elems">
                        <HomeButton active={activeBtn === "Home"} />
                        {activeBtn !== "Home" && <p>Home</p>}                        
                    </div>                    
                </button>
                <button
                    onClick={() => setActiveBtn("Teams")}
                    className={activeBtn === "Teams" ? "selected" : ""}
                >
                    <div className="elems">
                        <QuestionButton active={activeBtn === "Teams"} />
                        {activeBtn !== "Teams" && <p>Teams</p>}
                    </div>
                </button>
                <button
                    onClick={() => setActiveBtn("Calculate")}
                    className={activeBtn === "Calculate" ? "selected" : ""}
                >
                    <div className="elems">
                        <CalculatorButton active={activeBtn === "Calculate"} />
                        {activeBtn !== "Calculate" && <p>Calculate</p>}
                    </div>
                </button>
                <button
                    onClick={() => setActiveBtn("Leagues")}
                    className={activeBtn === "Leagues" ? "selected" : ""}
                >
                    <div className="elems">
                        <TrophyButton active={activeBtn === "Leagues"} />
                        {activeBtn !== "Leagues" && <p>Leagues</p>}
                    </div>
                </button>
                <button
                    onClick={() => setActiveBtn("Simulate")}
                    className={activeBtn === "Simulate" ? "selected" : ""}
                >
                    <div className="elems">
                        <QuestionButton active={activeBtn === "Simulate"} />
                        {activeBtn !== "Simulate" && <p>Simulate</p>}
                    </div>
                </button>
                <button
                    onClick={() => setActiveBtn("Pokedex")}
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
