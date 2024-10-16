export default function Loss({ score, setToCards, highScore }) {
  return (
    <>
      <h1>
        Sorry! You clicked the same card twice! Your score this time was {score}
        . Your highest score is {highScore}.
      </h1>
      <button onClick={() => setToCards()}>Start again...</button>
    </>
  );
}
