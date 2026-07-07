import Image from "next/image";
import { Project } from "@/data/project";

interface ProjectscardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectscardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-lime-400/40
        hover:shadow-[0_20px_60px_rgba(163,230,53,0.15)]
      "
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Category */}
        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            bg-lime-400/90
            px-4
            py-1
            text-xs
            font-semibold
            text-black
          "
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-6 p-7">
        {/* Title */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            {project.year}
          </p>
        </div>

        {/* Description */}
        <p className="leading-8 text-zinc-400">
          {project.description}
        </p>

        {/* Role */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-lime-400">
            Role
          </p>

          <p className="mt-2 text-zinc-300">
            {project.role}
          </p>
        </div>

        {/* Client */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-lime-400">
            Client
          </p>

          <p className="mt-2 text-zinc-300">
            {project.client}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3
                py-1
                text-xs
                text-zinc-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          className="
            mt-2
            flex
            items-center
            gap-2
            font-semibold
            text-lime-400
            transition-all
            duration-300
            group-hover:translate-x-2
          "
        >
          View Case Study

          <span className="text-lg">→</span>
        </button>
      </div>
    </article>
  );
}