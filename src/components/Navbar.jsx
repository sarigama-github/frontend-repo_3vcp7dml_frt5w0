import { Rocket, Instagram, Music2, Palette } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight">Astral Artist</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Instagram className="h-4 w-4 text-white" />
            </a>
            <a
              href="#"
              aria-label="Music"
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Music2 className="h-4 w-4 text-white" />
            </a>
            <a
              href="#work"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-3 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition"
            >
              <Palette className="h-4 w-4" />
              Explore Work
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
