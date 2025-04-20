import { Option } from "../utils/options";

import AnimateText from "./AnimateText";
import CustomSlider from "../components/choicestyles/CustomSlider";
import TicketSelect from "./choicestyles/TicketSelect";
import TicketCarousel from "./choicestyles/TicketCarousel";
import FrameCarousel from "./choicestyles/FrameCarousel";
import ClapperCarousel from "./choicestyles/ClapperCarousel";
import BillboardCarousel from "./choicestyles/BillboardCarousel";

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
    title: "Action / Sci-Fi s",
    description: "Explosive, thrilling, and full of big moments.",
    price: 1,
    sustain: 1,
    profit: 1,
  },
  {
    id: 2,
    title: "Drama / Comedy",
    description: "Emotional, relatable, and full of character.",
    price: 1,
    sustain: 1,
    profit: 1,
  },
];

const Prompt = ({
  options,
  month,
  handleSwap,
  updateBudget,
  setMovieName,
}: PromptTypes) => {
  return (
    <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center">
      {month > 3 && (
        <>
          <p className="text-4xl font-bold">MONTH: {month - 2}</p>
          <p className="text-6xl font-extrabold">{options.title}</p>
          <AnimateText text={options.description} typeSpeed={30} />
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

          {options.selectionView >= 6 && (
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
          <p className="text-4xl font-bold">MONTH: {1}</p>
          <AnimateText
            text={
              "Hello! It’s time to step into your role as Director for your movie! Please enter your movie name!"
            }
            typeSpeed={30}
          />
          <input
            type="text"
            placeholder="Enter your movie name"
            className="border-4 px-4 py-2 rounded-lg w-full max-w-[400px] text-center"
            onChange={(e) => setMovieName(e.target.value)}
          />

          <button
            onClick={() => {
              handleSwap(0, 0, 0);
            }}
            className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Finalize Movie Name
          </button>
        </div>
      )}

      {month === 2 && (
        <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center">
          <p className="text-4xl font-bold">MONTH: {1}</p>
          <AnimateText
            text={
              "Each month, you’ll make a key decision in the filmmaking pipeline. Every choice shapes your film and your environmental impact. Let’s set up your initial budget."
            }
            typeSpeed={30}
          />
          <CustomSlider updateBudget={updateBudget} />

          <button
            onClick={() => {
              handleSwap(0, 0, 0);
            }}
            className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Finalize Budget
          </button>
        </div>
      )}

      {month === 3 && (
        <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center">
          <p className="text-4xl font-bold">MONTH: {1}</p>
          <AnimateText
            text={
              "Now that you have your budget, what kind of movie do you want to make?"
            }
            typeSpeed={30}
          />
          <ClapperCarousel choices={clapperInitial} handleSwap={handleSwap} />

          <button
            onClick={() => {
              handleSwap(0, 0, 0);
            }}
            className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Choose Genre
          </button>
        </div>
      )}
    </div>
  );
};

export default Prompt;
