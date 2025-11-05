import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useSFX } from './useSFX';

const PROJECTS = [
  {
    title: 'Neon Grid Dashboard',
    desc: 'A cyberpunk analytics UI with live charts and holographic widgets.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    href: '#',
  },
  {
    title: 'Ronin API Service',
    desc: 'Fast, scalable backend with FastAPI and MongoDB integration.',
    tags: ['Python', 'FastAPI', 'MongoDB'],
    href: '#',
  },
  {
    title: 'Vaporwave Portfolio',
    desc: 'Retro-futuristic personal website with neon micro-interactions.',
    tags: ['Vite', 'TypeScript', 'Spline'],
    href: '#',
  },
];

function ProjectCard({ project, index }) {
  const { blip, click } = useSFX();
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const mx = rect.width / 2;
    const my = rect.height / 2;
    const tiltX = -((y - my) / my) * 8;
    const tiltY = ((x - mx) / mx) * 8;
    el.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative"
    >
      <div
        className="relative h-64 rounded-xl border border-white/10 bg-[#0b0f17]/80 p-4 shadow-[0_0_50px_-25px_rgba(59,130,246,0.6)] backdrop-blur-md"
        onMouseEnter={blip}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        ref={ref}
        style={{ transformStyle: 'preserve-3d', transition: 'transform 120ms ease-out' }}
      >
        {/* Neon flicker border */}
        <div className="pointer-events-none absolute inset-0 rounded-xl">
          <span className="absolute inset-0 rounded-xl ring-1 ring-cyan-400/30" />
          <span className="absolute inset-0 rounded-xl ring-1 ring-fuchsia-400/20 [animation:flicker_3s_linear_infinite]" />
        </div>

        {/* Title */}
        <div className="relative z-10 flex h-full flex-col justify-between" style={{ transform: 'translateZ(22px)' }}>
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wide text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-white/70">{project.desc}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
            <button
              onMouseEnter={blip}
              onClick={click}
              className="inline-flex items-center gap-1 rounded-md border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-100 transition-colors hover:bg-cyan-500/20"
            >
              Visit <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Data-grid overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-xl opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">Featured Projects</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      {/* Flicker keyframes */}
      <style>{`
        @keyframes flicker {
          0%,19%,21%,23%,25%,54%,56%,100% { opacity: .6 }
          20%,24%,55% { opacity: .9 }
        }
      `}</style>
    </section>
  );
}
