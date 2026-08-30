import BackgroundDecoration from "../components/BackgroundDecoration";
import profile from "../assets/profile.jpg";
import { ArrowDown, Download, Mail } from "lucide-react";

function Home() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
pt-12
        bg-gray-50
        text-gray-900

        transition-colors
        duration-300

        dark:bg-[#09090f]
        dark:text-white
      "
    >
      <BackgroundDecoration />

      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mb-14 max-w-3xl text-center">
          <div className="relative mx-auto h-52 w-52">
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-orange-500/10
                blur-3xl

                dark:bg-orange-500/20
              "
            />

            <img
              src={profile}
              alt="Helen Opute"
              className="
                relative
                h-full
                w-full
                rounded-full
                object-cover
              "
            />
          </div>

          <h1
            className="
              text-5xl
              font-extrabold
              leading-tight
              md:text-7xl

              bg-linear-to-r
              from-orange-400
              via-orange-500
              to-orange-700
              bg-clip-text
              text-transparent
            "
          >
            Helen Opute
          </h1>

          <p
            className="
              mt-4
              text-xl
              text-gray-700
              md:text-2xl

              dark:text-zinc-300
            "
          >
            Frontend Developer{" "}
            <span className="text-orange-500 dark:text-orange-400">|</span>{" "}
            Backend Developer{" "}
            <span className="text-orange-500 dark:text-orange-400">|</span>{" "}
            Technical QA Engineer
          </p>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-gray-600

              dark:text-zinc-400
            "
          >
           I turn complex ideas into reliable software — building the solution, challenging what could break it, and keeping the product aligned with the people and business it serves.

          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                px-8
                py-3
                font-semibold
                text-white
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-orange-600
                  via-orange-500
                  to-orange-700
                  bg-[length:200%_100%]
                  transition-all
                  duration-700
                  group-hover:bg-[position:100%_0]
                "
              />

              <span className="relative flex items-center">
                <Download size={20} className="mr-3" />
                Download CV
              </span>
            </button>
<a href="#contact">
            <button

              className="
                flex
                items-center
                rounded-xl
                border
                border-gray-300
                bg-white/70
                px-8
                py-3
                font-semibold
                text-gray-900
                transition-all
                duration-300

                hover:border-orange-500
                hover:bg-orange-50

                dark:border-zinc-700
                dark:bg-zinc-900/60
                dark:text-white
                dark:hover:border-orange-500
                dark:hover:bg-zinc-800
              "
            >
              <Mail size={20} className="mr-3" />
              Contact Me
            </button>
            </a>
          </div>

          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown
              size={24}
              className="
                mx-auto
                mt-8
                animate-bounce
                text-gray-700

                dark:text-white
              "
            />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
