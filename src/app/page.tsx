import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Offerings } from "@/components/Offerings";
import { SelectedWork } from "@/components/SelectedWork";
import { CurrentBuilds } from "@/components/CurrentBuilds";
import { GitHub } from "@/components/GitHub";
import { Thinking } from "@/components/Thinking";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Offerings />
        <SelectedWork />
        <CurrentBuilds />
        <GitHub />
        <Thinking />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
