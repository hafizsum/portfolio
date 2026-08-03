import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#0D1117] text-white">
      {/* Animated Background */}
      <Background />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="py-24">
        <Skills />
      </section>

      {/* Experience */}
      <section id="experience" className="py-24">
        <Experience />
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <Projects />
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24">
        <Certifications />
      </section>

      {/* Education */}
      <section id="education" className="py-24">
        <Education />
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
