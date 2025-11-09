import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function ImpactCTA() {
  const testimonials = [
    {
      quote:
        'UnleashIT automated our client intake and reporting—saved 40+ hours/month and response time dropped to minutes.',
      author: 'Maya R., Operations Lead'
    },
    {
      quote:
        'Their AI agents handle 70% of support tickets flawlessly. We scaled without adding headcount.',
      author: 'Daniel K., Head of Support'
    },
    {
      quote:
        'From concept to impact in under 3 weeks. The automations pay for themselves every month.',
      author: 'Selim A., Founder'
    }
  ];

  return (
    <section className="bg-[#0A0A0A] text-white">
      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h3 className="text-2xl font-bold md:text-3xl">Results our clients feel</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/40 p-6 shadow-[0_0_40px_-12px_rgba(255,122,0,0.35)]"
            >
              <p className="text-sm text-white/80">“{t.quote}”</p>
              <div className="mt-4 text-xs font-medium text-white/60">{t.author}</div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF7A00]/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,122,0,0.12),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
          <h3 className="text-3xl font-extrabold md:text-4xl">Let’s Build Your AI-Powered Future.</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Talk with our team and discover what AI can automate for you.
          </p>
          <a
            href="https://calendly.com/meetmate"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-[#FF7A00] px-6 py-3 font-semibold text-black shadow-lg shadow-[#FF7A00]/30 transition hover:brightness-110"
          >
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-[#FF7A00]" />
            <div className="text-lg font-bold">UnleashIT</div>
            <span className="ml-2 text-sm text-white/60">Automate. Augment. Accelerate.</span>
          </div>

          <nav className="flex flex-wrap items-center gap-5 text-sm text-white/70">
            <a href="#" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="https://calendly.com/meetmate" target="_blank" rel="noreferrer" className="hover:text-white">Calendly</a>
          </nav>

          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
          </div>
        </div>
        <div className="pb-10 text-center text-xs text-white/50">© {new Date().getFullYear()} UnleashIT. All rights reserved.</div>
      </footer>
    </section>
  );
}
