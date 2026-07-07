import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] text-white">
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

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Sub Heading */}
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-lime-400">
          Copywriter • Digital Product Designer • AI Anthusiast
        </p>

        {/* Heading */}
        <h1 className="text-6xl font-extrabold leading-tight md:text-8xl">
          I MADE
          <br />
          ARIANA
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          I build modern digital products with Artificial Intelligence,
          creative design, and cutting-edge web technology.
        </p>

        {/* Button */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button>View Projects</Button>

          <button
            className="
              rounded-full
              border
              border-zinc-700
              px-8
              py-4
              transition-all
              duration-300
              hover:border-lime-400
              hover:text-lime-400
            "
          >
            Contact Me
          </button>
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