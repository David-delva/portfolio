'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const education = [
    {
      degree: 'DTS en Génie Informatique',
      school: 'INPTIC',
      period: 'En cours',
      status: 'current'
    },
    {
      degree: 'Baccalauréat série C',
      school: 'L.A.C Jérémie BAKOUKOU-BA-MOUIDY',
      period: '2022 – 2023',
      status: 'completed'
    },
    {
      degree: 'BEPC',
      school: 'CES d\'Owendo',
      period: '2019 – 2020',
      status: 'completed'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos de <span className="text-blue-600">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mon Profil</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Étudiant passionné par le développement logiciel et les systèmes réseaux, avec un fort intérêt pour la 
                cybersécurité, le Big Data et l'intelligence artificielle. Curieux, motivé et désireux de mettre mes 
                compétences au service d'un projet innovant au sein d'une équipe dynamique.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Développement logiciel
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                  Cybersécurité
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Big Data
                </span>
                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                  Intelligence Artificielle
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              Formation
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{item.degree}</h4>
                      <p className="text-gray-600 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {item.school}
                      </p>
                      <p className="text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.period}
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'current' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status === 'current' ? 'En cours' : 'Terminé'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}