"use client"

import { info } from "@/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FloatingWhatsapp = () => {
  const phoneNumber = info.phoneNumber;
  const message = "Halo! Saya tertarik dengan layanan Anda.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      const timeout = setTimeout(() => setIsPulsing(false), 1000); // durasi pulse 1 detik
      return () => clearTimeout(timeout);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed right-5 bottom-5 z-50 rounded-full bg-green-500 p-3 text-white shadow-lg transition-all duration-300 hover:bg-green-600 ${
            isPulsing ? "animate-pulse scale-125" : ""
          }`}
          aria-label="Chat di WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Chat WhatsApp</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default FloatingWhatsapp;
