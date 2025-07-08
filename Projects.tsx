'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image'; // Importez le composant Image de Next.js
import { ExternalLink, Github, Code, Database, Smartphone, Globe } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Gestion de Bouteilles de Gaz',
      description: 'Application mobile complète pour la gestion et le suivi des bouteilles de gaz avec interface utilisateur intuitive.',
      tech: ['React Native', 'Expo', 'JavaScript'],
      icon: Smartphone,
      gradient: 'from-blue-500 to-purple-600',
      image: '/images/gaz.jpg' // Ajoutez le chemin de votre image ici
    },
    {
      title: 'Système de Gestion d\'Élèves',
      description: 'Plateforme web pour la gestion des étudiants avec fonctionnalités d\'inscription, suivi et reporting.',
      tech: ['Angular', 'TypeScript', 'CSS'],
      icon: Globe,
      gradient: 'from-emerald-500 to-teal-600',
      image: '/images/Cahier_texte.png' // Ajoutez le chemin de votre image ici
    },
    {
      title: 'Chat Temps Réel',
      description: 'Application de messagerie instantanée avec interface moderne et communication en temps réel.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      icon: Code,
      gradient: 'from-orange-500 to-red-600',
      image: '/images/chat.png' // Ajoutez le chemin de votre image ici
    },
    {
      title: 'Gestionnaire de Tâches',
      description: 'Application web de gestion de tâches avec base de données pour l\'organisation personnelle et professionnelle.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      icon: Database,
      gradient: 'from-purple-500 to-indigo-600',
      image: '/images/gestion_tache.jpg' // Ajoutez le chemin de votre image ici
    },
    {
      title: 'Site E-commerce',
      description: 'Plateforme de vente en ligne complète avec gestion des produits, panier et système de commande.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
      icon: Globe,
      gradient: 'from-pink-500 to-rose-600',
      image: '/images/ecommerce-screenshot.png' // Ajoutez le chemin de votre image ici
    }
  ];

  const getTechBadgeColor = (tech: string) => {
    const colors = {
      'React Native': 'bg-blue-100 text-blue-800',
      'Expo': 'bg-purple-100 text-purple-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'Angular': 'bg-red-100 text-red-800',
      'TypeScript': 'bg-blue-100 text-blue-800',
      'CSS': 'bg-green-100 text-green-800',
      'HTML': 'bg-orange-100 text-orange-800',
      'PHP': 'bg-indigo-100 text-indigo-800',
      'Python': 'bg-emerald-100 text-emerald-800',
      'MySQL': 'bg-cyan-100 text-cyan-800'
    };
    return colors[tech as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mes <span className="text-blue-600">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-uns des projets que j'ai développés au cours de mes études
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {project.image ? (
                <div className="relative h-48 w-full"> {/* Ajustez la hauteur selon vos besoins */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-t-2xl object-cover"
                  />
                </div>
              ) : (
                <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <project.icon className="w-12 h-12 text-white" />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getTechBadgeColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>Voir</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}