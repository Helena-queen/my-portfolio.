import BackgroundDecoration from "../components/BackgroundDecoration";
import profile from "../assets/profile.jpg";
import { ArrowDown, Download, Mail } from "lucide-react";

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090f] text-white">
      <BackgroundDecoration />

      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="max-w-3xl text-center mb-14 ">
          <div className="relative mx-auto h-52 w-52 ">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl"></div>

            <img
              src={profile}
              alt="Helen Opute"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-linear-to-r from-orange-200 via-orange-400 to-orange-600 bg-clip-text text-transparent">
            Helen Opute
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-zinc-300">
            Frontend Developer <span className="text-orange-400">|</span>{" "}
            Backend Developer <span className="text-orange-400">|</span>{" "}
            Technical QA Engineer
          </p>

          <p className="mt-8 max-w-3xl text-lg text-zinc-400 leading-8">
            Building scalable web applications, crafting intuitive user
            experiences, and ensuring software quality through modern
            development and testing practices.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
  className="group relative overflow-hidden rounded-xl px-8 py-3 font-semibold text-white"
>
  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-[length:200%_100%] transition-all duration-700 group-hover:bg-[position:100%_0]" />

  <span className="relative flex items-center">
    <Download size={20} className="mr-3" />
    Download CV
  </span>
</button>
            <button className="rounded-xl border border-zinc-700 bg-zinc-900/60 px-8 py-3 font-semibold text-white transition-all duration-300 hover:border-orange-500 hover:bg-zinc-800 flex items-center">
            <Mail size={20} className="mr-3 inline-block" />
              Contact Me
            </button>
          </div>

          <div><ArrowDown size={24} className="mx-auto mt-8 animate-bounce" /></div>
        </div>
      </section>
    </main>
  );
}

export default Home;
