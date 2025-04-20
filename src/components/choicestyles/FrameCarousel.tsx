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
import frameimg from "@/public/film.png";

interface ChoiceTypes {
  choices: Choice[];
  handleSwap: (price: number, sustain: number, profit: number) => void;
}

const FrameCarousel = ({ choices, handleSwap }: ChoiceTypes) => {
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
              className="flex flex-col justify-center items-center h-full hover:cursor-pointer hover:scale-105 duration-100"
              onClick={() =>
                handleSwap(slide.price, slide.sustain, slide.profit)
              }
            >
              <Card className="bg-transparent w-full border-0 flex flex-col items-center justify-center h-full">
                <CardContent className="relative flex flex-col text-2xl font-bold justify-center items-start w-full h-full py-15 px-50 text-black">
                  <p className="text-bold text-5xl">{slide.title}</p>
                  <p className="text-2xl">{slide.description}</p>
                  <p className="text-2xl">${slide.price}</p>
                  <Image
                    src={frameimg}
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

export default FrameCarousel;
