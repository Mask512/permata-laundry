"use client";

import { motion } from "motion/react";
import CTAButton from "./cta-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { howItWorks } from "@/data";

export default function HowItWorks() {
  return (
    <div className="bg-primary text-primary-foreground py-20 text-center">
      <div className="container mx-auto space-y-16 px-4">
        <h2 className="text-secondary mb-5 text-sm font-bold uppercase lg:text-left">
          {howItWorks.heading}
        </h2>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-baseline-last">
          <motion.h3
            initial={{
              opacity: 0,
              translateY: "-200px",
            }}
            whileInView={{
              opacity: 1,
              translateY: "0px",
            }}
            transition={{ duration: 0.5 }}
            viewport={{
              once: true,
            }}
            className="text-primary-foreground text-5xl tracking-wide md:text-[64px] md:leading-18 lg:text-left"
          >
            {howItWorks.subheading}
          </motion.h3>
          <div className="lg:pl-6 space-y-8 lg:space-y-4 lg:text-right">
            <p className="text-muted-foreground font-bold lg:px-0">
              {howItWorks.description}
            </p>
            <CTAButton text="Mulai order pertamamu" url="#" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 overflow-hidden lg:grid-cols-4 lg:gap-8">
          {/* steps card */}
          {howItWorks.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{
                x: 200,
              }}
              whileInView={{
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.3,
                },
              }}
              viewport={{ once: true }}
            >
              <Card
                key={index}
                className="text-background h-full border-0 bg-slate-800 text-left duration-500 hover:bg-slate-700"
              >
                <CardHeader className="mb-20">
                  <h4 className="text-secondary text-sm font-bold">
                    LANGKAH {step.index}
                  </h4>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardTitle>
                    <h4 className="text-2xl">{step.title}</h4>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-background/70 text-base font-medium">
                      {step.description}
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
