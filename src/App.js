import { useState } from "react";
import AnimalShow from "./AnimalShow";

import "./App.css";

function RandomAnimals () {
  const animals = ['dog', 'cat', 'horse', 'gator', 'cow', 'bird']

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, RandomAnimals()])
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">
        {renderedAnimals}
      </div>
    </div>
  );
}

export default App;
