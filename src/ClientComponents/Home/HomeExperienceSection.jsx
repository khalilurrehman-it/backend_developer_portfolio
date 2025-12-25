import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Backend Developer",
    company: "Freelance / Client Projects",
    period: "2021 — Present",
    points: [
      "Designed and built scalable backend systems using Laravel and PHP.",
      "Developed RESTful APIs consumed by web and mobile applications.",
      "Implemented caching, queues, and background jobs for performance.",
      "Worked closely with frontend teams to define clean API contracts.",
    ],
    accent: "emerald",
  },
  {
    role: "Backend Developer",
    company: "Product & Startup Environments",
    period: "2019 — 2021",
    points: [
      "Built backend services for early-stage products and MVPs.",
      "Handled authentication, role-based access, and data modeling.",
      "Optimized database queries and improved response times.",
      "Participated in architecture discussions and technical planning.",
    ],
    accent: "cyan",
  },
  {
    role: "Junior Backend Developer",
    company: "Early Career",
    period: "2018 — 2019",
    points: [
      "Worked on core PHP and Laravel fundamentals.",
      "Assisted in maintaining existing codebases and fixing bugs.",
      "Learned best practices for clean code and version control.",
    ],
    accent: "emerald",
  },
];

export default function HomeExperienceSection() {
  return (
    <section id="experience" className="relative bg-neutral-950 py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 -left-24 size-[320px] bg-emerald-500/10 blur-[120px]" />
      <div className="absolute -bottom-32 right-1/3 size-[320px] bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Experience
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-100">
            Professional
            <span
              className="block text-transparent bg-clip-text 
            bg-gradient-to-r from-emerald-400 to-cyan-400"
            >
              Journey
            </span>
          </h2>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            A progression focused on building reliable backend systems,
            improving performance, and supporting growing products.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="relative rounded-b-2xl border border-neutral-800 
              bg-neutral-900/50 backdrop-blur-md p-6 hover:shadow-xl hover:-translate-y-1
              transition"
            >
              {/* Accent Line */}
              <span
                className={`absolute top-0 left-0 h-[3px] w-full rounded-t-2xl 
                ${exp.accent === "emerald" ? "bg-emerald-400" : "bg-cyan-400"}`}
              />

              <h3 className="text-lg font-medium text-neutral-100 mt-2">
                {exp.role}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">{exp.company}</p>
              <span className="text-xs text-neutral-500 mt-1 block">
                {exp.period}
              </span>

              <ul className="mt-4 space-y-2 text-sm text-neutral-400 list-disc list-inside">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
