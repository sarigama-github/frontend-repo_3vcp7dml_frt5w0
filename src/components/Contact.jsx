import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Let’s build something surreal
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-white/70"
        >
          Available for collaborations, commissions, and live visuals.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-4 text-left"
        >
          <input
            type="text"
            required
            placeholder="Your name"
            className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-fuchsia-400/60"
          />
          <input
            type="email"
            required
            placeholder="Your email"
            className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-fuchsia-400/60"
          />
          <textarea
            placeholder="Project details"
            rows={5}
            className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-fuchsia-400/60"
          />
          <button
            type="submit"
            className="rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/40 transition"
          >
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
