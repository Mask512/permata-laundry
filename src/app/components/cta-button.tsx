"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import WhatsAppDialog from "./form-whatsapp";

type CTAButtonProps = {
  text: string;
  url?: string; // opsional
  whatsapp?: boolean; // true kalau mau buka form WhatsApp
};

export default function CTAButton({ text, url, whatsapp }: CTAButtonProps) {
  // mode WhatsApp
  if (whatsapp) {
    return (
      <WhatsAppDialog>
        <Button
          className="bg-secondary text-primary hover:bg-primary font-bold shadow-2xl duration-300 hover:text-white"
          size="lg"
        >
          {text}
        </Button>
      </WhatsAppDialog>
    );
  }

  // mode Link
  if (url) {
    return (
      <Button
        asChild
        className="bg-secondary text-primary hover:bg-primary font-bold shadow-2xl duration-300 hover:text-white"
        size="lg"
      >
        <Link href={url}>{text}</Link>
      </Button>
    );
  }

  // fallback
  return null;
}
