import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowWeWork } from "@/components/HowWeWork";
import { Offerings } from "@/components/Offerings";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowWeWork />
        <Offerings />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
