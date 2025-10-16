"use client";

import { ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { StaticImageData } from "next/image";
import CTAButton from "./cta-button";
import Link from "next/link";
import { hero } from "@/data";
import ExportedImage from "next-image-export-optimizer";

interface HeroProps {
  badge?: string;
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string | StaticImageData;
    alt: string;
  };
}

export default function Hero({
  badge = hero.badge,
  heading = hero.heading,
  description = hero.description,
  buttons = hero.buttons,
  image = hero.bgImage,
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-cover bg-top-left bg-no-repeat py-8 md:bg-center lg:py-0"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="container mx-auto grid items-center px-10 md:px-20 lg:grid-cols-2 lg:gap-8">
        <div className="z-10 flex h-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
          {badge && (
            <Badge variant="outline" className="text-background font-semibold">
              <motion.span
                initial={{ opacity: 0, transform: "translateX(-400px)" }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0px)",
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {badge}
              </motion.span>
              {/* <ArrowUpRight className="ml-2 size-4" /> */}
            </Badge>
          )}
          <motion.h1
            initial={{ opacity: 0, transform: "translateX(-400px)" }}
            animate={{
              opacity: 1,
              transform: "translateX(0px)",
              transition: {
                duration: 0.5,
              },
            }}
            className="text-shadow-accent my-6 text-5xl font-semibold text-pretty text-white text-shadow-2xs md:text-6xl lg:text-6xl lg:leading-16"
          >
            {heading}
          </motion.h1>
          <p className="font-outfit text-background mb-8 max-w-xl font-semibold lg:text-lg">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <CTAButton
                text={buttons.primary.text}
                url={buttons.primary.url}
              />
            )}
            {buttons.secondary && (
              <Button
                asChild
                // variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowDown className="size-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>

        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 500 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
        >
          <ExportedImage
            src={hero.image.src}
            alt="hero image"
            width={500}
            height={500}
            className="drop-shadow-accent mx-auto hidden w-auto drop-shadow-2xl lg:block lg:h-[590px]"
            priority
          />
        </motion.div>
      </div>
      <div className="absolute top-0 h-full w-full bg-gradient-to-br from-fuchsia-600 via-cyan-600 to-transparent"></div>
    </section>
  );
}
