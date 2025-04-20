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
}

const TicketCarousel = ({ choices }: ChoiceTypes) => {
  return (
    <div>
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-[60vw] bg-none"
      >
        <CarouselContent className="bg-none">
          {choices.map((slide: Choice) => (
            <CarouselItem
              key={slide.id}
              className="flex flex-col justify-center bg-none"
            >
              <Card className="w-[50vw] bg-none">
                <CardContent className="relative flex flex-col justify-center text-2xl font-bold bg-none">
                  <p>{slide.title}</p>
                  <p>{slide.description}</p>
                  <p>{slide.price}</p>
                  <Image
                    src={ticketimg}
                    alt="ticket"
                    className="absolute inset-0 -z-1"
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
