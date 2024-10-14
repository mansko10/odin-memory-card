import { useEffect, useState } from "react";
import IDs from "./IDs";

const IDsInstance = new IDs();
IDsInstance.addIDs();

function Card({ pokemon, handleCardClick }) {
  return (
    <div
      onClick={() => {
        if (pokemon.wasClicked) {
          console.log("clicked");
        } else {
          handleCardClick(pokemon.id);
        }
      }}
      className="card flex h-[200px] w-[180px] flex-col border-2 border-black"
    >
      <div className="img flex grow justify-center align-middle">
        <img src={pokemon.img} alt="#" className="" />
      </div>
      <div className="img-desc py-3 text-center">{pokemon.name}</div>
    </div>
  );
}

export default function Cards() {
  console.log(IDsInstance.previousIDs);

  const [pokemons, setPokemons] = useState([]);

  const shuffledPokemons = shuffle(pokemons);

  useEffect(() => {
    IDsInstance.getPokemons(setPokemons);
  }, []);

  function levelUp() {
    IDsInstance.addIDs();
    IDsInstance.getPokemons(setPokemons);
  }

  function reset() {
    IDsInstance.reset();
    IDsInstance.addIDs();
    IDsInstance.getPokemons(setPokemons);
  }

  function handleCardClick(id) {
    const result = pokemons.map((pokemon) => {
      if (pokemon.id === id) {
        return { ...pokemon, wasClicked: true };
      } else {
        return pokemon;
      }
    });
    setPokemons(result);
  }

  function shuffle(array) {
    //Credits: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let result = [...array];
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [result[currentIndex], result[randomIndex]] = [
        result[randomIndex],
        result[currentIndex],
      ];
    }

    return result;
  }

  function checkAllClicked() {
    let result = true;
    pokemons.forEach((pokemon) => {
      if (!pokemon.wasClicked) {
        result = false;
      }
    });
    return result;
  }

  useEffect(() => {
    if (pokemons.length) {
      checkAllClicked() ? levelUp() : undefined;
    }
  });

  return (
    <>
      <div className="cards mx-auto flex min-h-[400px] max-w-[800px] flex-wrap content-start items-start justify-center gap-2 border-2 border-red-800">
        {shuffledPokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </div>
      <button onClick={levelUp}>Continue</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
