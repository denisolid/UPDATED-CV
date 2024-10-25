import React from 'react';
import { Github, Linkedin, Mail, Code2, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            <div className="hexagon bg-blue-500/10 w-32 h-32 blur-2xl"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 glass-card py-2 px-4 rounded-full mb-8">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">Senior Full Stack Developer</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Denis</span>
            <span className="text-gradient">Software Engineer</span>
          </h1>
          
          <div className="relative inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-300 mb-8">
              8+ Years of Enterprise Experience
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          </div>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Specialized in architecting and delivering scalable enterprise solutions.
            Expert in cloud-native applications and distributed systems.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="glass-card px-8 py-3 rounded-lg text-white hover:bg-blue-500/10 transition-all group"
            >
              <span className="text-gradient group-hover:text-white transition-colors">Schedule a Call</span>
            </a>
            <a
              href="#projects"
              className="glass-card px-8 py-3 rounded-lg text-white hover:bg-purple-500/10 transition-all group"
            >
              <span className="text-gradient group-hover:text-white transition-colors">View Portfolio</span>
            </a>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            {[
              { href: 'https://github.com/denisolid', icon: Github, label: 'Open Source Contributions' },
              { href: 'https://linkedin.com/in/denis-solid', icon: Linkedin, label: 'Professional Network' },
              { href: 'mailto:denissolid@gmail.com', icon: Mail, label: 'Direct Contact' }
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-lg hover:scale-110 transition-all group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-gradient" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;