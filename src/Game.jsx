import IDs from "./IDs";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import Win from "./Win";
import Loss from "./Loss";
import Loading from "./Loading";

const IDsInstance = new IDs();
IDsInstance.addIDs();

export default function Game() {
  const [gameState, setGameState] = useState("cards");
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  if (score > highScore) {
    setHighScore(score);
  }

  useEffect(() => {
    IDsInstance.getPokemons(setPokemons);
  }, []);

  function setToCards() {
    if (gameState === "loss") {
      setScore(0);
      setGameState("cards");
    } else if (gameState === "win") {
      setGameState("cards");
    }
  }

  return (
    <>
      {gameState === "cards" && (
        <Cards
          IDsInstance={IDsInstance}
          pokemons={pokemons}
          setPokemons={setPokemons}
          setGameState={setGameState}
          score={score}
          setScore={setScore}
          highScore={highScore}
        />
      )}
      {gameState === "win" && (
        <Win
          setToCards={setToCards}
          score={score}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      )}
      {gameState === "loss" && (
        <Loss
          setToCards={setToCards}
          score={score}
          highScore={highScore}
          setHighSCore={setHighScore}
        />
      )}
    </>
  );
}
