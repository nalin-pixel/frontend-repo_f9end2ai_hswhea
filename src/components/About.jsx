import React from 'react';
import { Cog, MessageSquare, Globe } from 'lucide-react';

export default function About() {
  const items = [
    {
      icon: Cog,
      title: 'Automate workflows',
      desc: 'Streamline operations and eliminate repetitive tasks with end-to-end automation.'
    },
    {
      icon: MessageSquare,
      title: 'Enhance customer experience',
      desc: 'Delight customers with fast, accurate, always-on assistance.'
    },
    {
      icon: Globe,
      title: 'Expand with multilingual AI',
      desc: 'Serve global audiences with AI that understands and speaks their language.'
    }
  ];

  return (
    <section className="relative bg-[#0A0A0A] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">About UnleashIT</h2>
          <p className="mt-4 text-white/70">
            We’re an AI automation agency focused on transforming how businesses operate. Our mission: translate every inefficient process into a phenomenal automated experience.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00]/15 text-[#FF7A00]">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
