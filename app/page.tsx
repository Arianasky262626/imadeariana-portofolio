import Intro from "@/components/Intro";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Intro />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}