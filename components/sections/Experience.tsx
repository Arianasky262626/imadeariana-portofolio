const experiences = [
  {
    year: "2026-Now",
    title: "Brand Strategist",
    company: "Personal Project",
    description:
      "Brand strategist for a personal project focused on creating an AI-based educational platform that helps students understand learning concepts through interactive and ethical approaches. All digital marketing activities are data-driven, utilizing Instagram Insights analysis to identify content performance, audience behavior, optimal posting times, and trends that can enhance organic reach.",
  },
  {
    year: "2025",
    title: "Digital Marketing Project Manager",
    company: "PT Visiomedia Persada",
    description:
      "Led digital marketing strategies, content creation, and product branding while increasing online visibility and customer engagement.",
  },
  {
    year: "2023-Now",
    title: "Marketing Management Student",
    company: "Universitas Negeri Malang",
    description:
      "Focused on marketing strategy, consumer behavior, branding, and digital business innovation.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#050505] py-32 text-white"
    >
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            EXPERIENCE
          </p>

          <h2 className="text-5xl font-bold md:text-6xl">
            My Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            My journey of learning, building products,
            and creating impactful digital experiences.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 h-full w-px bg-white/10" />

          {experiences.map((experience, index) => (

            <div
              key={index}
              className="relative mb-14 flex gap-8"
            >

              {/* Circle */}

              <div
                className="
                relative
                z-10

                mt-2

                h-10
                w-10

                rounded-full

                border
                border-lime-400

                bg-[#050505]

                flex
                items-center
                justify-center
              "
              >

                <div className="h-3 w-3 rounded-full bg-lime-400" />

              </div>

              {/* Card */}

              <div
                className="
                flex-1

                rounded-3xl

                border
                border-white/10

                bg-white/5

                p-8

                backdrop-blur-xl

                transition-all

                duration-300

                hover:-translate-y-2

                hover:border-lime-400/40
              "
              >

                <span className="text-sm uppercase tracking-[0.3em] text-lime-400">
                  {experience.year}
                </span>

                <h3 className="mt-3 text-3xl font-bold">
                  {experience.title}
                </h3>

                <h4 className="mt-2 text-lg text-zinc-400">
                  {experience.company}
                </h4>

                <p className="mt-6 leading-8 text-zinc-500">
                  {experience.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}