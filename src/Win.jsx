export default function Win({ setGameState }) {
  return (
    <>
      <h1>You won this round!</h1>
      <button onClick={() => setGameState("cards")}>
        Continue to next round...
      </button>
    </>
  );
}
