import { Option } from "../utils/options";
import { useState } from "react";
import AnimateText from "./AnimateText";
import CustomSlider from "../components/choicestyles/CustomSlider";
import TicketSelect from "./choicestyles/TicketSelect";
import TicketCarousel from "./choicestyles/TicketCarousel";
import FrameCarousel from "./choicestyles/FrameCarousel";
import ClapperCarousel from "./choicestyles/ClapperCarousel";
import BillboardCarousel from "./choicestyles/BillboardCarousel";
import LightSelect from "./choicestyles/LightSelect";
import StartGame from "./StartGame";

interface PromptTypes {
  options: Option;
  month: number;
  handleSwap: (price: number, sustain: number, profit: number) => void;
  updateBudget: (newBudget: number) => void;
  setMovieName: (name: string) => void;
}

const clapperInitial = [
  {
    id: 1,
    title: "Action / Sci-Fi",
    description: "Explosive, thrilling, and full of big moments.",
    price: 0,
    sustain: 0,
    profit: 2000000,
  },
  {
    id: 2,
    title: "Drama / Comedy",
    description: "Emotional, relatable, and full of character.",
    price: 0,
    sustain: 0,
    profit: 1000000,
  },
];

const Prompt = ({
  options,
  month,
  handleSwap,
  updateBudget,
  setMovieName,
}: PromptTypes) => {
  const [localMovieName, setLocalMovieName] = useState("");

  return (
    <div className="flex flex-col w-[70vw] max-h-[100vh] sm:max-h-screen justify-center gap-y-10 items-center">
      {month === 0 && <StartGame handleSwap={handleSwap} />}
      {month > 3 && (
        <>
          <p className="text-2xl sm:text-5xl text-white font-bold">
            MONTH: {month - 2}
          </p>
          <p className="text-3xl sm:text-8xl font-extrabold">{options.title}</p>
          <AnimateText text={options.description} typeSpeed={23} />
          {options.selectionView === 1 && (
            <TicketCarousel choices={options.answers} handleSwap={handleSwap} />
          )}
          {options.selectionView === 2 && (
            <FrameCarousel choices={options.answers} handleSwap={handleSwap} />
          )}
          {options.selectionView === 3 && (
            <ClapperCarousel
              choices={options.answers}
              handleSwap={handleSwap}
            />
          )}
          {options.selectionView === 4 && (
            <BillboardCarousel
              choices={options.answers}
              handleSwap={handleSwap}
            />
          )}
          {options.selectionView === 5 && (
            <TicketSelect choices={options.answers} handleSwap={handleSwap} />
          )}
          {options.selectionView === 6 && (
            <LightSelect choices={options.answers} handleSwap={handleSwap} />
          )}

          {options.selectionView > 6 && (
            <button
              onClick={() => handleSwap(0, 0, 0)}
              className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
            >
              Switch Option
            </button>
          )}
        </>
      )}
      {month === 1 && (
        <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center">
          <p className="text-3xl sm:text-5xl font-bold text-white">MONTH {1}</p>
          <p className="text-3xl sm:text-8xl font-extrabold">
            Select Movie Name
          </p>
          <AnimateText
            text={
              "Hello! It's time to step into your role as Director for your movie! Please enter your movie name!"
            }
            typeSpeed={23}
          />
          <input
            type="text"
            placeholder="Enter your movie name"
            className="border-4 px-4 py-2 rounded-lg w-full max-w-[400px] text-center text-xl sm:text-3xl"
            onChange={(e) => {
              setLocalMovieName(e.target.value);
              setMovieName(e.target.value);
            }}
            value={localMovieName}
          />

          <button
            onClick={() => {
              if (localMovieName.trim() !== "") {
                handleSwap(0, 0, 0);
              }
            }}
            disabled={localMovieName.trim() === ""}
            className={`border px-4 py-2 rounded-lg transition text-lg sm:text-2xl
    ${
      localMovieName.trim() === ""
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-gray-200 hover:bg-gray-300 cursor-pointer "
    }`}
          >
            Finalize Movie Name
          </button>
        </div>
      )}

      {month === 2 && (
        <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center">
          <p className="text-3xl sm:text-4xl font-bold text-white">MONTH {1}</p>
          <p className="text-5xl sm:text-8xl font-extrabold">Select Budget</p>
          <AnimateText
            text={
              "Each month, you'll make a key decision in the filmmaking pipeline. Every choice shapes your film and your environmental impact. Let’s set up your initial budget."
            }
            typeSpeed={23}
          />
          <CustomSlider updateBudget={updateBudget} />

          <button
            onClick={() => {
              handleSwap(0, 0, 0);
            }}
            className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition text-lg sm:text-2xl"
          >
            Finalize Budget
          </button>
        </div>
      )}

      {month === 3 && (
        <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center">
          <p className="text-3xl sm:text-4xl font-bold text-white">MONTH {1}</p>
          <p className="text-4xl sm:text-8xl font-extrabold">Select Genre</p>
          <AnimateText
            text={
              "Now that you have your budget, what kind of movie do you want to make?"
            }
            typeSpeed={23}
          />
          <ClapperCarousel choices={clapperInitial} handleSwap={handleSwap} />
        </div>
      )}
    </div>
  );
};

export default Prompt;
