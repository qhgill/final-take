import { Option } from "../utils/options";
import AnimateText from "./AnimateText";
import { Choice } from "../utils/options";
import TicketSelect from "./choicestyles/TicketSelect";

interface PromptTypes {
  options: Option;
  month: number;
  handleSwap: (price: number, sustain: number, profit: number) => void;
}

const dummyset: Choice[] = [
  {
    id: 1,
    title: "title1",
    description: "the best choice",
    price: 1,
    sustain: 1,
    profit: 1,
  },
  {
    id: 2,
    title: "title2",
    description: "also the best choice",
    price: 1,
    sustain: 1,
    profit: 1,
  },
];

const Prompt = ({ options, month, handleSwap }: PromptTypes) => {
  return (
    <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center">
      <p className="text-4xl font-bold">MONTH: {month}</p>
      <p className="text-6xl font-extrabold">{options.title}</p>
      <AnimateText text={options.description} typeSpeed={30} />
      <TicketSelect choices={dummyset} handleSwap={handleSwap} />

      {options.selectionView != 1 && (
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
