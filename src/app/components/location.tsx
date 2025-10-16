"use client";

import { location, logoImage } from "@/data";
import ExportedImage from "next-image-export-optimizer";

export default function Location() {
  return (
    <>
      <section id="location" className="bg-primary px-4 py-16">
        <div className="container mx-auto flex flex-col gap-8 text-center text-white md:flex-row md:justify-around">
          <div className="mx-auto mb-6 flex max-w-lg flex-col items-center justify-center gap-4 py-8 text-xl text-white">
            <div className="flex flex-col gap-8">
              <h2 className="text-secondary text-5xl font-bold">
                {location.heading}
              </h2>
              <p>{location.address}</p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-secondary text-5xl font-bold">Kontak</h3>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                <p className="font-outfit font-bold">{location.phoneNumber}</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-8 text-white">
              <div className="mt-auto flex items-center justify-center gap-4">
                <ExportedImage
                  priority
                  src={logoImage.src}
                  alt={logoImage.alt}
                  width={72}
                  height={72}
                />
                <div>
                  <p className="text-2xl font-semibold tracking-tighter text-white uppercase md:text-3xl ">
                    {location.name}
                  </p>
                  <p className="text-muted-foreground font-outfit">
                    {location.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <iframe
            title="maps to location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3588571373866!2d108.20581657588443!3d-7.3135226926944625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f513fcc83e427%3A0xc3350d4af30368cc!2sMANCAGAR%20FAMILY!5e0!3m2!1sen!2sid!4v1760470631613!5m2!1sen!2sid"
            width="800"
            height="600"
            allowFullScreen={true}
            loading="lazy"
            className="w-full max-w-3xl rounded-xl md:h-[500px]"
          ></iframe>
        </div>
      </section>
    </>
  );
}
