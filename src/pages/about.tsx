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
      className="relative mx-auto max-w-7xl px-6 py-3 text-white"
    >
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left Side */}
        <div className="rounded-3xl border border-zinc-800 bg-[#0b111d]/70 p-8 backdrop-blur-xl">
          <h3 className="mb-6 text-3xl font-bold">
            Passionate Software Developer
          </h3>

          <p className="leading-9 text-zinc-300">
            I'm a software developer passionate about creating modern,
            responsive, and scalable web applications.

            <br />
            <br />

            I enjoy building beautiful user interfaces with{" "}
            <span className="font-semibold text-orange-400">
              React, TypeScript, Next.js and Tailwind CSS
            </span>
            , while also developing powerful backend solutions using{" "}
            <span className="font-semibold text-orange-400">
              Node.js, .NET and MongoDB.
            </span>

            <br />
            <br />

            My goal is to build products that are fast, user-friendly,
            accessible, and solve real-world problems. I'm always learning,
            improving, and exploring new technologies.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-zinc-900/70 p-5 text-center">
              <h4 className="text-4xl font-bold text-orange-400">10+</h4>
              <p className="mt-2 text-zinc-400">
                Projects
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900/70 p-5 text-center">
              <h4 className="text-4xl font-bold text-orange-400">3+</h4>
              <p className="mt-2 text-zinc-400">
                Years Learning
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900/70 p-5 text-center">
              <h4 className="text-4xl font-bold text-orange-400">100%</h4>
              <p className="mt-2 text-zinc-400">
                Dedication
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900/70 p-5 text-center">
              <h4 className="text-4xl font-bold text-orange-400">∞</h4>
              <p className="mt-2 text-zinc-400">
                Curiosity
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-3xl border border-zinc-800 bg-[#0b111d]/70 p-8 backdrop-blur-xl">
          <h3 className="mb-8 text-3xl font-bold">
            Quick Information
          </h3>

          <div className="space-y-6">

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-orange-500/10 p-3">
                <MapPin className="text-orange-400" size={22} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Location
                </p>

                <p className="font-medium">
                  Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-orange-500/10 p-3">
                <GraduationCap
                  className="text-orange-400"
                  size={22}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Education
                </p>

                <p className="font-medium">
                  B.Sc. Industrial and Production Engineering, Lagos State University
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-orange-500/10 p-3">
                <Briefcase
                  className="text-orange-400"
                  size={22}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Availability
                </p>

                <p className="font-medium text-green-400">
                  Open to Opportunities
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-orange-500/10 p-3">
                <Code2
                  className="text-orange-400"
                  size={22}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Stack
                </p>

                <p className="font-medium">
                  React • Next.js • Node.js • .NET
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-orange-500/10 p-3">
                <Sparkles
                  className="text-orange-400"
                  size={22}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Interests
                </p>

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