import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Server, Smartphone } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Denis. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;