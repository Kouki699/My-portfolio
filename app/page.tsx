import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { CareerInterest } from "@/components/CareerInterest";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Research />
      <Achievements />
      <Projects />
      <Skills />
      <CareerInterest />
      <Contact />
      <Footer />
    </main>
  );
}
