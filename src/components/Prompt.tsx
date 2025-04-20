import { Option } from "../utils/options";
import AnimateText from "./AnimateText";
// import FrameCarousel from "./choicestyles/FrameCarousel";
import CustomSlider from "../components/choicestyles/CustomSlider";
import TicketSelect from "./choicestyles/TicketSelect";

interface PromptTypes {
  options: Option;
  month: number;
  handleSwap: (price: number, sustain: number, profit: number) => void;
  updateBudget: (newBudget: number) => void;
}

const Prompt = ({ options, month, handleSwap, updateBudget }: PromptTypes) => {
  return (
    <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center">
      {month != 1 && (
        <>
          <p className="text-4xl font-bold">MONTH: {month}</p>
          <p className="text-6xl font-extrabold">{options.title}</p>
          <AnimateText text={options.description} typeSpeed={30} />

          <TicketSelect choices={options.answers} handleSwap={handleSwap} />

          {options.selectionView != 1 && (
            <button
              onClick={() => handleSwap}
              className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
            >
              Switch Option
            </button>
          )}
        </>
      )}
      {month === 1 && (
        <div>
          <CustomSlider updateBudget={updateBudget} />

          <button
            onClick={() => handleSwap(0, 0, 0)}
            className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Switch Option
          </button>
        </div>
      )}
    </div>
  );
};

export default Prompt;
