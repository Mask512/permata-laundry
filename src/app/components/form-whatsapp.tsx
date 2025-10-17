"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { info } from "@/data";

type WhatsAppDialogProps = {
  children?: React.ReactNode; 
};

export default function WhatsAppDialog({ children }: WhatsAppDialogProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ nama: "", nomor: "", pesan: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const formatNomor = (nomor: string) =>
    nomor.startsWith("08")
      ? "62" + nomor.slice(1)
      : nomor.startsWith("62")
      ? nomor
      : nomor;

  const handleSubmit = () => {
    const nomorTujuan = info.phoneNumber; // ganti dengan nomor WA kamu
    const nomorUser = formatNomor(form.nomor);
    const text =
      `Halo Permata Laundry, saya *${form.nama}*%0A` +
      `Nomor HP: ${nomorUser}%0A` +
      `Pesan:%0A${form.pesan}`;
    const link = `https://wa.me/${nomorTujuan}?text=${text}`;
    window.open(link, "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button variant="default">Hubungi via WhatsApp</Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Kirim Pesan ke WhatsApp</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="nama">Nama</Label>
            <Input
              id="nama"
              name="nama"
              placeholder="Nama kamu"
              value={form.nama}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nomor">Nomor HP</Label>
            <Input
              id="nomor"
              name="nomor"
              placeholder="08xxxxxxxxxx"
              value={form.nomor}
              onChange={handleChange}
              inputMode="numeric"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pesan">Pesan</Label>
            <Textarea
              id="pesan"
              name="pesan"
              placeholder="Tulis pesan kamu..."
              value={form.pesan}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end pt-2">
            <Button
              onClick={handleSubmit}
              disabled={!form.nama || !form.nomor || !form.pesan}
              className="bg-primary text-pretty text-white"
            >
              Kirim via WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
