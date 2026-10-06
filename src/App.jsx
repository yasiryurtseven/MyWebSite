import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      {/* Sabit Üst Menü */}
      <Navbar />

      {/* Ana Sayfa Akış Bölümleri */}
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <ContactMe />
      </main>

      {/* Alt Bilgi Alanı */}
      <Footer />
    </div>
  );
}

export default App;