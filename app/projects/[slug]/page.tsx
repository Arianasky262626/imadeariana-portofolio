import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/project";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Hero Image */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-20">

            <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
              {project.category}
            </p>

            <h1 className="text-6xl font-bold">
              {project.title}
            </h1>

          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        {/* Overview */}
        <div className="grid gap-12 lg:grid-cols-3">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-lime-400">
              Client
            </p>

            <p className="mt-3 text-zinc-300">
              {project.client}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-lime-400">
              Role
            </p>

            <p className="mt-3 text-zinc-300">
              {project.role}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-lime-400">
              Year
            </p>

            <p className="mt-3 text-zinc-300">
              {project.year}
            </p>
          </div>

        </div>

        {/* Description */}
        <div className="mt-24">

          <h2 className="text-3xl font-bold">
            Overview
          </h2>

          <p className="mt-8 max-w-4xl leading-9 text-zinc-400">
            {project.description}
          </p>

        </div>

        {/* Problem */}
        <div className="mt-24">

          <h2 className="text-3xl font-bold">
            Problem
          </h2>

          <p className="mt-8 max-w-4xl leading-9 text-zinc-400">
            {project.problem}
          </p>

        </div>

        {/* Solution */}
        <div className="mt-24">

          <h2 className="text-3xl font-bold">
            Solution
          </h2>

          <p className="mt-8 max-w-4xl leading-9 text-zinc-400">
            {project.solution}
          </p>

        </div>

        {/* Result */}
        <div className="mt-24">

          <h2 className="text-3xl font-bold">
            Result
          </h2>

          <p className="mt-8 max-w-4xl leading-9 text-zinc-400">
            {project.result}
          </p>

        </div>

        {/* Technology */}
        <div className="mt-24">

          <h2 className="text-3xl font-bold">
            Technology
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* Gallery */}
        <div className="mt-24">

          <h2 className="mb-10 text-3xl font-bold">
            Gallery
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {project.gallery.map((image) => (
              <div
                key={image}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image}
                  alt={project.title}
                  fill
                  sizes="50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}

          </div>

        </div>

        {/* Back Button */}
        <div className="mt-24">

          <Link
            href="/#projects"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-lime-400
              px-8
              py-4
              font-semibold
              text-lime-400
              transition
              hover:bg-lime-400
              hover:text-black
            "
          >
            ← Back to Projects
          </Link>

        </div>

      </section>

    </main>
  );
}