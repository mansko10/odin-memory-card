export default function Win({ setToCards, score, highScore }) {
  return (
    <>
      <h1>
        You won this round! Your score this time is {score}. Your highest score
        this session is {highScore}
      </h1>
      <button
        onClick={() => {
          setToCards();
        }}
      >
        Continue to next round...
      </button>
    </>
  );
}
