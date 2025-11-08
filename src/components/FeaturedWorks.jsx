import { motion } from 'framer-motion';
import { Image, Film, Music2 } from 'lucide-react';

const items = [
  {
    title: 'Neon Reverie',
    tag: '3D Visual',
    icon: Image,
    color: 'from-fuchsia-500/20 to-cyan-400/20',
  },
  {
    title: 'Astral Drift',
    tag: 'Short Film',
    icon: Film,
    color: 'from-indigo-500/20 to-purple-400/20',
  },
  {
    title: 'Pulse Runner',
    tag: 'Music Visualizer',
    icon: Music2,
    color: 'from-emerald-500/20 to-teal-400/20',
  },
];

export default function FeaturedWorks() {
  return (
    <section id="work" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured works</h2>
            <p className="mt-2 text-white/70">A selection of recent explorations in motion and form.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sm text-white/70 hover:text-white">See all</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${item.color} p-5`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60">{item.tag}</div>
                    <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="mt-16 h-24 rounded-lg bg-white/5" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
