"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Choice } from "@//utils/options";
import Image from "next/image";
import ticketimg from "@/public/ticket.png";

interface ChoiceTypes {
  choices: Choice[];
  handleSwap: (price: number, sustain: number, profit: number) => void;
}

const TicketCarousel = ({ choices, handleSwap }: ChoiceTypes) => {
  return (
    <div>
      <Carousel
        opts={{
          loop: false,
        }}
        className="w-[40vw]"
      >
        <CarouselContent className="h-[30vh]">
          {choices.map((slide: Choice) => (
            <CarouselItem
              key={slide.id}
              className="flex flex-col justify-center items-center h-full cursor-pointer"
              onClick={() =>
                handleSwap(slide.price, slide.sustain, slide.profit)
              }
            >
              <Card className="bg-transparent w-full border-0 flex flex-col items-center justify-center h-full">
                <CardContent className="relative flex flex-col text-2xl font-bold justify-center items-start w-full h-full py-15 px-30">
                  <p className="text-bold text-5xl text-white">{slide.title}</p>
                  <p className="text-2xl text-white">{slide.description}</p>
                  <p className="text-2xl text-white">${slide.price}</p>
                  <Image
                    src={ticketimg}
                    alt="ticket"
                    className="absolute inset-0 -z-1 h-full w-full object-contain"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TicketCarousel;
