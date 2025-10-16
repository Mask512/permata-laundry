"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightCircle, Heart, type LucideProps } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { aboutUs } from "@/data";
import ExportedImage from "next-image-export-optimizer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white px-4 py-18" id="about-us">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center gap-8 lg:flex-row-reverse lg:gap-12">
          <div className="flex max-w-3xl flex-col gap-12 py-4 md:gap-8 lg:gap-12">
            <h2 className="text-accent text-center font-bold tracking-wide uppercase lg:text-left">
              {aboutUs.heading}
            </h2>
            <motion.h3
              className="font-outfit text-primary px-6 text-center text-4xl font-medium md:text-5xl lg:px-0 lg:text-left lg:text-6xl lg:leading-16 lg:tracking-wide"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              {aboutUs.subheading}
            </motion.h3>
            <p className="font-outfit text-muted px-6 text-center lg:p-0 lg:text-left">
              {aboutUs.description}
            </p>
            <motion.div
              className="grid grid-cols-1 gap-4 px-6 lg:grid-cols-3 lg:px-0"
              initial={{ opacity: 0, transform: "translateY(100px)" }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0px)",
                transition: { duration: 0.5 },
              }}
            >
              {/* CARDS */}
              {aboutUs.points.map((point) => (
                <PointCard
                  key={point.title}
                  title={point.title}
                  description={point.description}
                  Icon={point.icon}
                />
              ))}
            </motion.div>
            <div className="group flex justify-center lg:justify-items-start">
              <Button
                size="lg"
                className="bg-secondary text-primary font-bold duration-300 hover:text-white"
              >
                Explore Layanan
                <ArrowRightCircle className="transition-transform duration-700 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto h-full max-w-full overflow-hidden rounded-2xl bg-gray-500 lg:w-full"
          >
            <ExportedImage
              src={aboutUs.image.src}
              alt={aboutUs.image.alt}
              height={600}
              width={400}
              className="mx-auto h-full max-h-screen w-full object-cover opacity-70"
            />
            <div className="absolute bottom-5 left-5 flex max-w-[calc(100%-40px)] items-center gap-2 rounded-3xl bg-gray-700/20 px-4 py-2 text-white backdrop-blur">
              <div className="rounded-full bg-pink-600 p-1">
                <Heart />
              </div>
              <p>Setiap pakaian dirawat dengan standar tinggi.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
type PointCardProps = {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

function PointCard({ title, description, Icon }: PointCardProps) {
  return (
    <Card className="bg-background w-full border-0 p-6 lg:max-w-2xs lg:px-2 lg:py-8">
      <CardHeader className="space-y-2 lg:space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 lg:mx-0">
          <Icon size="24" className="text-secondary" />
        </div>
        <CardTitle className="text-accent text-center text-2xl lg:text-left">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p className="font-outfit text-muted text-center text-base lg:text-left">
            {description}
          </p>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
