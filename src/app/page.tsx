"use client";

import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ExternalLink, Code2, Database, Globe, ChevronDown, X as XIcon, Menu as MenuIcon } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

// Custom icons for social media (SVG components)
const Github = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.41 1.2-.71 1.75-.17.35-.36.7-.55 1.05"/>
    <line x1="9" y1="22" x2="15" y2="22"/>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Mail = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  
  const navItems = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const skills = [
    { name: "HTML/CSS", level: 95, category: "Langages" },
    { name: "JavaScript", level: 90, category: "Langages" },
    { name: "PHP", level: 85, category: "Langages" },
    { name: "Python", level: 80, category: "Langages" },
    { name: "React", level: 88, category: "Développement Web" },
    { name: "Laravel", level: 82, category: "Développement Web" },
    { name: "Angular", level: 75, category: "Développement Web" },
    { name: "Node.js", level: 78, category: "Développement Web" },
    { name: "MySQL", level: 85, category: "Bases de données" },
    { name: "MongoDB", level: 80, category: "Bases de données" },
    { name: "Firebase", level: 75, category: "Bases de données" },
    { name: "Git/GitHub", level: 90, category: "Outils" },
    { name: "Docker", level: 70, category: "Outils" },
    { name: "VS Code", level: 95, category: "Outils" },
    { name: "Cisco Packet Tracer", level: 75, category: "Réseaux" },
    { name: "Linux", level: 80, category: "Systèmes" },
  ];

  const certifications = [
    {
      title: "Introduction à la cybersécurité",
      issuer: "Cisco Netacad",
      year: "2024",
      description: "Fondamentaux de la sécurité informatique et des bonnes pratiques.",
    },
    {
      title: "Introduction à l'IoT",
      issuer: "Cisco Netacad",
      year: "2024",
      description: "Concepts de base de l'Internet des Objets et applications.",
    },
    {
      title: "Introduction to Modern AI",
      issuer: "Online Certification",
      year: "2025",
      description: "Initiation à l'intelligence artificielle et au machine learning.",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Netacad",
      year: "2025",
      description: "Fondamentaux des réseaux informatiques et protocoles.",
    },
  ];

  const projects = [
    {
      title: "VACIEVENT",
      description: "Application web de location de matériel événementiel (tentes, chaises, tables). Gestion complète des réservations et du catalogue.",
      tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
      image: "/project1.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "Gestion de bouteilles de gaz",
      description: "Frontend mobile pour le suivi du stock et des livraisons de bouteilles de gaz en temps réel.",
      tech: ["React Native", "Expo", "MongoDB"],
      image: "/project2.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "RAMSEY",
      description: "Plateforme de vente et location de voitures en temps réel avec interface utilisateur moderne.",
      tech: ["React 18", "TypeScript", "Node.js", "Express"],
      image: "/project3.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "Gestion des étudiants",
      description: "Système de gestion des notes, absences et profils utilisateurs avec architecture MVC.",
      tech: ["PHP Natif", "MySQL", "JavaScript"],
      image: "/project4.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "Boutique en ligne",
      description: "Plateforme e-commerce complète, du catalogue produits au paiement sécurisé.",
      tech: ["PHP Natif", "JavaScript", "Bootstrap", "MySQL"],
      image: "/project5.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "Maison connectée",
      description: "Simulation domotique IoT avec contrôle des appareils connectés et automatisation.",
      tech: ["Cisco Packet Tracer", "IoT"],
      image: "/project6.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "Site vitrine Université",
      description: "Présentation globale d'une école supérieure de médecine avec design moderne.",
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      image: "/project7.jpg",
      link: "#",
      github: "#",
    },
  ];

  const education = [
    {
      degree: "Licence professionnelle (En cours)",
      school: "Institut National de la Poste, des Technologies de l'Information et de la Communication",
      period: "En cours",
    },
    {
      degree: "Diplôme de Technicien Supérieur (DTS)",
      school: "Institut National de la Poste, des Technologies de l'Information et de la Communication",
      period: "2024 - 2025",
    },
    {
      degree: "Baccalauréat, série C",
      school: "L.A.C Jeremie Bakoukou-Ba-Mouidy",
      period: "2022 - 2023",
    },
    {
      degree: "Brevet d'Études du Premier Cycle (BEPC)",
      school: "CES d'Owendo",
      period: "2019 - 2020",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 relative overflow-hidden">
      {/* 3D Animated Background */}
      <AnimatedBackground />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Goma MBA Delva David
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400">
                  Développeur Full Stack
                </p>
              </div>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto px-4">
                Étudiant passionné par le développement logiciel et les systèmes réseaux, avec un vif intérêt 
                pour la cybersécurité, le Big Data et l'intelligence artificielle. Curieux et motivé, je souhaite 
                mettre mes compétences au service de projets innovants au sein d'une équipe dynamique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Voir mes projets
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                >
                  Me contacter
                </motion.a>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <motion.a
                  href="mailto:gomambadelvadavid@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  title="Email"
                >
                  <Mail size={24} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  title="GitHub"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16"
            >
              <ChevronDown className="mx-auto animate-bounce text-slate-400" size={32} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">À Propos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Étudiant passionné par le développement logiciel et les systèmes réseaux, avec un vif intérêt 
                pour la cybersécurité, le Big Data et l'intelligence artificielle. Basé à Libreville, Gabon, 
                je suis curieux et motivé à mettre mes compétences au service de projets innovants.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Toujours à l'affût des nouvelles technologies, je m'efforce d'apprendre et de m'améliorer 
                continuellement. Je crois fermement que le code de qualité et l'architecture solide sont 
                les fondations de tout projet réussi.
              </p>
              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-3">Coordonnées</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <Mail size={18} className="text-blue-600" />
                    <span>gomambadelvadavid@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe size={18} className="text-blue-600" />
                    <span>Libreville, Gabon</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Code2 size={18} className="text-blue-600" />
                    <span>+241 66 29 00 52</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 relative"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 z-0 opacity-50">
                <EducationTimeline3D />
              </div>
              <h3 className="text-2xl font-semibold mb-6 relative z-10">Formation</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-blue-600 pl-6 pb-6 last:pb-0 relative z-10"
                >
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.school}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{edu.period}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Compétences</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          </motion.div>
          
          <div className="space-y-12">
            {['Langages', 'Développement Web', 'Bases de données', 'Outils', 'Réseaux', 'Systèmes'].map((category) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold mb-6 text-slate-700 dark:text-slate-300">{category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.filter(s => s.category === category).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Projets</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-50 dark:bg-slate-950 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Code2 size={64} className="text-white/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-950 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <CertificationBadges3D />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Code2 className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{cert.issuer}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">{cert.year}</p>
                    <p className="text-slate-600 dark:text-slate-300">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Vous avez un projet en tête ou souhaitez collaborer ? N'hésitez pas à me contacter !
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Envoyer le message
              </motion.button>
            </form>
            
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="mailto:gomambadelvadavid@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail size={24} />
                  <span>Email</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-2">
            © {new Date().getFullYear()} Goma MBA Delva David. Tous droits réservés.
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            Développé avec passion en utilisant Next.js & TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
