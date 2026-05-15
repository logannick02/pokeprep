import "./Header.css";
import { Button } from "../Button/Button";

type HeaderProps = {
    generation: number
    setGeneration: (gen: number) => void
};

export const Header = ({generation, setGeneration}: HeaderProps) => {
    const generations = [
        {id: 4, name: 'DPP'},
        {id: 5, name: 'B/W'},
        {id: 6, name: 'X/Y'},
        {id: 7, name: 'S/M'},
        {id: 8, name: 'S/S'},
        {id: 9, name: 'S/V'}
    ];
    
    return (
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
    );
}