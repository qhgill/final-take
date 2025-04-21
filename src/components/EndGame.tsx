import Image from "next/image";
import marquee from "@/public/marquee.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/options";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface EndGameProps {
  movieName: string;
  budget: number;
  sustainStatus: number;
  profit: number;
  initialBudget: number;
  genre: string;
}

const EndGame = ({
  movieName,
  budget,
  sustainStatus,
  profit,
  initialBudget,
  genre,
}: EndGameProps) => {
  const [description, setDescription] = useState<string>("");
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
    const score = ((budget + profit) / initialBudget) * sustainStatus;

    return Math.round(score);
  };

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const res = await fetch("/api/generate-description", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            movieName,
            budget,
            sustainStatus,
            profit,
            genre,
          }),
        });

        if (!res.ok) {
          const text = await res.text();
          console.error("API error:", text);
          setDescription("Failed to generate description.");
          return;
        }

        const data = await res.json();
        setDescription(data.description);
      } catch (error) {
        console.error("Unexpected error:", error);
        setDescription("Something went wrong.");
      }
    };

    fetchDescription();
  }, [movieName, budget, sustainStatus, profit]);

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
          delay: 0.8,
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
        <motion.div
          className="absolute inset-y-[36vh] text-center flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.4,
            duration: 1,
          }}
        >
          <p className="text-xl sm:text-5xl font-bold text-center w-full">
            Congratulations on {movieName}!
          </p>
          <p className="text-base sm:text-4xl font-bold">
            Remaining Budget: ${formatPrice(budget)}
          </p>
          <p className="text-base sm:text-4xl font-bold">
            Sustainability: {sustainStatus}
          </p>
          <p className="text-base sm:text-4xl font-bold">
            Profit: ${formatPrice(profit)}
          </p>
          <p className="text-base sm:text-4xl font-bold">
            Final Score:{" "}
            {calculateFinalScore(budget, sustainStatus, profit, initialBudget)}
          </p>

          <AlertDialog>
            <AlertDialogTrigger>
              <div className="cursor-pointer text-black border px-2 sm:px-4 py-0 sm:py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition text-lg sm:text-2xl">
                Movie Plot
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{movieName} Plot</AlertDialogTitle>
                <AlertDialogDescription>{description}</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="text-xl cursor-pointer">
                  Close
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </motion.div>

        <button
          onClick={handlePlayAgain}
          className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition mt-8 text-3xl"
        >
          Play Again
        </button>
      </motion.div>
    </div>
  );
};

export default EndGame;
