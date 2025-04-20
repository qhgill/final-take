import { Option } from "../utils/options";
import AnimateText from "./AnimateText";
import TicketSelect from "./choicestyles/TicketSelect";
import TicketCarousel from "./choicestyles/TicketCarousel";
import FrameCarousel from "./choicestyles/FrameCarousel";
import ClapperCarousel from "./choicestyles/ClapperCarousel";
import BillboardCarousel from "./choicestyles/BillboardCarousel";

interface PromptTypes {
  options: Option;
  month: number;
  handleSwap: (price: number, sustain: number, profit: number) => void;
}

const Prompt = ({ options, month, handleSwap }: PromptTypes) => {
  return (
    <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center">
      <p className="text-4xl font-bold">MONTH: {month}</p>
      <p className="text-6xl font-extrabold">{options.title}</p>
      <AnimateText text={options.description} typeSpeed={30} />
      {options.selectionView === 1 && (
        <TicketCarousel choices={options.answers} handleSwap={handleSwap} />
      )}
      {options.selectionView === 2 && (
        <FrameCarousel choices={options.answers} handleSwap={handleSwap} />
      )}
      {options.selectionView === 3 && (
        <ClapperCarousel choices={options.answers} handleSwap={handleSwap} />
      )}
      {options.selectionView === 4 && (
        <BillboardCarousel choices={options.answers} handleSwap={handleSwap} />
      )}
      {options.selectionView === 5 && (
        <TicketSelect choices={options.answers} handleSwap={handleSwap} />
      )}

      {options.selectionView >= 6 && (
        <button
          onClick={() => handleSwap}
          className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
          Switch Option
        </button>
      )}
    </div>
  );
};

export default Prompt;
