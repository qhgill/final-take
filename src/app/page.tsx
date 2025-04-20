"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Prompt from "../components/Prompt";
import placeholderimg from "@/public/placeholder.png";
import { Option, User } from "../utils/options";
import Sidebar from "../components/Sidebar";
import { marketingOptions } from "../data/options";
import { productionOptions } from "../data/options";

const usedOptions: Option[] = [];

const user: User = {
  month: 1,
  budget: 100,
  sustStat: 100,
  profit: 100,
  production: productionOptions,
  marketing: marketingOptions,
  used: usedOptions,
};

const options: Option[] = [
  {
    month: 1,
    title: "title",
    icon: placeholderimg,
    description: "i love cats",
    placeholder: "meow",
  },
  {
    month: 2,
    title: "another title",
    icon: placeholderimg,
    description: "i love cats too",
    placeholder: "purr",
  },
];

const Home = () => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [visible, setVisible] = useState(true);
  const [promptKey, setPromptKey] = useState(0);

  const handleSwap = () => {
    setVisible(false);

    // this needs to be changed to a random + uses month so is scuffed
    setSelectedOption((prev) =>
      prev.month === options[0].month ? options[1] : options[0],
    );
    setPromptKey((prev) => prev + 1);
    setVisible(true);
  };

  return (
    <div>
      <div className="w-screen relative h-screen flex items-center justify-center bg-radial from-gray-100 to-gray-400">
        <Sidebar budget={user.budget} sustainStatus={user.sustStat} />
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            {visible && (
              <motion.div
                key={promptKey}
                initial={{
                  x: 300,
                  opacity: 0,
                  scale: 0.1,
                  rotate: 45,
                  filter: "blur(5px)",
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  x: -300,
                  opacity: 0,
                  scale: 0.1,
                  rotate: -45,
                  filter: "blur(5px)",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.8, 0.55, 1],
                }}
              >
                <Prompt options={selectedOption} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          onClick={handleSwap}
          className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
          Switch Option
        </button>
      </div>
    </div>
  );
};

export default Home;
