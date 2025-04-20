"use client";
import { Choice } from "@//utils/options";
import Image from "next/image";
import ticketimg from "@/public/ticket.png";
import { formatPrice } from "@//utils/options";

interface ChoiceTypes {
  choices: Choice[];
  handleSwap: (price: number, sustain: number, profit: number) => void;
}

const TicketSelect = ({ choices, handleSwap }: ChoiceTypes) => {
  return (
    <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-5 sm:gap-16">
      {choices.map((slide: Choice) => (
        <div key={slide.id}>
          <div
            className="relative text-lg sm:text-2xl font-bold text-white sm:pl-10 pl-3  pr-15 sm:pr-40 py-5 sm:py-12  hover:cursor-pointer hover:scale-105 duration-100 h-[15vh] sm:h-[50vh]"
            onClick={() => handleSwap(slide.price, slide.sustain, slide.profit)}
          >
            <p className="text-bold text-xl sm:text-5xl sm:pt-40">
              {slide.title}
            </p>
            <p className="text-sm sm:text-2xl ">{slide.description}</p>
            <p className="text-sm  sm:text-2xl ">${formatPrice(slide.price)}</p>
            <Image
              src={ticketimg}
              alt="ticket"
              className="absolute inset-0 -z-1 h-full w-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketSelect;
