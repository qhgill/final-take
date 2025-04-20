"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Prompt from "../components/Prompt";
import { Option, User } from "../utils/options";
import Sidebar from "../components/Sidebar";
import { productionOptions } from "../data/options";
import EndGame from "../components/EndGame";
import Image from "next/image";
import curtain from "@/public/curtain.png";

const usedOptions: Option[] = [];

const user: User = {
  month: 1,
  budget: 2000000,
  sustStat: 100,
  profit: 100,
  production: productionOptions,
  used: usedOptions,
};

const Home = () => {
  const [selectedOption, setSelectedOption] = useState<Option>(
    productionOptions[0],
  );
  const [currentEventDone, setCurrentEventDone] = useState(0);
  const [visible, setVisible] = useState(true);
  const [promptKey, setPromptKey] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [currentBudget, setCurrentBudget] = useState(user.budget);
  const [movieName, setMovieName] = useState("");

  const updateBudget = (newBudget: number) => {
    setCurrentBudget(newBudget);
    user.budget = newBudget;
  };

  const handleSwap = (price: number, sustain: number, profit: number) => {
    setVisible(false);

    setCurrentEventDone((prev) => prev + 1);

    setCurrentBudget((prevBudget) => prevBudget - price);
    user.budget -= price;
    user.sustStat -= sustain;
    user.profit += profit;

    user.month += 1;
    // if (currentEventDone - 2 >= productionOptions.length) {
    if (currentEventDone + 2 >= 2) {
      setIsEnd(true);
      setVisible(true);
      setPromptKey((prev) => prev + 1);
      return;
    }

    setSelectedOption(productionOptions[user.month - 4]);
    setPromptKey((prev) => prev + 1);
    setVisible(true);
  };
  const handleBudgetChange = (newBudget: number) => {
    setCurrentBudget(newBudget);
    user.budget = newBudget;
  };

  return (
    <div>
      <div className="w-screen relative h-screen flex items-center justify-center bg-radial from-gray-100 to-gray-400">
        {!isEnd && (
          <Sidebar
            budget={currentBudget}
            sustainStatus={user.sustStat}
            onBudgetChange={handleBudgetChange}
          />
        )}
        {isEnd && (
          <div className="flex-row">
            <Image
              src={curtain}
              alt="curtain"
              className="h-screen absolute left-0 top-0"
            />
            <EndGame movieName={movieName} />
            <Image
              src={curtain}
              alt="curtain"
              className="h-screen absolute right-0 top-0"
            />
          </div>
        )}
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            {visible && (
              <motion.div
                key={promptKey}
                initial={{
                  x: 300,
                  opacity: 0,
                  scale: 0.1,
                  filter: "blur(5px)",
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  x: -300,
                  opacity: 0,
                  scale: 0.1,
                  filter: "blur(5px)",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.8, 0.55, 1],
                }}
              >
                {!isEnd && (
                  <Prompt
                    options={selectedOption}
                    month={user.month}
                    handleSwap={handleSwap}
                    updateBudget={updateBudget}
                    setMovieName={setMovieName}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Home;
