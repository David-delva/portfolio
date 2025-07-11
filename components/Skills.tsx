'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Smartphone, Server, Shield } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const skillCategories = [
    {
      title: 'Langages de programmation',
      icon: Code,
      skills: ['Python', 'JavaScript', 'PHP'],
      color: 'blue'
    },
    {
      title: 'Développement Web',
      icon: Globe,
      skills: ['HTML', 'CSS', 'Laravel', 'React', 'Angular'],
      color: 'emerald'
    },
    {
      title: 'Développement Mobile',
      icon: Smartphone,
      skills: ['React Native', 'Expo'],
      color: 'purple'
    },
    {
      title: 'Bases de données',
      icon: Database,
      skills: ['MySQL', 'Oracle'],
      color: 'orange'
    },
    {
      title: 'Frameworks & Outils',
      icon: Server,
      skills: ['Node.js', 'React', 'Angular'],
      color: 'indigo'
    },
    {
      title: 'Cybersécurité',
      icon: Shield,
      skills: ['CISCO Cybersécurité', 'IoT Security'],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      emerald: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200',
      indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      red: 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      emerald: 'text-emerald-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      indigo: 'text-indigo-600',
      red: 'text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mes <span className="text-blue-600">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un ensemble de compétences techniques acquises au fil de mes études et projets personnels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-${category.color}-100 mr-4`}>
                  <category.icon className={`w-6 h-6 ${getIconColorClasses(category.color)}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className={`px-4 py-2 rounded-full border ${getColorClasses(category.color)} font-medium text-sm`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Langues</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Français</h4>
              <p className="text-gray-600">Courant</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Anglais</h4>
              <p className="text-gray-600">Intermédiaire</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}