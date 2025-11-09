import React from 'react';
import { Workflow, Bot, Video, Mail } from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'AI Automations',
    desc: 'We design systems that handle repetitive business tasks — freeing your team to focus on growth.'
  },
  {
    icon: Bot,
    title: 'AI Agents',
    desc: 'Chatbots and virtual assistants that handle client onboarding, FAQs, and support — trained on your data.'
  },
  {
    icon: Video,
    title: 'AI Avatars',
    desc: 'Digital avatars that speak any language and represent your brand across social media.'
  },
  {
    icon: Mail,
    title: 'AI Email System',
    desc: 'Smart email assistant that classifies, answers, and routes messages to the right place.'
  }
];

export default function Services() {
  return (
    <section id="work" className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,122,0,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">Our Services</h2>
            <p className="mt-3 max-w-3xl text-white/70">
              We build intelligent systems that integrate with your stack to automate, assist, and accelerate growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition hover:shadow-[0_0_40px_-10px_rgba(255,122,0,0.5)]">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#FF7A00]/15 text-[#FF7A00]">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FF7A00]/10 blur-3xl" />
            </div>
          ))}
        </div>

        <p className="mt-8 text-white/70">
          Need something unique? We build custom AI solutions based on your specific challenge.
        </p>
      </div>
    </section>
  );
}
