import { motion } from "framer-motion";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";

/* ---------- Node Style ---------- */
function nodeStyle(accent) {
  return {
    padding: 12,
    borderRadius: 12,
    background: "#0b0b0b",
    border:
      accent === "emerald"
        ? "1px solid rgba(52,211,153,0.35)"
        : "1px solid rgba(34,211,238,0.35)",
    color: "#e5e7eb",
    fontSize: 12,
    fontWeight: 500,
    width: 160,
    textAlign: "center",
  };
}

/* ---------- Nodes ---------- */
const nodes = [
  {
    id: "client",
    position: { x: 0, y: 140 },
    data: { label: "Web / Mobile Clients" },
    style: nodeStyle("emerald"),
  },
  {
    id: "gateway",
    position: { x: 220, y: 140 },
    data: { label: "API Gateway" },
    style: nodeStyle("cyan"),
  },
  {
    id: "auth",
    position: { x: 440, y: 40 },
    data: { label: "Auth & Authorization" },
    style: nodeStyle("emerald"),
  },
  {
    id: "rate",
    position: { x: 440, y: 240 },
    data: { label: "Rate Limiting" },
    style: nodeStyle("emerald"),
  },
  {
    id: "services",
    position: { x: 660, y: 140 },
    data: { label: "Domain Services" },
    style: nodeStyle("cyan"),
  },
  {
    id: "cache",
    position: { x: 880, y: 40 },
    data: { label: "Cache Layer" },
    style: nodeStyle("emerald"),
  },
  {
    id: "queue",
    position: { x: 880, y: 140 },
    data: { label: "Async Queue" },
    style: nodeStyle("cyan"),
  },
  {
    id: "db",
    position: { x: 880, y: 240 },
    data: { label: "Primary Database" },
    style: nodeStyle("emerald"),
  },
];

/* ---------- Edges ---------- */
const edges = [
  { id: "e1", source: "client", target: "gateway", animated: true },
  { id: "e2", source: "gateway", target: "auth", animated: true },
  { id: "e3", source: "gateway", target: "rate", animated: true },
  { id: "e4", source: "gateway", target: "services", animated: true },
  { id: "e5", source: "services", target: "cache", animated: true },
  { id: "e6", source: "services", target: "queue", animated: true },
  { id: "e7", source: "services", target: "db", animated: true },
];

export default function HomeSystemDesignSection() {
  return (
    <section id="system-design" className="relative bg-neutral-950 py-24 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-32 left-1/3 size-[360px] bg-emerald-500/10 blur-[120px]" />
      <div className="absolute -bottom-32 right-1/3 size-[360px] bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            System Design
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-100">
            Structured Backend Architecture
            <span
              className="block text-transparent bg-clip-text 
            bg-gradient-to-r from-emerald-400 to-cyan-400"
            >
              For Scalable Applications
            </span>
          </h2>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            Below is a representative backend architecture I commonly apply in
            production systems. Each layer has a clearly defined role, enabling
            secure access, predictable scaling, and long-term maintainability.
          </p>
        </motion.div>

        {/* Architecture Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-12 rounded-2xl border border-neutral-800 
          bg-neutral-900/60 backdrop-blur-md p-4 md:p-6"
        >
          <div className="h-[380px] w-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              fitView
              panOnScroll
              zoomOnScroll={false}
              zoomOnPinch={false}
            >
              <Background gap={24} color="#262626" />
            </ReactFlow>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
