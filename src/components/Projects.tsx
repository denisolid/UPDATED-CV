import React from 'react';
import { ExternalLink, Github, Award, Users, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise E-Commerce Platform',
      description: 'Architected and led the development of a high-performance e-commerce platform handling 100K+ daily transactions',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      achievements: [
        'Improved system performance by 60%',
        'Implemented microservices architecture',
        'Reduced infrastructure costs by 40%'
      ],
      githubUrl: 'https://github.com/denisolid/ecommerce-platform',
      liveUrl: 'https://demo-ecommerce.denisolid.dev'
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Developed a real-time financial analytics platform processing millions of data points daily',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'WebSocket', 'Docker'],
      achievements: [
        'Real-time data processing',
        'Complex data visualizations',
        'Scalable architecture'
      ],
      githubUrl: 'https://github.com/denisolid/finance-analytics',
      liveUrl: 'https://demo-analytics.denisolid.dev'
    },
    {
      title: 'Cloud-Native CMS',
      description: 'Built a modern, cloud-native content management system with advanced features and analytics',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL', 'Kubernetes', 'AWS'],
      achievements: [
        'Microservices architecture',
        'Advanced caching system',
        'Multi-tenant support'
      ],
      githubUrl: 'https://github.com/denisolid/cloud-cms',
      liveUrl: 'https://demo-cms.denisolid.dev'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Showcase of enterprise-level applications and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-gradient">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gradient mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                        <Award className="h-4 w-4 mt-1 flex-shrink-0 text-blue-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm glass-card rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center glass-card px-4 py-2 rounded-lg group-hover:text-gradient transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center glass-card px-4 py-2 rounded-lg group-hover:text-gradient transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;