import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippet = `<?php

namespace App\\Services;

use App\\Repositories\\UserRepository;
use Illuminate\\Support\\Facades\\Cache;

class UserService
{
    public function __construct(
        private UserRepository $users
    ) {}

    public function getUserProfile(int $id)
    {
        return Cache::remember(
            "user_profile_{$id}",
            now()->addMinutes(10),
            fn () => $this->users->findWithRoles($id)
        );
    }
}
`;

export default function HomeCodeSnippetSection() {
  return (
    <section id="code" className="relative bg-neutral-950 py-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-1/3 -left-24 size-[320px] bg-emerald-500/10 blur-[120px]" />

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Code Philosophy
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-100">
            Clean Code,
            <span
              className="block text-transparent bg-clip-text 
            bg-gradient-to-r from-emerald-400 to-cyan-400"
            >
              Clear Responsibility
            </span>
          </h2>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            Code is written to be understood first, optimized second. Below is
            an example of how I structure backend logic to keep responsibilities
            clear, testable, and production-ready.
          </p>
        </motion.div>

        {/* Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-neutral-800 
          bg-neutral-900/70 backdrop-blur-md overflow-hidden"
        >
          {/* Code Header */}
          <div
            className="flex items-center justify-between px-4 py-3 
          border-b border-neutral-800 bg-neutral-900"
          >
            <span className="text-sm text-neutral-300">
              Example: Service Layer with Caching
            </span>
            <span className="text-xs text-neutral-500">PHP / Laravel</span>
          </div>

          <SyntaxHighlighter
            language="php"
            style={oneDark}
            customStyle={{
              margin: 0,
              background: "transparent",
              fontSize: "13px",
            }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </motion.div>

        {/* Rationale */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Separation of Concerns",
              desc: "Business logic is isolated in a service layer, keeping controllers thin and focused on HTTP concerns.",
            },
            {
              title: "Performance Awareness",
              desc: "Caching is applied at the service level to reduce database load without leaking infrastructure details upward.",
            },
            {
              title: "Testability & Maintainability",
              desc: "Dependencies are injected explicitly, making the service easy to test and refactor as requirements evolve.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="rounded-xl border border-neutral-800 
              bg-neutral-900/60 p-5"
            >
              <h4 className="text-sm font-medium text-neutral-200">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
