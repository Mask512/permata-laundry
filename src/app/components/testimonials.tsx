"use client";

import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/data";
import ExportedImage from "next-image-export-optimizer";

export default function Testimonials() {
  return (
    <div className="bg-background md:py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-10 md:gap-16 lg:grid-cols-2">
        <ExportedImage
          src={testimonials.image.src}
          alt={testimonials.image.alt}
          height={608}
          width={560}
          className="mx-auto w-full max-w-3xl rounded-4xl p-4"
        />
        <div className="flex flex-col gap-8 text-center md:gap-0 md:px-8 lg:px-2 lg:text-left">
          <div className="flex flex-col gap-8 md:py-12">
            <h2 className="text-accent font-bold uppercase">
              {testimonials.heading}
            </h2>
            <h3 className="text-primary text-5xl leading-14 font-medium text-pretty">
              {testimonials.subheading}
            </h3>
            <p className="text-muted text-shadow font-semibold text-shadow-black">
              {testimonials.description}
            </p>
          </div>
          <figure className="relative my-8 rounded-2xl bg-white p-8 md:my-0">
            <Quote className="text-secondary bg-primary absolute -top-8 right-4 h-16 w-16 rounded-full p-4 md:top-4 md:-left-8" />
            <Carousel
              plugins={[
                Autoplay({
                  delay: 4500,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.list.map((item) => (
                  <CarouselItem key={item.id}>
                    <div className="transition-all duration-700 ease-in-out">
                      <blockquote className="font-outfit font-semi text-muted pb-4 text-left text-xl md:min-h-28 md:px-8">
                        {item.quote}
                      </blockquote>
                      <Separator />
                      <figcaption className="flex items-center justify-between gap-3 pt-4 md:px-8">
                        <div className="text-left">
                          <p className="text-primary text-lg font-semibold">
                            {item.name}
                          </p>
                          <p className="text-muted text-sm font-semibold">
                            {item.profession}
                          </p>
                        </div>
                        <Avatar className="h-14 w-14">
                          <AvatarImage
                            src={item.avatar}
                            alt={`${item.name} avatar image`}
                          />
                          <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </figcaption>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </figure>
        </div>
      </div>
    </div>
  );
}
