'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, Wifi, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certifications = [
    {
      title: 'Cybersécurité 1',
      issuer: 'CISCO',
      icon: Shield,
      description: 'Certification couvrant les fondamentaux de la cybersécurité, les menaces et les contre-mesures.',
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Internet of Things (IoT)',
      issuer: 'CISCO',
      icon: Wifi,
      description: 'Certification sur les technologies IoT, les protocoles de communication et la sécurité des objets connectés.',
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  const interests = [
    { name: 'Cybersécurité', icon: Shield },
    { name: 'Big Data', icon: Award },
    { name: 'Intelligence Artificielle', icon: CheckCircle },
    { name: 'Football', icon: Award }
  ];

  return (
    <section id="certifications" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certifications & <span className="text-blue-600">Intérêts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${cert.gradient} flex-shrink-0`}>
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{cert.title}</h4>
                      <p className="text-blue-600 font-semibold mb-3">{cert.issuer}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Centres d'intérêt */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <CheckCircle className="w-8 h-8 text-emerald-600 mr-3" />
              Centres d'intérêt
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <interest.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{interest.name}</h4>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="font-bold text-lg text-gray-900 mb-4">Motivations</h4>
              <p className="text-gray-600 leading-relaxed">
                Passionné par les technologies émergentes et leurs applications pratiques, je suis constamment à la recherche 
                de nouvelles opportunités d'apprentissage et de développement de mes compétences techniques.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}