import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] pt-24 text-white md:pt-28">
      {/* Background Grid */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Glow Tengah */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-lime-400/20
          blur-[180px]
        "
      />

      {/* Glow Kanan Atas */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-emerald-500/10
          blur-[140px]
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Subtitle */}
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-lime-400">
          Copywriter • Digital Marketer
        </p>

        {/* Title */}
        <h1 className="text-6xl font-extrabold leading-tight md:text-8xl">
          I MADE ARIANA
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          I build a solution for your business to grow and reach more customers through digital marketing and copywriting.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {/* View Projects */}
          <Link
            href="/#projects"
            className="
              rounded-full
              bg-lime-400
              px-8
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-lime-300
            "
          >
            View Projects
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6287774230949?text=Halo%20Ariana,%20saya%20tertarik%20dengan%20jasa%20website%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              border
              border-zinc-700
              px-8
              py-4
              font-semibold
              transition-all
              duration-300
              hover:border-lime-400
              hover:text-lime-400
            "
          >
            Let's Talk
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex flex-col items-center">
          <span className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
            Scroll
          </span>

          <div className="flex h-10 w-6 justify-center rounded-full border border-zinc-700">
            <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-lime-400" />
          </div>
        </div>
      </div>
    </section>
  );
}