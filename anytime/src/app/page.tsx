import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import Locations from "@/components/Locations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Timeline />
        <Locations />
      </main>
      <Footer />
    </>
  );
}