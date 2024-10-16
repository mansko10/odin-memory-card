export default function Loss({ setToCards }) {
  return (
    <>
      <div className="loss">
        <p className="my-2 text-center text-2xl">
          Oops! You clicked the same card twice!
        </p>
        <button
          className="mx-auto block bg-red-800 p-2 text-white"
          onClick={() => setToCards()}
        >
          Start again
        </button>
      </div>
    </>
  );
}
