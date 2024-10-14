import IDs from "./IDs";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import Win from "./Win";
import Loss from "./Loss";

const IDsInstance = new IDs();
IDsInstance.addIDs();

export default function Game() {
  const [gameState, setGameState] = useState("cards");

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    IDsInstance.getPokemons(setPokemons);
  }, []);

  return (
    <>
      {gameState === "cards" && (
        <Cards
          IDsInstance={IDsInstance}
          pokemons={pokemons}
          setPokemons={setPokemons}
          setGameState={setGameState}
        />
      )}
      {gameState === "win" && <Win setGameState={setGameState} />}
      {gameState === "loss" && <Loss setGameState={setGameState} />}
    </>
  );
}
