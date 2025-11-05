import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Rocket, Terminal, Database, GitBranch } from 'lucide-react';
import { useSFX } from './useSFX';

const badges = [
  { icon: <Code className="h-4 w-4 text-cyan-300" />, label: 'React' },
  { icon: <Terminal className="h-4 w-4 text-fuchsia-300" />, label: 'FastAPI' },
  { icon: <Cpu className="h-4 w-4 text-emerald-300" />, label: 'Python' },
  { icon: <Code className="h-4 w-4 text-cyan-200" />, label: 'TypeScript' },
  { icon: <Database className="h-4 w-4 text-emerald-200" />, label: 'MongoDB' },
  { icon: <GitBranch className="h-4 w-4 text-fuchsia-200" />, label: 'Git' },
  { icon: <Rocket className="h-4 w-4 text-cyan-300" />, label: 'Vite' },
];

export default function Skills() {
  const { blip } = useSFX();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-14">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">Skill Matrix</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Neon marquee */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
        <motion.div
          className="flex gap-3"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          onUpdate={() => {}}
        >
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex shrink-0 items-center gap-3">
              {badges.map((b, i) => (
                <button
                  key={`${idx}-${i}`}
                  onMouseEnter={blip}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-gradient-to-br from-[#0b0d13] to-[#0f1320] px-3 py-2 text-sm text-white/90 shadow-[0_0_30px_-18px_rgba(168,85,247,0.5)] transition-colors hover:border-cyan-400/40 hover:bg-[#0e1422]"
                >
                  {b.icon}
                  <span>{b.label}</span>
                </button>
              ))}
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0b0f] via-transparent to-[#0a0b0f]" />
      </div>
    </section>
  );
}
