import React, { useState } from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.png";
// import grayStar from "@/public/star/grayStar.png";
import yellowStar from "@/public/star/yellowStar.png";
import Question from "../components/Question";
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
}

const Sidebar = ({ budget, sustainStatus, onBudgetChange }: SidebarTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const handleStarClick = (starIndex: number) => {
    setSelectedStar(starIndex);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStar(null);
  };

  const handleFavor = () => {
    console.log(`Favor called for star ${selectedStar}`);
    onBudgetChange(budget + 50);
    handleCloseModal();
  };

  return (
    <div className="flex flex-col items-start justify-between h-screen max-h-screen w-[20vw] mx-4 absolute left-0 inset-y-0">
      <div className="flex flex-col gap-4">
        <Image
          src={placeholder}
          alt="logo"
          className="aspect-square object-fill size-40 mt-5"
        />
        <Question />
        <p className="text-start text-3xl">
          budget
          <br />${budget}
        </p>
        <p className="text-start text-3xl">
          sustain:
          <br />
          {sustainStatus}
        </p>
      </div>
      <div className="flex flex-col  justify-start gap-y-5 py-10">
        {[0, 1, 2].map((starIndex) => (
          <Image
            key={starIndex}
            src={yellowStar}
            alt="placeholder"
            className={`size-20 hover:scale-80 duration-100 cursor-pointer`}
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
  );
};

export default Sidebar;
