import IDs from "../IDs";
import { useState, useEffect } from "react";
import Scores from "./Scores";
import PlayGame from "./PlayGame";

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
      <div className="mx-auto flex min-h-[100vh] max-w-[1200px] justify-center border-2">
        <Scores score={score} highScore={highScore} />
        <PlayGame
          IDsInstance={IDsInstance}
          pokemons={pokemons}
          setPokemons={setPokemons}
          gameState={gameState}
          setGameState={setGameState}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setToCards={setToCards}
          setHighScore={setHighScore}
        />
      </div>
    </>
  );
}
