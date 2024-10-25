import React from 'react';
import { Code2, Database, Layout, Server, Cloud, Shield, Terminal, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Excellence',
      icon: <Layout className="h-6 w-6" />,
      skills: ['React/Next.js', 'TypeScript', 'Redux', 'Performance Optimization', 'Responsive Design', 'WebSocket']
    },
    {
      title: 'Backend Architecture',
      icon: <Server className="h-6 w-6" />,
      skills: ['Node.js', 'Express.js', 'Microservices', 'API Design', 'System Architecture', 'GraphQL']
    },
    {
      title: 'Database & Storage',
      icon: <Database className="h-6 w-6" />,
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Database Design', 'Query Optimization', 'Data Modeling']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Cloud Architecture', 'Monitoring']
    },
    {
      title: 'Security & Testing',
      icon: <Shield className="h-6 w-6" />,
      skills: ['OAuth 2.0', 'JWT', 'Unit Testing', 'E2E Testing', 'Security Best Practices', 'Performance Testing']
    },
    {
      title: 'Development Tools',
      icon: <Terminal className="h-6 w-6" />,
      skills: ['Git', 'Webpack', 'VS Code', 'Jira', 'Postman', 'Linux']
    },
    {
      title: 'Professional Skills',
      icon: <Users className="h-6 w-6" />,
      skills: ['Team Leadership', 'Agile/Scrum', 'Code Review', 'Technical Writing', 'Mentoring', 'Problem Solving']
    },
    {
      title: 'Best Practices',
      icon: <Code2 className="h-6 w-6" />,
      skills: ['Clean Code', 'Design Patterns', 'SOLID Principles', 'Code Optimization', 'Documentation', 'Code Standards']
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive skill set in modern web development and software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="skill-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg glass-card mx-auto">
                  {React.cloneElement(category.icon, { className: 'text-gradient' })}
                </div>
                <h3 className="text-lg font-medium text-center mt-6 mb-4 text-gradient">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="glass-card py-2 px-4 text-sm text-center rounded-lg"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;