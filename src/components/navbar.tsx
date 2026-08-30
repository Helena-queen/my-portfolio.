import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav
      className="
        fixed
        left-0
        right-0
        top-0
        z-50

        flex
        items-center
        justify-between

        border-b
        border-gray-200
        bg-white/80

        px-6
        py-5
        text-gray-900

        backdrop-blur-md
        transition-colors
        duration-300

        dark:border-zinc-800
        dark:bg-[#050b14]/80
        dark:text-white

        lg:px-20
      "
    >
      <h1
        className="
          bg-linear-to-r
          from-orange-300
          via-orange-500
          to-orange-700
          bg-clip-text
          text-2xl
          font-bold
          text-transparent
        "
      >
        Helen Opute
      </h1>

      <ul className="hidden gap-8 lg:flex">
        <li>
          <a
            href="#about"
            className="
              text-lg
              text-gray-700
              transition-colors
              duration-300
              hover:text-orange-600

              dark:text-gray-400
              dark:hover:text-white
            "
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className="
              text-lg
              text-gray-700
              transition-colors
              duration-300
              hover:text-orange-600

              dark:text-gray-400
              dark:hover:text-white
            "
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="
              text-lg
              text-gray-700
              transition-colors
              duration-300
              hover:text-orange-600

              dark:text-gray-400
              dark:hover:text-white
            "
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="
              text-lg
              text-gray-700
              transition-colors
              duration-300
              hover:text-orange-600

              dark:text-gray-400
              dark:hover:text-white
            "
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="
              text-lg
              text-gray-700
              transition-colors
              duration-300
              hover:text-orange-600

              dark:text-gray-400
              dark:hover:text-white
            "
          >
            Contact
          </a>
        </li>
      </ul>

      <ThemeToggle />
    </nav>
  );
}

export default Navbar;