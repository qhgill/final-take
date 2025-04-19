import Image, { StaticImageData } from "next/image";
import Option from "../utils/options";
import AnimateText from "./AnimateText";

interface PromptTypes {
  month: number;
  title: string;
  icon: StaticImageData;
  options: Option;
  description: string;
  speed: number;
}

const Prompt = ({
  month,
  title,
  icon,
  options,
  description,
  speed,
}: PromptTypes) => {
  return (
    <div className="flex flex-col w-[70vw] max-h-[90vh] justify-center gap-y-10 items-center bg-gray-500">
      <p className="text-4xl font-bold">MONTH: {month}</p>
      <p className="text-6xl font-extrabold">{title}</p>
      <AnimateText text={description} typeSpeed={speed} />
      <Image src={icon} alt="choice icon" />
      {options.placeholder}
    </div>
  );
};

export default Prompt;
