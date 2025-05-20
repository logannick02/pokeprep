// main component
import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { PageContent } from "./components/page-components/PageContent";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const handleNavChange = (newValue: string) => {
    setActivePage(newValue);
  };

  return (
    <div className="layout-column">
      <header>
        <h1><span>Poke</span>Prep</h1>
      </header>
      <div className="layout-row">
        <Navbar onUpdate={handleNavChange}/>
        <PageContent active={activePage}/>
      </div>
    </div>
  );
}

export default App;
