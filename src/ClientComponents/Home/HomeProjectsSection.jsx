import { motion } from "framer-motion";

const projects = [
  {
    title: "Multi-Tenant SaaS Backend",
    context: "B2B SaaS Platform",
    problem:
      "The platform required strict tenant isolation, role-based access control, and predictable performance as usage scaled across multiple organizations.",
    architecture: [
      "Laravel-based service layer with domain separation",
      "JWT authentication with role & permission enforcement",
      "Tenant-aware database design",
      "Caching for high-read endpoints",
    ],
    outcome:
      "Delivered a secure and scalable backend capable of supporting multiple tenants with consistent performance under increasing load.",
    accent: "emerald",
  },
  {
    title: "E-Commerce Order & Payment System",
    context: "High-traffic Commerce Platform",
    problem:
      "Handling concurrent orders, payment consistency, and inventory accuracy while ensuring fault tolerance during peak traffic.",
    architecture: [
      "Service-oriented order processing",
      "Database transactions for consistency",
      "Asynchronous jobs for payment and notifications",
      "Failure-safe retry mechanisms",
    ],
    outcome:
      "Reduced order failures and improved system reliability during high traffic periods.",
    accent: "cyan",
  },
  {
    title: "Microservices-Based API Platform",
    context: "Public API Infrastructure",
    problem:
      "Monolithic architecture limited scalability and slowed down feature delivery across teams.",
    architecture: [
      "Service decomposition based on business domains",
      "API Gateway for request routing and security",
      "Stateless services for horizontal scaling",
      "Centralized logging and monitoring",
    ],
    outcome:
      "Enabled independent scaling of services and faster development cycles across teams.",
    accent: "emerald",
  },
];

export default function HomeProjectsSection() {
  return (
    <section id="projects" className="relative bg-neutral-950 py-24 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute -top-32 left-1/4 size-[360px] bg-emerald-500/10 blur-[120px]" />
      <div className="absolute -bottom-32 right-1/4 size-[360px] bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Selected Work
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-100">
            Backend Systems
            <span
              className="block text-transparent bg-clip-text 
            bg-gradient-to-r from-emerald-400 to-cyan-400"
            >
              Designed & Delivered
            </span>
          </h2>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            A selection of backend projects where architecture, scalability, and
            long-term maintainability were core requirements.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-14 space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="relative rounded-r-2xl border border-neutral-800 
              bg-neutral-900/60 backdrop-blur-md p-6 md:p-8"
            >
              {/* Accent bar */}
              <span
                className={`absolute left-0 top-0 h-full w-[3px] rounded-l-2xl 
                ${
                  project.accent === "emerald"
                    ? "bg-emerald-400"
                    : "bg-cyan-400"
                }`}
              />

              <div className="pl-4">
                {/* Title */}
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-medium text-neutral-100">
                    {project.title}
                  </h3>
                  <span
                    className="text-xs px-3 py-1 rounded-full 
                  bg-neutral-800 text-neutral-400"
                  >
                    {project.context}
                  </span>
                </div>

                {/* Problem */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-neutral-300">
                    Problem
                  </h4>
                  <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Architecture */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-neutral-300">
                    Architecture & Decisions
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-400 list-disc list-inside">
                    {project.architecture.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-neutral-300">
                    Outcome
                  </h4>
                  <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
