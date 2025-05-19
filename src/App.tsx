// main component
import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Calculate } from "./components/Calculate";
import { Home } from "./components/Home";
import { Leagues } from "./components/Leagues";
import { Teams } from "./components/Teams";
import { BattleSimulator } from "./components/BattleSimulator";
import { Pokedex } from "./components/Pokedex";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [activePage, setActivePage] = useState("Home");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <header>
        <h1><span>Poke</span>Prep</h1>
      </header>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
