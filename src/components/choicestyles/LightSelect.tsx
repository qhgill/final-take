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
    <div className="grid grid-cols-2 h-[40vh]">
      {choices.map((slide: Choice) => (
        <div
          key={slide.id}
          className="relative hover:cursor-pointer hover:scale-105 duration-100"
        >
          <div
            className="text-2xl font-bold text-black px-20 py-30 w-full  text-center"
            onClick={() => handleSwap(slide.price, slide.sustain, slide.profit)}
          >
            <p className="text-bold text-5xl">{slide.title}</p>
            <p className="text-2xl ">{slide.description}</p>
            <p className="text-2xl ">${slide.price}</p>
          </div>
          <Image
            src={spotlightimg}
            alt="ticket"
            className={`absolute -inset-y-[20vh] w-full h-[75vh] -z-1 object-contain ${slide.id === 1 ? "left-[5vw] rotate-y-0" : "right-[5vw] rotate-y-180"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default LightSelect;
