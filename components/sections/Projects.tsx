import projects from "@/data/project";
import ProjectCard from "@/components/card/Projectscard";

export default function Project() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] py-32 text-white"
    >
      {/* Glow Background */}
      <div className="absolute left-0 top-40 h-[400px] w-[400px] rounded-full bg-lime-400/10 blur-[180px]" />

      <div className="absolute bottom-20 right-0 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[180px]" />

      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            FEATURED WORKS
          </p>

          <h2 className="text-5xl font-bold md:text-6xl">
            Selected Case Studies
          </h2>

          <p className="mt-8 leading-8 text-zinc-400">
            Every project starts with a problem. Here are selected works where I
            combine strategy, design, technology, and storytelling to create
            meaningful digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}