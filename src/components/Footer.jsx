import React from 'react';
import { Github, Mail, Rocket } from 'lucide-react';
import { useSFX } from './useSFX';

export default function Footer() {
  const { blip, click } = useSFX();

  return (
    <footer className="relative mt-8 border-t border-white/10 bg-[#0a0b0f] py-10">
      <div className="pointer-events-none absolute inset-x-0 -top-8 mx-auto h-16 w-[92%] rounded-full bg-gradient-to-r from-fuchsia-500/10 via-cyan-500/10 to-emerald-500/10 blur-2xl" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-white/70">
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="text-sm">Cyber Ronin — Junior Programmer Portfolio</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            onMouseEnter={blip}
            onClick={click}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition-colors hover:border-cyan-400/30 hover:bg-cyan-500/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="#"
            onMouseEnter={blip}
            onClick={click}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition-colors hover:border-fuchsia-400/30 hover:bg-fuchsia-500/10"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
