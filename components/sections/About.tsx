import Image from "next/image";
import profile from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-32 text-white"
    >
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />
      {/* Glow Background */}
      <div className="absolute left-0 top-20 h-[350px] w-[350px] rounded-full bg-lime-400/10 blur-[180px]" />

      <div className="absolute right-0 bottom-20 h-[300px] w-[300px] rounded-full bg-lime-400/10 blur-[180px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Foto */}
        <div className="flex justify-center">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <Image
              src={profile.image}
              alt={profile.name}
              width={420}
              height={520}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-3 uppercase tracking-[0.35em] text-lime-400">
            About Me
          </p>

          <h2 className="mb-8 text-5xl font-bold">
            {profile.name}
          </h2>

          <p className="leading-8 text-zinc-400">
            {profile.about}
          </p>

          {/* Statistik */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-lime-400">
                {profile.experience}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-lime-400">
                {profile.projects}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Projects
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-lime-400">
                {profile.clients}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}