import Image from "next/image";
import logo from "@/public/logo.png";
import { motion } from "framer-motion";

const StartGame = () => {
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
        <p className="text-7xl font-bold pb-9 ">THE FINAL TAKE</p>
        <Image
          src={logo}
          alt="logo"
          className="justify-center items-center"
          width={450}
          height={200}
        />
        <button className="text-4xl font-bold p-15 text-white">
          START GAME
        </button>
      </motion.div>
    </div>
  );
};
export default StartGame;
