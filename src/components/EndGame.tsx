import Image from "next/image";
import funScreen from "@/public/funScreen.png";
interface EndGameProps {
  movieName: string;
}

const EndGame = ({ movieName }: EndGameProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-10 items-center w-full h-full">
      <p className="text-4xl font-bold">THE FINAL Take</p>

      <Image
        src={funScreen}
        alt="funScreen"
        className="absolute object-contain"
      />
      <p className="text-4xl font-bold">{movieName} was a failure!</p>
    </div>
  );
};
export default EndGame;
