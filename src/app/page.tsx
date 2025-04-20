"use client";

import { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Prompt from "../components/Prompt";
import { Option, User } from "../utils/options";
import Sidebar from "../components/Sidebar";
import { productionOptions } from "../data/options";
import Image from "next/image";
import curtain from "@/public/curtain.png";
import EndGame from "../components/EndGame";
import office from "@/public/office.png";
import directorChair from "@/public/directorChair.png";

const usedOptions: Option[] = [];

const user: User = {
  month: 0,
  budget: 2000000,
  sustStat: 100,
  profit: 100,
  production: productionOptions,
  used: usedOptions,
};
type FixedAssets = {
  [month: number]: { src: StaticImageData; alt: string };
};

const fixedAssets: FixedAssets = {
  1: { src: office, alt: "Office" },
  2: { src: office, alt: "Office" },
  3: { src: office, alt: "Office" },
  4: { src: office, alt: "Office" },
  5: { src: office, alt: "Office" },
  6: { src: directorChair, alt: "Director's Chair" },
  7: { src: directorChair, alt: "Director's Chair" },
  8: { src: directorChair, alt: "Director's Chair" },
  9: { src: directorChair, alt: "Director's Chair" },
  10: { src: directorChair, alt: "Director's Chair" },
  11: { src: directorChair, alt: "Director's Chair" },
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
  const [initialBudget, setInitialBudget] = useState(user.budget);
  const [currentFixedAsset, setCurrentFixedAsset] = useState<{
    src: StaticImageData;
    alt: string;
  } | null>(null);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (user.month >= 1 && user.month <= 11) {
      setCurrentFixedAsset(fixedAssets[user.month] || null);
    } else {
      setCurrentFixedAsset(null);
    }
  }, [user.month]);

  const updateBudget = (newBudget: number) => {
    setCurrentBudget(newBudget);
    user.budget = newBudget;
    console.log(user.month);
    if (user.month == 2) {
      setInitialBudget(newBudget);
      console.log("Initial Budget: ", initialBudget);
    }
  };

  const handleSwap = (price: number, sustain: number, profit: number) => {
    setVisible(false);

    if (user.month == 3) {
      if (profit == 2000000) {
        setGenre("Action / Sci-Fi");
      } else {
        setGenre("Drama / Comedy");
      }
    }

    setCurrentEventDone((prev) => prev + 1);

    setCurrentBudget((prevBudget) => prevBudget - price);
    user.budget -= price;
    user.sustStat -= sustain;
    user.profit += profit;

    user.month += 1;
    if (currentEventDone - 2 >= productionOptions.length) {
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
      <div className="overflow-x-hidden w-screen relative h-screen flex flex-col sm:flex-row items-center justify-center bg-[radial-gradient(circle,_#5B575759_2%,_#4D4D4D88_47%,_#343333E6_100%)]">
        {currentFixedAsset && (
          <div className="absolute bottom-0 right-0 opacity-75">
            <Image
              src={currentFixedAsset.src}
              alt={currentFixedAsset.alt}
              className="w-[150px] h-[150px] sm:w-[500px] sm:h-[500px]"
            />
          </div>
        )}
        {!isEnd && user.month != 0 && (
          <Sidebar
            budget={currentBudget}
            sustainStatus={user.sustStat}
            onBudgetChange={handleBudgetChange}
            currentMonth={user.month}
          />
        )}
        {user.month == 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0,
                duration: 1,
              }}
            >
              <Image
                src={curtain}
                alt="curtain"
                className="hidden md:flex h-screen absolute left-0 top-0"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0,
                duration: 1,
              }}
            >
              <Image
                src={curtain}
                alt="curtain"
                className="hidden md:flex h-screen absolute right-0 top-0"
              />
            </motion.div>
          </>
        )}
        {isEnd && (
          <div className="">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0,
                duration: 1,
              }}
            >
              <Image
                src={curtain}
                alt="curtain"
                className="hidden lg:flex h-screen absolute left-0 top-0"
              />
            </motion.div>

            <EndGame
              movieName={movieName}
              budget={user.budget}
              sustainStatus={user.sustStat}
              profit={user.profit}
              initialBudget={initialBudget}
              genre={genre}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0,
                duration: 1,
              }}
            >
              <Image
                src={curtain}
                alt="curtain"
                className="hidden lg:flex h-screen absolute right-0 top-0"
              />
            </motion.div>
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
