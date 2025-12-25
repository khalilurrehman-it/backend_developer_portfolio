import { motion } from "framer-motion";
import { FaPhp, FaLaravel } from "react-icons/fa";
import { HiOutlineServerStack } from "react-icons/hi2";
import nouman from "../../assets/Images/nouman.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

export default function HomeHeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-neutral-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-125 h-125 bg-emerald-500/20 blur-[120px]" />
      <div className="absolute top-1/2 -right-32 w-125 h-125 bg-cyan-500/20 blur-[120px]" />

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-block mb-4 text-sm tracking-widest uppercase 
              text-emerald-400"
            >
              Backend Engineer
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl md:text-6xl font-semibold leading-tight text-neutral-100"
            >
              Muhammad Nouman
              <br />
              <span
                className="text-transparent bg-clip-text 
              bg-linear-to-r from-emerald-400 to-cyan-400"
              >
                Afzal
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-xl"
            >
              I specialize in building robust backend architectures that power
              modern applications. My work focuses on scalable APIs, clean
              system design, and microservices that perform reliably in
              production environments.
            </motion.p>

            {/* STACK BADGES */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-8 flex flex-wrap gap-4"
            >
              <span
                className="flex items-center gap-2 px-4 py-2 
              bg-neutral-900 border border-emerald-500/30 
              rounded-full text-sm text-neutral-200"
              >
                <FaPhp className="text-emerald-400" />
                PHP
              </span>

              <span
                className="flex items-center gap-2 px-4 py-2 
              bg-neutral-900 border border-cyan-500/30 
              rounded-full text-sm text-neutral-200"
              >
                <FaLaravel className="text-cyan-400" />
                Laravel
              </span>

              <span
                className="flex items-center gap-2 px-4 py-2 
              bg-neutral-900 border border-emerald-500/30 
              rounded-full text-sm text-neutral-200"
              >
                <HiOutlineServerStack className="text-emerald-400" />
                Microservices
              </span>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-12 flex gap-4"
            >
              <a
                href="#projects"
                className="relative px-6 py-3 text-sm font-medium 
                text-neutral-900 rounded-md 
                bg-linear-to-r from-emerald-400 to-cyan-400 
                hover:opacity-90 transition"
              >
                View Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 text-sm font-medium 
                border border-neutral-700 text-neutral-200 
                rounded-md hover:border-neutral-500 transition"
              >
                Contact
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Image Glow */}
            <div
              className="absolute inset-0 rounded-2xl 
            bg-linear-to-tr from-emerald-500/20 to-cyan-500/20 
            blur-2xl scale-105"
            />

            <div
              className="relative w-70 md:w-85
            aspect-3/4 rounded-2xl overflow-hidden border 
            border-neutral-800 bg-neutral-900"
            >
              <img
                src={nouman}
                alt="Muhammad Nouman Afzal"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
