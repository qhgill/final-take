"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Choice } from "@//utils/options";
import Image from "next/image";
import ticketimg from "@/public/ticket.png";

interface ChoiceTypes {
  choices: Choice[];
}

const TicketSelect = ({ choices }: ChoiceTypes) => {
  return (
    <div className="grid grid-cols-2 gap-16">
      {choices.map((slide: Choice) => (
        <div key={slide.id}>
          <div className="relative text-2xl font-bold text-white px-20 py-12">
            <p className="text-bold text-5xl">{slide.title}</p>
            <p className="text-2xl ">{slide.description}</p>
            <p className="text-2xl ">${slide.price}</p>
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
