"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Service, services } from "@/data";
import ExportedImage from "next-image-export-optimizer";

export default function Services() {
  const [open, setOpen] = useState(false);
  const serviceListRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
    if (!open && serviceListRef.current) {
      serviceListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const filteredService = open
    ? services.servicesList
    : services.servicesList.slice(0, 3);

  return (
    <div
      className="text-primary min-h-screen bg-white py-20 text-center"
      id="services"
    >
      <div className="container mx-auto space-y-16 px-8 lg:container lg:px-18">
        <motion.h3
          initial={{
            opacity: 0,
            translateX: "-900px",
          }}
          whileInView={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{
            once: true,
          }}
          className="text-primary/85 hidden font-medium tracking-wider lg:block lg:text-9xl"
        >
          {services.heading}
        </motion.h3>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-baseline-last">
          <motion.h4
            initial={{
              opacity: 0,
              translateY: "200px",
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-primary text-[64px] leading-18 lg:text-left"
          >
            {services.subheading}
            
          </motion.h4>
          <div className="space-y-8 lg:text-right">
            <p className="text-muted font-semibold text-pretty lg:max-w-3xl">
              {services.description}
            </p>
            <Button
              size="lg"
              className="bg-secondary text-primary font-bold hover:text-white"
              onClick={toggleOpen}
            >
              {open ? "Tutup" : "Lihat Semua Layanan"}
            </Button>
          </div>
        </div>
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-3 lg:gap-8"
          ref={serviceListRef}
        >
          <AnimatePresence>
            {filteredService.map((service, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <CardService service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

function CardService({ service }: { service: Service }) {
  return (
    <Card className="group gap-4 overflow-hidden border-0 bg-white pt-0 shadow-none duration-400 hover:-translate-y-4 md:text-left">
      <div className="aspect-square w-full overflow-hidden rounded-2xl">
        <Link href="#" target="_blank">
          <ExportedImage
            src={service.image}
            alt={service.title}
            width={400}
            height={400}
            className="h-full w-full object-cover object-center duration-400 group-hover:scale-110"
          />
        </Link>
      </div>
      <CardHeader>
        <h3 className="group-hover:text-accent/80 text-3xl font-medium hover:underline">
          <Link href="#" target="_blank">
            {service.title}
          </Link>
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted font-outfit">{service.summary}</p>
      </CardContent>
      <CardFooter className="mx-auto md:mx-0">
        <Link
          href="#"
          target="_blank"
          className="text-accent flex items-center font-semibold hover:underline"
        >
          Lebih Detail
          <ArrowRight className="ml-2 size-4 duration-300 group-hover:translate-x-2" />
        </Link>
      </CardFooter>
    </Card>
  );
}
