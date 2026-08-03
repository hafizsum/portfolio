"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const COMMANDS: Record<string, string> = {
  help: `
Available Commands

help          Show all commands
about         About me
skills        Technical skills
experience    Work experience
projects      Featured projects
education     Educational background
certs         Certifications
contact       Contact information
clear         Clear terminal
`,

  about: `
MD. Hafizur Rahman

Linux System Administrator
Cloud Engineer
Network Operations Engineer

5.5+ Years Experience
RHCSA Certified
AWS Certified Solutions Architect Associate
`,

  skills: `
Linux
AWS
Kubernetes
Docker
VMware
Proxmox
Hyper-V
Grafana
Prometheus
Nagios
Networking
Shell Scripting
Git
CI/CD
`,

  experience: `
Engineer
Genuity Systems Ltd.

Support Engineer
Infozillion Teletech BD Ltd.

Support Engineer
Tuhin Enterprise

Junior Support Engineer
Amarnet System
`,

  projects: `
AWS Highly Available Infrastructure

Kubernetes 3-Tier Deployment

Linux Monitoring Stack

Enterprise Virtualization Lab
`,

  education: `
B.Sc. in Computer Science & Engineering

University of South Asia

CGPA: 3.84
`,

  certs: `
RHCSA

AWS Certified Solutions Architect Associate
`,

  contact: `
Email:
hafizurrahman.cse2000@gmail.com

Phone:
+8801733659094

Location:
Dhaka, Bangladesh
`,
};

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([
    "Welcome to Hafiz's Interactive Linux Terminal",
    "Type 'help' to see available commands.",
  ]);

  const [command, setCommand] = useState("");

  function execute() {
    const cmd = command.trim().toLowerCase();

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const output =
      COMMANDS[cmd] || `Command not found: ${cmd}\nType 'help'`;

    setHistory((prev) => [
      ...prev,
      `$ ${cmd}`,
      output,
    ]);

    setCommand("");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mx-auto w-full max-w-4xl rounded-2xl border border-gray-700 bg-[#0B1220] shadow-2xl"
    >
      {/* Header */}

      <div className="flex items-center gap-2 rounded-t-2xl border-b border-gray-700 bg-[#161B22] px-5 py-4">

        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>

        <span className="ml-4 font-mono text-gray-400">
          hafiz@portfolio:~
        </span>

      </div>

      {/* Body */}

      <div className="h-[420px] overflow-y-auto p-6 font-mono text-sm">

        {history.map((line, index) => (
          <pre
            key={index}
            className="mb-2 whitespace-pre-wrap text-green-400"
          >
            {line}
          </pre>
        ))}

        <div className="mt-3 flex items-center">

          <span className="mr-2 text-blue-400">$</span>

          <input
            autoComplete="off"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") execute();
            }}
            className="w-full bg-transparent text-green-400 outline-none"
            placeholder="Type a command..."
          />

        </div>

      </div>
    </motion.div>
  );
}
