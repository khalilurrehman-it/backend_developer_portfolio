import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "System Design", href: "#system-design" },
  { name: "Projects", href: "#projects" },
  { name: "Code", href: "#code" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: Smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full z-50 bg-neutral-900/60 backdrop-blur-md border-b border-neutral-800"
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="text-xl font-bold text-neutral-100"
        >
          Muhammad Nouman Afzal
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-neutral-300 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-300 hover:text-emerald-400 transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-900/70 backdrop-blur-md border-t border-neutral-800"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-neutral-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
