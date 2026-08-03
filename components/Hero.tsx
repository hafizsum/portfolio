"use client";

import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-20 bottom-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Welcome to my Portfolio
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Hi,
            <br />
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MD. Hafizur Rahman
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-gray-300">
            Linux System Administrator
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Passionate Linux System Administrator with experience in Cloud
            Computing, Kubernetes, Virtualization, Monitoring, AWS and
            Enterprise Infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-700"
            >
              <Download size={20} />
              Download Resume
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-blue-500 px-6 py-4 transition hover:bg-blue-600"
            >
              <Mail size={20} />
              Contact Me
            </a>

          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                5.5+
              </h3>

              <p className="mt-2 text-gray-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                20+
              </h3>

              <p className="mt-2 text-gray-400">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                2
              </h3>

              <p className="mt-2 text-gray-400">
                Certifications
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl" />

            {/* Image */}

            <img
              src="/images/profile.png"
              alt="Hafizur Rahman"
              className="relative h-[420px] w-[420px] rounded-full border-4 border-blue-500 object-cover shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-10"
      >
        <ChevronDown
          size={40}
          className="text-blue-400"
        />
      </motion.div>

    </section>
  );
}
