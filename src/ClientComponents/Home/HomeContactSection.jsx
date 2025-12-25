import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiPhone, FiMessageCircle } from "react-icons/fi";

const contacts = [
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    url: "https://linkedin.com/in/muhammadnoumanafzal",
    accent: "emerald",
  },
  {
    name: "GitHub",
    icon: <FiGithub />,
    url: "https://github.com/muhammadnoumanafzal",
    accent: "cyan",
  },
  {
    name: "WhatsApp",
    icon: <FiMessageCircle />,
    url: "https://wa.me/923175049232",
    accent: "emerald",
  },
  {
    name: "Call",
    icon: <FiPhone />,
    url: "tel:+923175049232",
    accent: "cyan",
  },
];

export default function HomeContactSection() {
  return (
    <section id="contact" className="relative bg-neutral-950 py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -left-24 size-[320px] bg-emerald-500/10 blur-[140px]" />
      <div className="absolute -bottom-32 right-1/4 size-[320px] bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center mx-auto"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Contact
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-100">
            Let's Connect
            <span
              className="block text-transparent bg-clip-text 
            bg-gradient-to-r from-emerald-400 to-cyan-400"
            >
              & Collaborate
            </span>
          </h2>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            I’m always open to discuss backend projects, consulting, or
            potential collaborations. Reach out through any of the channels
            below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`relative rounded-2xl border border-neutral-800 
                bg-neutral-900/60 backdrop-blur-md p-6 flex flex-col items-center 
                justify-center text-center hover:shadow-xl hover:-translate-y-1
                transition cursor-pointer`}
            >
              {/* Accent Circle */}
              <div
                className={`mb-3 p-4 rounded-full text-2xl 
                  ${
                    contact.accent === "emerald"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-cyan-500/20 text-cyan-400"
                  }`}
              >
                {contact.icon}
              </div>
              <span className="text-neutral-100 font-medium">
                {contact.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
