// components/Navbar.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: .5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0D1117]/80 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-bold tracking-wide"
          >
            <span className="text-blue-500">&lt;</span>

            Hafiz

            <span className="text-cyan-400">.</span>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition font-medium hover:text-blue-400 ${
                  active === item.href.replace("#", "")
                    ? "text-blue-500"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
            >
              <Download size={18} />
              Resume
            </a>

          </nav>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#111827] border-t border-white/10"
        >

          <div className="flex flex-col px-6 py-6">

            {navItems.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-lg text-gray-300 hover:text-blue-400"
              >
                {item.name}
              </a>

            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold"
            >
              <Download size={18} />

              Download Resume
            </a>

          </div>

        </motion.div>

      )}

    </motion.header>
  );
}
