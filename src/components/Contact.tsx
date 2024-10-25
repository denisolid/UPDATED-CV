import React from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Engagement</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Available for Senior Technical Roles and Consulting Opportunities
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 rounded-xl mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gradient">Current Focus</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="glass-card p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-gradient" />
                </div>
                <span>Available for immediate start</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="glass-card p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-gradient" />
                </div>
                <span>Remote or Hybrid (US/EU Time Zones)</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="glass-card p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-gradient" />
                </div>
                <span>Open to relocation for the right opportunity</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                icon: Mail, 
                text: 'denissolid@gmail.com', 
                href: 'mailto:denissolid@gmail.com',
                label: 'Direct Email Contact'
              },
              { 
                icon: Linkedin, 
                text: 'linkedin.com/in/denis-solid', 
                href: 'https://linkedin.com/in/denis-solid',
                label: 'Professional Profile'
              },
              { 
                icon: Github, 
                text: 'github.com/denisolid', 
                href: 'https://github.com/denisolid',
                label: 'Code Portfolio'
              }
            ].map(({ icon: Icon, text, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card flex items-center space-x-4 p-4 rounded-xl hover:scale-[1.02] transition-all"
                aria-label={label}
              >
                <div className="glass-card p-2 rounded-lg">
                  <Icon className="h-6 w-6 text-gradient" />
                </div>
                <span className="text-gray-300 group-hover:text-gradient transition-colors">{text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;