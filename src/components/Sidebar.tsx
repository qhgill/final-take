import React, { useState } from "react";
import Image from "next/image";
import grayStar from "@/public/star/grayStar.png";
import yellowStar from "@/public/star/yellowStar.png";
import Question from "../components/Question";
import earth1Happy from "@/public/earth/earth1Happy.png";
import earth2Dull from "@/public/earth/earth2Dull.png";
import earth3Gray from "@/public/earth/earth3Gray.png";
import earth4Worried from "@/public/earth/earth4Worried.png";
import earth5Sad from "@/public/earth/earth5Sad.png";
import { formatPrice } from "@//utils/options";
import { motion } from "framer-motion";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface SidebarTypes {
  budget: number;
  sustainStatus: number;
  onBudgetChange: (newBudget: number) => void;
  currentMonth: number;
}

const Sidebar = ({
  budget,
  sustainStatus,
  onBudgetChange,
  currentMonth,
}: SidebarTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [usedStars, setUsedStars] = useState<boolean[]>([false, false, false]);

  const handleStarClick = (starIndex: number) => {
    if (currentMonth <= 2) return;
    if (!usedStars[starIndex]) {
      setSelectedStar(starIndex);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStar(null);
  };

  const handleFavor = () => {
    console.log(`Favor called for star ${selectedStar}`);
    if (selectedStar !== null) {
      onBudgetChange(budget + 500000);
      setUsedStars((prevUsedStars) => {
        const newUsedStars = [...prevUsedStars];
        newUsedStars[selectedStar] = true;
        return newUsedStars;
      });
    }
    handleCloseModal();
  };

  const getEarthImage = (sustainStatus: number) => {
    if (sustainStatus > 80) {
      return earth1Happy;
    } else if (sustainStatus > 60) {
      return earth2Dull;
    } else if (sustainStatus > 40) {
      return earth3Gray;
    } else if (sustainStatus > 20) {
      return earth4Worried;
    } else {
      return earth5Sad;
    }
  };

  const earthImage = getEarthImage(sustainStatus);

  return (
    <>
      <div className="flex sm:hidden flex-col items-center justify-between h-screen max-h-screen w-full top-0 inxet-x-0 absolute">
        <div className="pt-5 flex gap-x-7 justify-between items-end ">
          <div className="flex flex-col justify-between items-center">
            <p className="text-start text-3xl">${formatPrice(budget)}</p>
            <p className="text-start text-2xl font-extrabold">Budget</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={earthImage}
              alt="Earth Status"
              className=" object-contain size-15"
            />
            <p className="text-start text-2xl font-extrabold">Sustainability</p>
          </div>
          <Question />
        </div>
        <div className="flex flex-col">
          <p className="text-center text-2xl font-extrabold">Favors</p>
          <div className="flex items-center pb-5">
            {[0, 1, 2].map((starIndex) => (
              <Image
                key={starIndex}
                src={usedStars[starIndex] ? grayStar : yellowStar}
                alt={usedStars[starIndex] ? "Used Star" : "Available Star"}
                className={`size-20 duration-100 ${
                  currentMonth <= 2 || usedStars[starIndex]
                    ? "cursor-not-allowed opacity-50"
                    : "hover:scale-80 cursor-pointer"
                }`}
                onClick={() => handleStarClick(starIndex)}
              />
            ))}
          </div>
        </div>

        <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Call in a Favor</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to call in a favor?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleCloseModal}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleFavor}>
                Call in Favor
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="hidden sm:flex flex-col items-start justify-between h-screen max-h-screen w-[20vw] mx-4 absolute left-0 inset-y-0">
        <div className="flex flex-col gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{ originX: 0.5, originY: 0.5 }}
            className="flex justify-center items-center mr-20"
          >
            <Image
              src={earthImage}
              alt="Earth Status"
              className="object-contain m-2 size-40"
            />
          </motion.div>
          <Question />
          <p className="text-start text-black text-5xl font-extrabold">
            Budget
          </p>
          <p className="text-start text-white text-6xl">
            ${formatPrice(budget)}
          </p>
        </div>
        <div>
          <p className="text-start text-5xl text-black font-extrabold gap-4">
            Sustainability
          </p>
          <Image
            src={earthImage}
            alt="Earth Status"
            className=" object-contain size-40"
          />
        </div>

        <div className="flex flex-col  justify-start gap-y-5 py-10">
          <p className="text-start text-black text-5xl font-extrabold">
            Favors
          </p>
          {[0, 1, 2].map((starIndex) => (
            <Image
              key={starIndex}
              src={usedStars[starIndex] ? grayStar : yellowStar}
              alt={usedStars[starIndex] ? "Used Star" : "Available Star"}
              className={`size-20 duration-100 ${
                currentMonth <= 2 || usedStars[starIndex]
                  ? "cursor-not-allowed opacity-50"
                  : "hover:scale-80 cursor-pointer"
              }`}
              onClick={() => handleStarClick(starIndex)}
            />
          ))}
        </div>
        <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Call in a Favor</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to call in a favor?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleCloseModal}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleFavor}>
                Call in Favor
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default Sidebar;
