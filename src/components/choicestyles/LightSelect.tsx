"use client";
import { Choice } from "@//utils/options";
import Image from "next/image";
import spotlightimg from "@/public/spotlight.png";
import { formatPrice } from "@//utils/options";

interface ChoiceTypes {
  choices: Choice[];
  handleSwap: (price: number, sustain: number, profit: number) => void;
}

const LightSelect = ({ choices, handleSwap }: ChoiceTypes) => {
  return (
    <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 h-[35vh] sm:h-[40vh]">
      {choices.map((slide: Choice) => (
        <div
          key={slide.id}
          className="relative hover:cursor-pointer hover:scale-105 duration-100"
        >
          <div
            className="text-2xl font-bold text-black px-1 sm:px-20 py-10 sm:py-30 w-full text-center"
            onClick={() => handleSwap(slide.price, slide.sustain, slide.profit)}
          >
            <p className="text-bold text-xl sm:text-5xl">{slide.title}</p>
            <p className="text-sm sm:text-2xl ">{slide.description}</p>
            <p className="text-sm sm:text-2xl ">${formatPrice(slide.price)}</p>
          </div>
          <Image
            src={spotlightimg}
            alt="ticket"
            className={`absolute -inset-y-[8vh] sm:-inset-y-[20vh] w-full h-[30vh] sm:h-[75vh] -z-1 object-contain ${slide.id === 1 ? "left-[5vw] rotate-y-0" : "right-[5vw] rotate-y-180"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default LightSelect;
