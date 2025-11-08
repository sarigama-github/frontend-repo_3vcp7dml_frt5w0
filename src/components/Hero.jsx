import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(168,85,247,0.35),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Futuristic art that moves
          <br />
          with you.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-xl text-white/80 text-base sm:text-lg"
        >
          I craft surreal, cyberpunk-inspired visuals and interactive experiences.
          Dive into a world where sound, motion, and light collide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="#work"
            className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/40 transition"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 hover:bg-white/15 px-5 py-3 text-sm font-semibold text-white transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
