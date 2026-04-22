import { useState } from 'react'
import { GenerationContext } from "./context/GenerationContext";
import { Button } from './components/Button/Button'
import { Team } from './components/Team/Team'
import { UtilWrapper } from './components/UtilWrapper/UtilWrapper'
import './App.css'

function App() {
  const [curGeneration, setCurGeneration] = useState(9)
  const generations = [
    {id: 4, name: 'DPP'},
    {id: 5, name: 'B/W'},
    {id: 6, name: 'X/Y'},
    {id: 7, name: 'S/M'},
    {id: 8, name: 'S/S'},
    {id: 9, name: 'S/V'}
  ];
  /*
    setupGen() should do 3 things:
      * set state of both the current generation and calls in data based on that generation
      * sets the button to its "selected" state
      * resets ALL Pokemon and movesets
  */
  const setupGen = (generation: number) => {
    setCurGeneration(generation); 

  }

  return (
    <GenerationContext.Provider value={curGeneration}>
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
                  isSelected={data.id === curGeneration}
                  leftEdge={data.id === 4}
                  rightEdge={data.id === 9}
                  onClick={() => setupGen(data.id)}
                />
              </li>
            ))}
          </ul>
        </header>

        <main>
            <div className="team-section">
              <h2>Your Team:</h2>
              <Team />
            </div>

            <UtilWrapper />

            <div className="team-section">
              <h2>Opponent Team:</h2>
              <Team />
            </div>
        </main>
      </>
    </GenerationContext.Provider>
  )
}

export default App
