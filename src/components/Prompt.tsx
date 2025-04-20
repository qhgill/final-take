import { Option } from "../utils/options";
import AnimateText from "./AnimateText";
import TicketCarousel from "./choicestyles/TicketCarousel";
import { Choice } from "../utils/options";

interface PromptTypes {
  options: Option;
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
  {
    id: 3,
    title: "title3",
    description: "an even better choice",
    price: 1,
    sustain: 1,
    profit: 1,
  },
];

const Prompt = ({ options }: PromptTypes) => {
  return (
    <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center">
      <p className="text-4xl font-bold">MONTH: {options.month}</p>
      <p className="text-6xl font-extrabold">{options.title}</p>
      <AnimateText text={options.description} typeSpeed={30} />
      <TicketCarousel choices={dummyset} />
      {options.placeholder}
    </div>
  );
};

export default Prompt;
