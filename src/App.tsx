import { useState } from 'react'
import { GenerationProvider } from "./context/GenerationContext";
import { Pokemon } from './classes/Pokemon';
import { Button } from './components/Button/Button'
import { Team } from './components/Team/Team'
import { Header } from './components/Header/Header';
import { UtilWrapper } from './components/UtilWrapper/UtilWrapper'
import './App.css'

function App() {
  const [generation, setGeneration] = useState(6);
  const [yourTeam, setYourTeam] = useState<(Pokemon | undefined)[]>([]);
  const [opponentTeam, setOpponentTeam] = useState<(Pokemon | undefined)[]>([]);

  const updateYourTeam = (index: number, pokemon: Pokemon | undefined) => {
    setYourTeam(prev => {
      const updatedYourTeam = [...prev];
      updatedYourTeam[index] = pokemon;
      return updatedYourTeam;
    });
  }

  const updateOpponentTeam = (index: number, pokemon: Pokemon | undefined) => {
    setOpponentTeam(prev => {
      const updatedOpponentTeam = [...prev];
      updatedOpponentTeam[index] = pokemon;
      return updatedOpponentTeam;
    });
  }

  // TODO: move main and footer into their own components
  // key main such that when generation is changed it will remount everything
  // update the way Pokemon are updated by creating a new instance
  // change it to a type rather than a class ??
  
  return (
    <GenerationProvider generation={generation} setGeneration={setGeneration}>
      <>
        <Header generation={generation} setGeneration={setGeneration}/>

        <main>
            <div className="team-section">
              <h2>Your Team:</h2>
              <Team onUpdate={updateYourTeam}/>
            </div>

            <UtilWrapper yourTeam={yourTeam} opponentTeam={opponentTeam}/>

            <div className="team-section">
              <h2>Opponent Team:</h2>
              <Team onUpdate={updateOpponentTeam}/>
            </div>
        </main>
      </>

      <footer>
        <p> Built by <a href="logannick02.github.io">Logan Caraway</a> | Data from <a href="https://pokeapi.co/">PokeAPI</a> | Parts of UI inspired by <a href="https://mypokemonteam.com/">My Pokemon Team</a></p>
      </footer>
    </GenerationProvider>
  )
}

export default App
