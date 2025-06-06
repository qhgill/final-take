"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Choice } from "@//utils/options";
import Image from "next/image";
import ticketimg from "@/public/ticket.png";
import { formatPrice } from "@//utils/options";

interface ChoiceTypes {
  choices: Choice[];
  handleSwap: (price: number, sustain: number, profit: number) => void;
}

const TicketCarousel = ({ choices, handleSwap }: ChoiceTypes) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div>
      <Carousel
        opts={{
          loop: false,
        }}
        setApi={setApi}
        className="w-[70vw] sm:w-[40vw]"
      >
        <CarouselContent className="h-[20vh] sm:h-[30vh] basis-0.5">
          {choices.map((slide: Choice) => (
            <CarouselItem
              key={slide.id}
              className="flex flex-col justify-center items-center h-full hover:cursor-pointer hover:scale-105 duration-100"
              onClick={() =>
                handleSwap(slide.price, slide.sustain, slide.profit)
              }
            >
              <Card className="bg-transparent w-full border-0 flex flex-col items-center justify-center h-full">
                <CardContent className="text-pretty relative flex flex-col text-2xl font-bold justify-center items-start w-full sm:pr-0 pr-14 h-full py-8 sm:py-15 sm:pl-0 pl-15 sm:px-40">
                  <p className="text-bold text-xl sm:text-5xl text-white">
                    {slide.title}
                  </p>
                  <p className=" text-xs sm:text-2xl text-white">
                    {slide.description}
                  </p>
                  <p className="text-xs sm:text-2xl text-white">
                    {formatPrice(slide.price)}
                  </p>
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
        <CarouselPrevious className="scale-120 sm:scale-300 cursor-pointer" />
        <CarouselNext className="scale-120 sm:scale-300 cursor-pointer" />
      </Carousel>
      <div className="flex justify-center space-x-4 py-4">
        {choices.map((_, index) => (
          <button
            key={index}
            className={`h-5 w-5 rounded-full cursor-pointer ${current === index ? "bg-black" : "bg-white"}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketCarousel;
