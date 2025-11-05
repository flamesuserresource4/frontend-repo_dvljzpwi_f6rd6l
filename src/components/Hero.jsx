import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Code, Cpu, Terminal } from 'lucide-react';
import { useSFX } from './useSFX';

export default function Hero() {
  const { blip, click } = useSFX();
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 10;
    const rotateX = -((y - midY) / midY) * 10;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    const el = cardRef.current;
    if (el) el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b0f]">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0f]/30 to-[#0a0b0f]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 md:flex-row md:items-end md:justify-between md:pt-32">
        {/* Avatar + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12 max-w-xl md:mb-24"
        >
          <div className="relative mb-8">
            {/* Neon avatar ring */}
            <div className="absolute -left-6 -top-6 h-36 w-36 rounded-full bg-gradient-to-tr from-cyan-500 via-fuchsia-500 to-emerald-400 opacity-60 blur-2xl" />
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl ring-2 ring-cyan-400/40 shadow-[0_0_80px_-20px_rgba(34,211,238,0.5)]">
              {/* Stylized mask silhouette using CSS blend/gradients to evoke a Cyber-Ronin */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,.6),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,.6),transparent_45%)] mix-blend-screen" />
              <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,#090b10,rgba(9,11,16,0.3),#090b10)]" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Glitch Title */}
          <div className="relative">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              <span className="relative inline-block">
                <span className="relative z-10">Cyber Ronin Developer</span>
                <span className="absolute inset-0 -translate-x-0.5 -translate-y-0.5 select-none text-cyan-400 opacity-60 blur-[0.5px]">Cyber Ronin Developer</span>
                <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 select-none text-fuchsia-400 opacity-60 blur-[0.5px]">Cyber Ronin Developer</span>
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-cyan-100/80 md:text-base">
              Junior programmer crafting immersive, neon-soaked interfaces and robust backend systems.
              Focused on React, Python, and high-fidelity UX.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={blip}
              onClick={click}
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 text-cyan-100 shadow-[0_0_40px_-18px_rgba(34,211,238,0.7)] transition-colors hover:bg-cyan-500/20"
            >
              <Rocket className="h-4 w-4 text-cyan-300" />
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={blip}
              onClick={click}
              className="group inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-5 py-2.5 text-fuchsia-100 shadow-[0_0_40px_-18px_rgba(232,121,249,0.7)] transition-colors hover:bg-fuchsia-500/20"
            >
              <Terminal className="h-4 w-4 text-fuchsia-300" />
              Contact Me
            </motion.button>
          </div>

          {/* Holographic skill chips */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/80">
            {[
              { icon: <Code className="h-3.5 w-3.5 text-cyan-300" />, label: 'React' },
              { icon: <Cpu className="h-3.5 w-3.5 text-emerald-300" />, label: 'Python' },
              { icon: <Code className="h-3.5 w-3.5 text-fuchsia-300" />, label: 'TypeScript' },
              { icon: <Terminal className="h-3.5 w-3.5 text-cyan-200" />, label: 'FastAPI' },
            ].map((s, i) => (
              <span key={i} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-sm">
                {s.icon}
                {s.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Floating holo card with 3D tilt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          ref={cardRef}
          className="relative mb-16 h-64 w-full max-w-md cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md md:mb-24"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/30" />
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-emerald-400/10 opacity-40" />
          <div className="relative z-10 grid h-full grid-rows-3 text-white" style={{ transform: 'translateZ(22px)' }}>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-cyan-200/80">Profile Status</span>
              <span className="text-[10px] text-emerald-300">ONLINE</span>
            </div>
            <div className="space-y-1">
              <div className="text-lg font-semibold tracking-wide">Digital Samurai</div>
              <div className="text-xs text-white/70">Frontend • Backend • FX</div>
            </div>
            <div className="flex items-end justify-between">
              <div className="text-[10px] text-white/60">Signal: 99.7%</div>
              <div className="h-2 w-24 overflow-hidden rounded bg-white/10">
                <div className="h-full w-11/12 bg-gradient-to-r from-emerald-400 to-cyan-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle scanline/data-grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
    </section>
  );
}
