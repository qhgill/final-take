import Image from "next/image";
import marquee from "@/public/marquee.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
interface EndGameProps {
  movieName: string;
  budget: number;
  sustainStatus: number;
  profit: number;
  initialBudget: number;
}

const EndGame = ({
  movieName,
  budget,
  sustainStatus,
  profit,
  initialBudget,
}: EndGameProps) => {
  const router = useRouter();

  const handlePlayAgain = () => {
    router.push("/");
    window.location.reload();
  };

  const calculateFinalScore = (
    budget: number,
    sustainStatus: number,
    profit: number,
    initialBudget: number,
  ) => {
    const score =
      ((budget + sustainStatus) * profit) / (initialBudget / 1000000) / 100;
    return Math.round(score);
  };

  return (
    <div className="flex flex-col justify-center gap-y-10 items-center w-full px-2 h-full">
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 100, scale: 0.1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 85,
          damping: 8,
          delay: 0.7,
          duration: 1,
        }}
      >
        <p className="text-4xl sm:text-7xl font-bold pb-6">THE FINAL TAKE</p>
        <Image
          src={marquee}
          alt="marquee"
          className="justify-center items-center"
          width={800}
          height={300}
        />
        <div className="absolute text-center">
          <p className="text-2xl sm:text-5xl font-bold mb-4">
            Congratulations on {movieName}!
          </p>
          <p className="text-lg sm:text-4xl font-bold">
            Remaining Budget: {budget}!
          </p>
          <p className="text-lg sm:text-4xl font-bold">
            Sustainability: {sustainStatus}!
          </p>
          <p className="text-lg sm:text-4xl font-bold">Profit: {profit}!</p>
          <p className="text-lg sm:text-4xl font-bold">
            Final Score:{" "}
            {calculateFinalScore(budget, sustainStatus, profit, initialBudget)}!
          </p>
        </div>

        <button
          onClick={handlePlayAgain}
          className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition mt-4"
        >
          Play Again
        </button>
      </motion.div>
    </div>
  );
};
export default EndGame;
