import Link from 'next/link';
import { Button } from '@/components/ui/button';

type CTAButtonProps = {
  text: string;
  url: string;
};

export default function CTAButton({ text, url }: CTAButtonProps) {
  return (
    <Button
      asChild
      className="bg-secondary text-primary font-bold shadow-2xl hover:bg-primary hover:text-white duration-300"
      size="lg"
    >
      <Link href={url}>{text}</Link>
    </Button>
  );
}
