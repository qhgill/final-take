import Image from "next/image";
import logo from "@/public/logo.png";
import { motion } from "framer-motion";

interface StartGameProps {
  handleSwap: (price: number, sustain: number, profit: number) => void;
}

const StartGame = ({ handleSwap }: StartGameProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-10 items-center w-full h-full">
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
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pb-9 text-center">
          THE FINAL TAKE
        </p>
        <Image
          src={logo}
          alt="logo"
          className="justify-center items-center"
          width={450}
          height={450}
        />
        <button
          onClick={() => {
            handleSwap(0, 0, 0);
          }}
          className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition mt-8 text-3xl"
        >
          Start Game
        </button>
      </motion.div>
    </div>
  );
};
export default StartGame;
