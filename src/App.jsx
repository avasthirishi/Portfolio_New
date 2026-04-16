// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Certifications from './components/Certifications';
// import Achievements from './components/Achievements';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import './index.css';
// import Education from './components/Education';

// export default function App() {
//   const [loaded, setLoaded] = useState(false);
//   useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);
//   return (
//     <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
//       <div className="grain" />
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Education />
//       <Certifications />
//       <Achievements />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);
  return (
    <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
 