import React from "react";
import {
  ArrowUp,
  Mail,
  Heart,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-zinc-800 bg-[#050b14]">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Available Badge */}
        <div className="mb-8 flex justify-center">
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-medium text-green-400">
            🟢 Available for Freelance & Full-Time Opportunities
          </span>
        </div>

        {/* Social Icons */}
        <div className="mb-8 flex justify-center gap-5">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-zinc-900 p-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-500/10 p-3 text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:your@email.com"
            className="rounded-xl bg-red-500/10 p-3 text-red-400 transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:text-white"
          >
            <Mail size={22} />
          </a>

        </div>

        {/* Divider */}
        <div className="mb-6 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="flex items-center gap-2 text-sm text-zinc-500">
            © {new Date().getFullYear()} Helen Opute
            <Heart
              size={14}
              className="fill-red-500 text-red-500"
            />
            Built with React • TypeScript • Tailwind CSS
          </p>

          <a
            href="#home"
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 p-3 text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-110 hover:shadow-orange-500/50"
          >
            <ArrowUp size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;