import Image from "next/image";
import Option from "../utils/options";
import AnimateText from "./AnimateText";

interface PromptTypes {
  options: Option;
}

const Prompt = ({
  options
}: PromptTypes) => {
  return (
    <div className="flex flex-col w-[80vw] max-h-[90vh] justify-center gap-y-10 items-center bg-gray-500">
      <p className="text-4xl font-bold">MONTH: {options.month}</p>
      <p className="text-6xl font-extrabold">{options.title}</p>
      <AnimateText text={options.description} typeSpeed={options.speed} />
      <Image src={options.icon} alt="choice icon" />
      {options.placeholder}
    </div>
  );
};

export default Prompt;
