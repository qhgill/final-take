import Image from "next/image";
import marquee from "@/public/marquee.png";
import { motion } from "framer-motion";
interface EndGameProps {
  movieName: string;
}

const EndGame = ({ movieName }: EndGameProps) => {
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
        <p className="text-4xl font-bold">THE FINAL Take</p>

        <Image
          src={marquee}
          alt="marquee"
          className="justify-center items-center"
          width={800}
          height={300}
        />
        <p className="text-4xl font-bold">{movieName} was a failure!</p>
      </motion.div>
    </div>
  );
};
export default EndGame;
