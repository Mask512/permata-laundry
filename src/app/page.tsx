import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Partners from "@/app/components/partners";
import AboutUs from "@/app/components/about";
import HowItWorks from "@/app/components/how-it-works";
import Services from "@/app/components/services";
import Testimonials from "@/app/components/testimonials";
import Location from "@/app/components/location";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-4">
        <Hero />
      </div>
      <Partners />
      <AboutUs />
      <HowItWorks />
      <Services />
      <Testimonials />
      <Location />
      <Footer />
    </>
  );
}
