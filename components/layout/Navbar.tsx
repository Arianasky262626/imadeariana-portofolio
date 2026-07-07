export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2">
      <nav
        className="
          flex
          items-center
          justify-between

          rounded-full
          border
          border-white/10

          bg-white/5
          backdrop-blur-xl

          px-8
          py-4

          shadow-[0_8px_40px_rgba(0,0,0,0.35)]
        "
      >
        {/* Logo */}
        <h2 className="text-lg font-bold tracking-[0.3em] text-white">
          I MADE ARIANA
        </h2>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="
              text-sm
              text-zinc-400
              transition-all
              duration-300
              hover:text-lime-400
            "
          >
            About
          </a>

          <a
            href="#projects"
            className="
              text-sm
              text-zinc-400
              transition-all
              duration-300
              hover:text-lime-400
            "
          >
            Projects
          </a>

          <a
            href="#contact"
            className="
              text-sm
              text-zinc-400
              transition-all
              duration-300
              hover:text-lime-400
            "
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}