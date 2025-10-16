"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { partners } from "@/data";
import ExportedImage from "next-image-export-optimizer";

export default function Partners() {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-primary font-outfit text-center text-2xl font-semibold">
        {partners.heading}
      </h2>
      <p className="text-muted mb-6 text-center">{partners.description}</p>

      <Carousel
        opts={{
          loop: true,
          dragFree: true,
          duration: 30,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="py-6"
      >
        <CarouselContent className="container mx-auto">
          {partners.brands.map((brand, index) => {
            return (
              <CarouselItem
                key={index}
                className="flex justify-center md:basis-1/2 lg:basis-1/4"
              >
                <ExportedImage
                  src={brand.src}
                  width={100}
                  height={50}
                  className="h-10 hover:invert"
                  alt={brand.alt}
                  style={{ width: "auto" }}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
