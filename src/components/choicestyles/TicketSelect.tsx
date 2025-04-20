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
    <div className="grid grid-cols-2 gap-16">
      {choices.map((slide: Choice) => (
        <div key={slide.id}>
          <div
            className="relative text-2xl font-bold text-white px-20 py-12 hover:cursor-pointer hover:scale-105 duration-100"
            onClick={() => handleSwap(slide.price, slide.sustain, slide.profit)}
          >
            <p className="text-bold text-5xl">{slide.title}</p>
            <p className="text-2xl ">{slide.description}</p>
            <p className="text-2xl ">${formatPrice(slide.price)}</p>
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
