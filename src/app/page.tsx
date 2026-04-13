import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhatIDo } from "@/components/WhatIDo";
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
        <WhatIDo />
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
