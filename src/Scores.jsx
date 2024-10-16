export default function Scores({ score, highScore }) {
  return (
    <div className="scores flex basis-[400px] flex-col justify-center border-2 bg-green-800">
      <p className="cursor-default select-none text-center text-4xl font-semibold text-white">
        Highest Score: {highScore}
      </p>
      <p className="cursor-default select-none text-center text-4xl font-semibold text-white">
        Current Score: {score}
      </p>
    </div>
  );
}
