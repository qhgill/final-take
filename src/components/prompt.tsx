import Image, { StaticImageData } from "next/image";
import Option from "../utils/options";

interface PromptTypes {
  day: string;
  title: string;
  icon: StaticImageData;
  options: Option;
  description: string;
  typespeed: number;
}

const prompt = ({
  day,
  title,
  icon,
  options,
  description,
  typespeed,
}: PromptTypes) => {
  return (
    <div className="flex flex-col w-[70vw] max-h-[90vh] bg-gray-500">
      <div>
        <Image src={icon} alt="choice icon" />
        {day}
        {title}
        {options.placeholder}
        {description}
        {typespeed}
      </div>
    </div>
  );
};

export default prompt;
