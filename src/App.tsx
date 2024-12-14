import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { CV } from '../src/components/sections/Cv';
import { Contact } from './components/sections/Contact';
import { Navbar } from './components/Navbar';
import { PageTransition } from './components/PageTransition';
import { LandingAnimation } from '../src/components/LandingAnimations';

function App() {
  return (
    <>
      <LandingAnimation />
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <CV />
          <Contact />
        </div>
      </PageTransition>
    </>
  );
}

export default App;