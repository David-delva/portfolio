'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">
                David <span className="text-blue-400">GOMA MBA</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Étudiant passionné en génie informatique, spécialisé dans le développement web et mobile, 
                la cybersécurité et l'intelligence artificielle.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Accueil', href: '#' },
                  { name: 'À propos', href: '#about' },
                  { name: 'Compétences', href: '#skills' },
                  { name: 'Projets', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a
                    href="mailto:gomambadelvadavid@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    gomambadelvadavid@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a
                    href="tel:+24166290052"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +241 66 29 00 52
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Libreville, Gabon</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-300"
            >
              <span>© 2024 David GOMA MBA. Conçu avec</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>et beaucoup de passion</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 md:mt-0"
            >
              <p className="text-gray-400 text-sm">
                Développé avec Next.js, Tailwind CSS & Framer Motion
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}