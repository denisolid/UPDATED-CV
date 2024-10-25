import React from 'react';
import { Award, Users, Cpu, Target } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-gradient" />,
      title: "Technical Leadership",
      description: "Led cross-functional teams of 10+ developers in delivering enterprise solutions for Fortune 500 companies."
    },
    {
      icon: <Users className="w-6 h-6 text-gradient" />,
      title: "Project Impact",
      description: "Architected systems processing $50M+ in annual transactions with 99.99% uptime."
    },
    {
      icon: <Cpu className="w-6 h-6 text-gradient" />,
      title: "Innovation",
      description: "Pioneered microservices architecture reducing deployment time by 70% and infrastructure costs by 40%."
    },
    {
      icon: <Target className="w-6 h-6 text-gradient" />,
      title: "Optimization",
      description: "Improved system performance by 60% through advanced caching and optimization strategies."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Profile</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Driving Innovation Through Technical Excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="glass-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gradient">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gradient">Strategic Technical Leadership</h3>
            <p className="text-gray-300">
              Senior Full Stack Developer with proven expertise in architecting and implementing enterprise-scale applications. 
              Specialized in cloud-native solutions, distributed systems, and high-performance applications.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gradient">Technical Vision & Innovation</h3>
            <p className="text-gray-300">
              Demonstrated ability to transform complex business requirements into elegant technical solutions. 
              Strong focus on scalability, security, and maintainability in system design and implementation.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gradient">Leadership & Collaboration</h3>
            <p className="text-gray-300">
              Experienced in leading development teams, mentoring junior developers, and collaborating with stakeholders 
              to deliver high-impact solutions that drive business growth and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;