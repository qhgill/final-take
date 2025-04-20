"use client";
import { Choice } from "@//utils/options";
import Image from "next/image";
import spotlightimg from "@/public/spotlight.png";

interface ChoiceTypes {
  choices: Choice[];
  handleSwap: (price: number, sustain: number, profit: number) => void;
}

const LightSelect = ({ choices, handleSwap }: ChoiceTypes) => {
  return (
    <div className="grid grid-cols-2 gap-16 h-[40vh]">
      {choices.map((slide: Choice) => (
        <div key={slide.id}>
          <div
            className={`relative text-2xl font-bold text-black px-30 py-30 hover:cursor-pointer hover:scale-105 duration-100 ${slide.id === 1 ? "text-left" : "text-right"}`}
            onClick={() => handleSwap(slide.price, slide.sustain, slide.profit)}
          >
            <p className="text-bold text-5xl">{slide.title}</p>
            <p className="text-2xl ">{slide.description}</p>
            <p className="text-2xl ">${slide.price}</p>
          </div>
        </div>
      ))}
      <Image
        src={spotlightimg}
        alt="ticket"
        className="absolute inset-y-20 -left-[10vw] -z-1 h-full w-full object-contain rotate-y-0"
      />
      <Image
        src={spotlightimg}
        alt="ticket"
        className="absolute inset-y-20 -right-[10vw] -z-1 h-full w-full object-contain rotate-y-180"
      />
    </div>
  );
};

export default LightSelect;
