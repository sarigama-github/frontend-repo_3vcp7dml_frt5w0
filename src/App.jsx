import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWorks from './components/FeaturedWorks';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWorks />
        <Contact />
        <footer id="about" className="border-t border-white/10 bg-black/90 py-10 text-center text-white/60">
          <p className="text-sm">© {new Date().getFullYear()} Astral Artist — All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
