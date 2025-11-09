import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#FF7A00]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FF7A00]/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/70 backdrop-blur-sm">
            UnleashIT • AI Automation Agency
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Unlocking the Potential of AI for Business Growth.
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
            We build AI automations, agents, and avatars that save time and elevate your business performance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://calendly.com/meetmate"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#FF7A00] px-5 py-3 font-semibold text-black shadow-lg shadow-[#FF7A00]/30 transition hover:brightness-110"
            >
              Book Free Consultation
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* 3D Spline scene */}
        <div className="relative h-[420px] w-full md:h-[520px]">
          <div className="absolute inset-0 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent" />
          <Spline
            scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* soft gradient overlay for readability */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
