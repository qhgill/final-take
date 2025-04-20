interface EndGameProps {
  movieName: string;
}

const EndGame = ({ movieName }: EndGameProps) => {
  return (
    <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center">
      <p className="text-4xl font-bold">Game Over for {movieName}</p>
    </div>
  );
};
export default EndGame;
