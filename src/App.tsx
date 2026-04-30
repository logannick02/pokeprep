import { useState } from 'react'
import { GenerationProvider } from "./context/GenerationContext";
import { Pokemon } from './classes/Pokemon';
import { Button } from './components/Button/Button'
import { Team } from './components/Team/Team'
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

  const generations = [
    {id: 4, name: 'DPP'},
    {id: 5, name: 'B/W'},
    {id: 6, name: 'X/Y'},
    {id: 7, name: 'S/M'},
    {id: 8, name: 'S/S'},
    {id: 9, name: 'S/V'}
  ];
  

  return (
    <GenerationProvider generation={generation} setGeneration={setGeneration}>
      <>
        <header>
          <h1 className="logo"><span style={{color: "#a78bfa"}}>Poke</span>Prep</h1>
          <h3>Build better teams.</h3>
          <ul>
            {generations.map((data) => (
              <li>
                <Button 
                  key={data.id} 
                  content={data.name} 
                  isSelected={data.id === generation}
                  leftEdge={data.id === 4}
                  rightEdge={data.id === 9}
                  onClick={() => setGeneration(data.id)}
                />
              </li>
            ))}
          </ul>
        </header>

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
