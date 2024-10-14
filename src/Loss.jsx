export default function Loss({ setGameState }) {
  return (
    <>
      <h1>Sorry! You clicked the same card twice!</h1>
      <button onClick={() => setGameState("cards")}>Start again...</button>
    </>
  );
}
