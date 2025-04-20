"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Prompt from "../components/Prompt";
import placeholderimg from "@/public/placeholder.png";
import { Option, User } from "../utils/options";
import Sidebar from "../components/Sidebar";
import { marketingOptions } from "../data/options";
import { productionOptions } from "../data/options";

import directorChair from "@/public/directorChair.png";
import office from "@/public/office.png";

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
  {
    month: 3,
    title: "third title",
    icon: placeholderimg,
    description: "i love cats",
    placeholder: "meow",
  },
  {
    month: 4,
    title: "fourth title",
    icon: placeholderimg,
    description: "i love cats too",
    placeholder: "purr",
  },
  {
    month: 5,
    title: "fifth title",
    icon: placeholderimg,
    description: "i love cats",
    placeholder: "meow",
  },
  {
    month: 6,
    title: "sixth title",
    icon: placeholderimg,
    description: "i love cats too",
    placeholder: "purr",
  },
  {
    month: 7,
    title: "seventh title",
    icon: placeholderimg,
    description: "i love cats",
    placeholder: "meow",
  },
  {
    month: 8,
    title: "eighth title",
    icon: placeholderimg,
    description: "i love cats too",
    placeholder: "purr",
  },
  {
    month: 9,
    title: "title",
    icon: placeholderimg,
    description: "i love cats",
    placeholder: "meow",
  },
  {
    month: 10,
    title: "another title",
    icon: placeholderimg,
    description: "i love cats too",
    placeholder: "purr",
  },
  {
    month: 11,
    title: "title",
    icon: placeholderimg,
    description: "i love cats",
    placeholder: "meow",
  },
  {
    month: 12,
    title: "another title",
    icon: placeholderimg,
    description: "i love cats too",
    placeholder: "purr",
  },
];

type FixedAssets = {
  [month: number]: string;
};

const fixedAssets: FixedAssets = {
  1: office.src,
  2: office.src,
  3: office.src,
  4: directorChair.src,
  5: directorChair.src,
  6: directorChair.src,
  7: directorChair.src,
  8: directorChair.src,
  9: office.src,
  10: directorChair.src,
  11: office.src,
  12: directorChair.src,
};

const Home = () => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [visible, setVisible] = useState(true);
  const [promptKey, setPromptKey] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(1);
  const [currentFixedAsset, setCurrentFixedAsset] = useState<string>(
    fixedAssets[user.month] || "",
  );

  useEffect(() => {
    setCurrentFixedAsset(fixedAssets[currentMonth] || "");
  }, [currentMonth]);

  const handleSwap = () => {
    setVisible(false);

    const nextOptionIndex = options.findIndex(
      (option) => option.month === currentMonth,
    );
    if (nextOptionIndex !== -1) {
      setSelectedOption(options[nextOptionIndex]);
    }

    setPromptKey((prev) => prev + 1);
    setVisible(true);
    setCurrentMonth((prevMonth) => {
      const nextMonth = prevMonth + 1;
      return nextMonth > Object.keys(fixedAssets).length ? 1 : nextMonth;
    });
  };
  //   // this needs to be changed to a random + uses month so is scuffed
  //   setSelectedOption((prev) =>
  //     prev.month === options[0].month ? options[1] : options[0]
  //   );
  //   setPromptKey((prev) => prev + 1);
  //   setVisible(true);
  // };

  return (
    <div>
      <div className="overflow-x-hidden w-screen relative h-screen flex items-center justify-center bg-radial from-gray-100 to-gray-400">
        {currentFixedAsset && (
          <div className="absolute bottom-0 right-0 z-10">
            <Image
              src={currentFixedAsset}
              alt="Fixed Asset"
              width={300}
              height={300}
            />
          </div>
        )}

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
