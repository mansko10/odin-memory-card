import Cards from "./Cards";
import Loss from "./Loss";

export default function PlayGame({
  IDsInstance,
  pokemons,
  setPokemons,
  gameState,
  setGameState,
  score,
  setScore,
  highScore,
  setToCards,
  setHighScore,
}) {
  return (
    <>
      <div className="play-game flex basis-[800px] flex-col justify-center bg-lime-100 px-2">
        {gameState === "cards" && (
          <Cards
            IDsInstance={IDsInstance}
            pokemons={pokemons}
            setPokemons={setPokemons}
            gameState={gameState}
            setGameState={setGameState}
            score={score}
            setScore={setScore}
            highScore={highScore}
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
      </div>
    </>
  );
}
