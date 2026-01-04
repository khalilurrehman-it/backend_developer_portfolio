import { motion } from "framer-motion";

const projects = [
  {
    title: "Sportskins",
    description:
      "A sports engagement platform focused on football-based prediction games and fan interaction experiences.",
    link: "https://sportskins.uk/",
    accent: "emerald",
  },
  {
    title: "Fanzine",
    description:
      "A sports media and content aggregation website covering global leagues, news, and fan-driven content.",
    link: "http://fanzine.com/",
    accent: "cyan",
  },
  {
    title: "Human Focus",
    description:
      "A UK-based e-learning platform delivering health, safety, and compliance training for professionals.",
    link: "https://humanfocus.co.uk/",
    accent: "emerald",
  },
  {
    title: "IntSourceVertise",
    description:
      "A digital services and marketing platform supporting brands with online growth solutions.",
    link: "https://intsourcevertise.com/",
    accent: "cyan",
  },
  {
    title: "AgileMTech",
    description:
      "A UAE-focused technology solutions company offering development and digital transformation services.",
    link: "https://www.agilemtech.ae/",
    accent: "emerald",
  },
];

export default function HomeProjectsSection() {
  const scrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="projects"
      className="relative bg-neutral-950 py-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-32 left-1/4 size-[360px] bg-emerald-500/10 blur-[120px]" />
      <div className="absolute -bottom-32 right-1/4 size-[360px] bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Selected Work
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-100">
            Live Projects
            <span
              className="block text-transparent bg-clip-text 
              bg-gradient-to-r from-emerald-400 to-cyan-400"
            >
              Delivered for Clients
            </span>
          </h2>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            A selection of production-ready applications and platforms where
            backend reliability, performance, and scalability were key.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="group relative rounded-b-2xl border border-neutral-800 
              bg-neutral-900/60 backdrop-blur-md p-6 hover:-translate-y-1
              hover:shadow-xl transition"
            >
              {/* Accent bar */}
              <span
                className={`absolute top-0 left-0 h-[4px] w-full rounded-t-2xl
                ${
                  project.accent === "emerald"
                    ? "bg-emerald-400"
                    : "bg-cyan-400"
                }`}
              />

              <h3 className="mt-3 text-lg font-medium text-neutral-100">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <span
                className="mt-5 inline-block text-sm border-2 border-cyan-900 text-white transition bg-cyan-900 px-4 py-2 rounded-2xl group-hover:bg-transparent"
              >
                Visit Live Site →
              </span>
            </motion.a>
          ))}

          {/* CTA Card */}
          <motion.div
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: projects.length * 0.06, duration: 0.5 }}
            className="cursor-pointer relative rounded-2xl border border-dashed 
            border-emerald-400/40 bg-neutral-900/40 backdrop-blur-md p-6 
            flex flex-col justify-center hover:-translate-y-1 hover:shadow-xl 
            transition group"
          >
            <h3 className="text-lg font-medium text-neutral-100">
              Want a Similar Project?
            </h3>

            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
              Let’s discuss your backend requirements and build a scalable,
              production-ready system tailored to your needs.
            </p>

            <span className="mt-5 inline-block text-sm text-center border-2 border-emerald-900 text-white transition bg-emerald-900 px-4 py-2 rounded-2xl group-hover:bg-transparent">Contact Me →</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
