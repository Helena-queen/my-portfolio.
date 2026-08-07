import { SunMedium } from "lucide-react";

function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 bg-[#050b14]/80 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between px-20 py-5 text-white">
      <h1 className="text-2xl font-bold bg-linear-to-r from-orange-300 via-orange-500 to-orange-700 bg-clip-text text-transparent">
        Helen Opute
      </h1>

      <ul className="flex gap-8 pr-28">
        <li>
          <a href="#about" className="text-lg text-gray-400 hover:text-white">
            About
          </a>
        </li>

        <li>
          <a href="#experience" className="text-lg text-gray-400 hover:text-white">
            Experience
          </a>
        </li>

        <li>
          <a href="#projects" className="text-lg text-gray-400 hover:text-white">
            Projects
          </a>
        </li>

        <li>
          <a href="#skills" className="text-lg text-gray-400 hover:text-white">
            Skills
          </a>
        </li>

        <li>
          <a href="#contact" className="text-lg text-gray-400 hover:text-white">
            Contact
          </a>
        </li>
      </ul>

      <SunMedium
        size={20}
        className="cursor-pointer  hover:bg-gray-700"
      />
    </nav>
  );
}

export default Navbar;