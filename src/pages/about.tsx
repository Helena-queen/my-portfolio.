import React from "react";
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Code2,
  Sparkles,
} from "lucide-react";

function About(): React.ReactElement {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-3 text-zinc-900 dark:text-white"
    >
      <div className="mb-16 text-center">
        <h2 className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-4xl font-bold text-transparent">
          About Me
        </h2>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div
          className="
            rounded-3xl
            border border-zinc-200
            bg-white/80
            p-8
            shadow-sm
            backdrop-blur-xl
            dark:border-zinc-800
            dark:bg-[#0b111d]/70
            dark:shadow-none
          "
        >
          <h3 className="mb-6 text-3xl font-bold">
          Building With The Bigger Picture In Mind
          </h3>

          <p className="leading-9 text-zinc-600 dark:text-zinc-300">
            I approach software as more than code on a screen. Caring about
            understanding the problem, building the right solution, and making
            sure it continues to work when real users start depending on it, is my top priority.
            <br />
            <br />
            On the development side, I build{" "}
            <span className="font-semibold text-orange-500 dark:text-orange-400">
              React, TypeScript, Next.js and Tailwind CSS
            </span>{" "}
            applications, backed by solutions built with{" "}
            <span className="font-semibold text-orange-500 dark:text-orange-400">
              Node.js, .NET and MongoDB.
            </span>
            <br />
            <br />
            But building is only part of the job. I think about{" "}
            <span className="font-semibold text-orange-500 dark:text-orange-400">
              what could go wrong, how users will experience the product, and
              whether we're solving the right problem in the first place.
            </span>{" "}
            That mindset allows me to contribute across development, technical
            QA, and product delivery — helping turn requirements into software
            that is reliable, usable, and worth building.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-zinc-100 p-5 text-center dark:bg-zinc-900/70">
              <h4 className="text-4xl font-bold text-orange-500 dark:text-orange-400">
                8+
              </h4>

              <p className="mt-2 text-zinc-500 dark:text-zinc-400">Projects</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5 text-center dark:bg-zinc-900/70">
              <h4 className="text-4xl font-bold text-orange-500 dark:text-orange-400">
                3+
              </h4>

              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                Years Learning
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5 text-center dark:bg-zinc-900/70">
              <h4 className="text-4xl font-bold text-orange-500 dark:text-orange-400">
                100%
              </h4>

              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                Dedication
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5 text-center dark:bg-zinc-900/70">
              <h4 className="text-4xl font-bold text-orange-500 dark:text-orange-400">
                ∞
              </h4>

              <p className="mt-2 text-zinc-500 dark:text-zinc-400">Curiosity</p>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-3xl
            border border-zinc-200
            bg-white/80
            p-8
            shadow-sm
            backdrop-blur-xl
            dark:border-zinc-800
            dark:bg-[#0b111d]/70
            dark:shadow-none
          "
        >
          <h3 className="mb-8 text-3xl font-bold">Quick Information</h3>

          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-orange-500/10 p-3">
                <MapPin
                  className="text-orange-500 dark:text-orange-400"
                  size={22}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Location</p>

                <p className="font-medium">Nigeria</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-orange-500/10 p-3">
                <GraduationCap
                  className="text-orange-500 dark:text-orange-400"
                  size={22}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Education</p>

                <p className="font-medium">
                  B.Sc. Industrial and Production Engineering, Lagos State
                  University
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-orange-500/10 p-3">
                <Briefcase
                  className="text-orange-500 dark:text-orange-400"
                  size={22}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Availability</p>

                <p className="font-medium text-green-600 dark:text-green-400">
                  Open to Opportunities
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-orange-500/10 p-3">
                <Code2
                  className="text-orange-500 dark:text-orange-400"
                  size={22}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Stack</p>

                <p className="font-medium">React • Next.js • Node.js • .NET</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-orange-500/10 p-3">
                <Sparkles
                  className="text-orange-500 dark:text-orange-400"
                  size={22}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Interests</p>

                <p className="font-medium">
                  AI • Web Development • Project Management • QA Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
