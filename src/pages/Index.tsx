import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import SkillsVisual from "@/components/SkillsVisual";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <SkillsVisual />
      <Contact />
      <footer className="py-10 px-6 text-center border-t border-border">
        <p className="text-xs text-tertiary">
          © {new Date().getFullYear()} Chaitanya. Engineered with precision.
        </p>
      </footer>
    </div>
  );
};

export default Index;
