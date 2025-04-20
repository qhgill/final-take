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
import billboardimg from "@/public/marquee.png";
import { formatPrice } from "@//utils/options";

interface ChoiceTypes {
  choices: Choice[];
  handleSwap: (price: number, sustain: number, profit: number) => void;
}

const BillboardCarousel = ({ choices, handleSwap }: ChoiceTypes) => {
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
        <CarouselContent className="flex h-[25vh] sm:h-[35vh] basis-0.5">
          {choices.map((slide: Choice) => (
            <CarouselItem
              key={slide.id}
              className="flex flex-col justify-center items-center h-full hover:cursor-pointer hover:scale-105 duration-100"
              onClick={() =>
                handleSwap(slide.price, slide.sustain, slide.profit)
              }
            >
              <Card className="bg-transparent w-full border-0 flex flex-col items-center justify-center h-full">
                <CardContent className=" text-pretty relative flex flex-col text-2xl font-bold justify-center items-start w-full h-full py-15 px-10 sm:px-55 text-black">
                  <p className="pl-5 text-bold text-xl sm:text-5xl">
                    {slide.title}
                  </p>
                  <p className="pl-5 text-sm sm:text-2xl">
                    {slide.description}
                  </p>
                  <p className="pl-5 text-sm sm:text-2xl">
                    ${formatPrice(slide.price)}
                  </p>
                  <Image
                    src={billboardimg}
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
            className={`h-5 w-5  cursor-pointer rounded-full ${current === index ? "bg-black" : "bg-white"}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BillboardCarousel;
