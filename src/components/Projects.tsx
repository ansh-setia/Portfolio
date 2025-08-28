"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Mountain,
  Calendar,
  Star,
  ArrowRight,
  Code2,
  Palette,
  Users,
  Zap
} from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "NIICS Event Website",
      description: "Developed a dedicated website for NIICS to showcase event execution, deployed teams, responsibilities, and branding strategy. Designed for clarity and transparency to manage a large-scale innovation initiative.",
      longDescription: "A comprehensive event management platform built for the National Innovation and Incubation Challenge Summit. Features include real-time team tracking, responsibility management, and transparent communication channels for large-scale innovation initiatives.",
      image: "  /niics.png",
      tags: ["Webflow", "Figma", "HTML", "CSS", "JavaScript"],
      category: "web",
      featured: true,
      demo: "https://niics.vercel.app",
      github: "#",
      year: "2024",
      status: "Live",
      impact: "500+ Users",
      tech_highlights: ["Responsive Design", "Event Management", "Real-time Updates"]
    },
    {
      id: 2,
      title: "Clexure",
      description: "A nightlife web platform that helps users discover clubs, artists, special offers, and get discount coupons. Built for both clubs and users to create a smarter nightlife experience.",
      longDescription: "Revolutionary nightlife discovery platform connecting users with venues, artists, and exclusive offers. Features advanced filtering, real-time availability, and personalized recommendations for enhanced nightlife experiences.",
      image: "  /Clexure.png",
      tags: ["Webflow", "Figma", "JavaScript", "CSS", "HTML"],
      category: "web",
      featured: true,
      demo: "https://www.clexure.com",
      github: "#",
      year: "2024",
      status: "Live",
      impact: "1000+ Users",
      tech_highlights: ["Location Services", "Real-time Offers", "User Analytics"]
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Mountain },
    { id: "web", label: "Web Apps", icon: Code2 },
    { id: "design", label: "UI/UX", icon: Palette },
    { id: "mobile", label: "Mobile", icon: Users },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Mountain Landscape Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black" />
        
        {/* Mountain Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-64 opacity-15">
          <svg viewBox="0 0 1200 300" className="w-full h-full">
            <path 
              d="M0,300 L0,180 L150,120 L300,140 L450,100 L600,130 L750,110 L900,125 L1050,105 L1200,120 L1200,300 Z" 
              fill="url(#mountainGradient3)"
            />
            <path 
              d="M0,300 L0,220 L120,160 L280,180 L420,150 L580,170 L720,155 L880,165 L1050,145 L1200,155 L1200,300 Z" 
              fill="url(#mountainGradient4)"
            />
            <defs>
              <linearGradient id="mountainGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="mountainGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.03" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="projectGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0891b2" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#projectGrid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <Code2 className="w-6 h-6 text-cyan-400" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-world solutions crafted with <span className="text-cyan-400">innovative design</span> and 
            <span className="text-cyan-400"> cutting-edge technology</span>
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="flex bg-gray-800/50 backdrop-blur-xl rounded-2xl p-2 border border-gray-700/50">
            {categories.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => setSelectedCategory(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === id
                    ? "bg-cyan-500 text-gray-900 shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: selectedCategory !== id ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:block">{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300 font-medium">More exciting projects launching soon</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-4 h-4 text-cyan-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Project Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full">
            <Star className="w-3 h-3 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-medium">Featured</span>
          </div>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        
        {/* Status Indicator */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 backdrop-blur-xl border border-green-500/30 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs font-medium">{project.status}</span>
          </div>
        </div>

        {/* Overlay with Quick Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm flex items-center justify-center gap-4"
            >
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-medium">View Live</span>
              </motion.a>
              
              <motion.a
                href={project.github}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-600 text-gray-300 rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span className="font-medium">Code</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Content */}
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.year}
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {project.impact}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
          <div className="grid grid-cols-1 gap-2">
            {project.tech_highlights.slice(0, 3).map((highlight, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 text-gray-300 rounded-full text-xs hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition-all font-medium group/btn"
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
            <span>Live Demo</span>
          </a>
          
          <a
            href={project.github}
            className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all font-medium group/btn"
          >
            <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span>Code</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
