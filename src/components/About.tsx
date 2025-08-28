"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Brain,
  Rocket,
  Users,
  Award,
  Calendar,
  Target,
  Clock,
  Lightbulb,
  Palette,
  Trophy,
  X,
  ArrowRight,
  MapPin,
  ExternalLink,
  Star,
  GraduationCap,
  Briefcase,
  Mountain,
  Code2
} from "lucide-react";

const About = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [activeSection, setActiveSection] = useState("story");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const stats = [
    { 
      icon: GraduationCap, 
      label: "Academic Excellence", 
      value: "Final Year", 
      sublabel: "Computer Science Engineering",
      color: "from-cyan-400 to-teal-500"
    },
    { 
      icon: Rocket, 
      label: "Innovation Driven", 
      value: "10+", 
      sublabel: "Projects Built & Deployed",
      color: "from-blue-400 to-cyan-500"
    },
    { 
      icon: Users, 
      label: "Leadership Impact", 
      value: "4+", 
      sublabel: "Active Leadership Roles",
      color: "from-teal-400 to-green-500"
    },
    { 
      icon: Award, 
      label: "Community Building", 
      value: "100+", 
      sublabel: "Events Successfully Organized",
      color: "from-cyan-500 to-blue-400"
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      institution: "Chandigarh University",
      location: "Punjab, India",
      duration: "2022-2026",
      grade: "CGPA: 7.9 (Till 7th Sem)",
      status: "Current",
      logo: "/images/CULOGO.jpg",
      description: "Specializing in Software Engineering, Data Structures, Algorithms, and Modern Web Technologies",
      highlights: ["Software Engineering", "UI/UX Design", "Full Stack Development", "Community Leadership"]
    },
    {
      degree: "Senior Secondary Education",
      field: "Science Stream",
      institution: "Delhi Public School Saharanpur",
      location: "Uttar Pradesh, India",
      duration: "2021-2022",
      status: "Completed",
      logo: "/images/dps_logo.jpg",
      description: "Strong foundation in Mathematics, Physics, Chemistry with Computer Science specialization",
      highlights: ["Mathematics Excellence", "Computer Science", "Analytical Thinking", "Problem Solving"]
    },
    {
      degree: "Matriculation (CBSE)",
      field: "Secondary Education",
      institution: "Delhi Public School Saharanpur",
      location: "Uttar Pradesh, India",
      duration: "2019-2020",
      status: "Completed",
      logo: "/images/dps_logo.jpg",
      description: "Scout and guide, Badminton, cricket, and basketball player with a keen interest in extracurricular activities",
      highlights: ["Mathematics Excellence", "Computer Science", "Sports & Activities"]
    },
  ];

  const experiences = [
    {
      title: "Campus Ambassador",
      organization: "Innovation Mission Punjab",
      duration: "Mar 2025 - Present",
      type: "Innovation Leadership",
      description: "Spearheading innovation initiatives across campus, fostering entrepreneurial mindset among students, and bridging the gap between academic learning and real-world application through strategic programs and events.",
      achievements: [
        "Engaged 500+ students in innovation programs",
        "Organized 15+ innovation workshops and seminars",
        "Built network of 50+ student entrepreneurs",
        "Facilitated partnerships with 10+ startups"
      ],
      skills: ["Innovation Strategy", "Community Building", "Program Management", "Startup Ecosystem"],
      logo: "/images/IMP.webp",
      photos: ["/images/imp1.jpg", "/images/imp2.jpg"],
      impact: "500+ Students Engaged"
    },
    {
      title: "Brand Ambassador",
      organization: "LaunchED",
      duration: "Feb 2024 - Present",
      type: "Brand & Marketing",
      description: "Orchestrating comprehensive brand campaigns that resonate with student communities, developing content strategies that amplify brand presence across multiple digital touchpoints and campus events.",
      achievements: [
        "Increased brand engagement by 300%",
        "Created content reaching 10K+ students",
        "Organized 20+ promotional events",
        "Built ambassador network of 25+ students"
      ],
      skills: ["Brand Strategy", "Content Creation", "Digital Marketing", "Event Management"],
      logo: "/images/Launched.png",
      photos: ["/images/Launched1.jpg", "/images/Launched2.jpg"],
      impact: "300% Brand Engagement Growth"
    },
    {
      title: "Secretary",
      organization: "Technophiles Society",
      duration: "Current",
      type: "Technical Leadership",
      description: "Leading strategic initiatives for one of the university's premier technology societies, curating educational experiences that bridge theoretical knowledge with practical application in emerging technologies.",
      achievements: [
        "Organized 25+ technical workshops",
        "Led team of 15+ core members",
        "Increased society membership by 200%",
        "Facilitated industry expert sessions"
      ],
      skills: ["Strategic Leadership", "Technical Event Curation", "Team Development", "Industry Relations"],
      logo: "/images/Techno.png",
      photos: ["/images/tech1.jpg", "/images/tech2.jpg"],
      impact: "25+ Technical Workshops Organized"
    },
    {
      title: "Joint Secretary",
      organization: "Event Crew Club",
      duration: "Current",
      type: "Event Management",
      description: "Orchestrating flagship university events including collaborations with industry leaders like Shark Tank's Aman Gupta, building a thriving community of 8,000+ students through innovative event experiences.",
      achievements: [
        "Built community of 8,000+ students",
        "Organized IGNITE 2024 with Aman Gupta",
        "Managed IEEE Day celebrations",
        "Led event team of 50+ volunteers"
      ],
      skills: ["Large-scale Event Management", "Stakeholder Relations", "Community Building", "Celebrity Collaborations"],
      logo: "/images/ec.png",
      photos: ["/images/ec1.jpg", "/images/ec2.jpg"],
      impact: "8,000+ Student Community Built"
    },
  ];

  const coreStrengths = [
    { 
      icon: Target, 
      name: "Strategic Problem Solving", 
      description: "Analytical approach to complex challenges with systems-level thinking",
      proficiency: 92,
      category: "Leadership"
    },
    { 
      icon: Palette, 
      name: "UI/UX Design Excellence", 
      description: "User-centered design with expertise in Figma and design systems",
      proficiency: 95,
      category: "Design"
    },
    { 
      icon: Code2, 
      name: "Full-Stack Development", 
      description: "Modern web technologies including React, Node.js, and databases",
      proficiency: 87,
      category: "Technical"
    },
    { 
      icon: Users, 
      name: "Community Leadership", 
      description: "Building and inspiring teams toward shared visions and goals",
      proficiency: 88,
      category: "Leadership"
    },
    { 
      icon: Lightbulb, 
      name: "Innovation & Creativity", 
      description: "Creative solution architecture and entrepreneurial thinking",
      proficiency: 94,
      category: "Innovation"
    },
    { 
      icon: Clock, 
      name: "Project Execution", 
      description: "Efficient delivery of complex projects under tight deadlines",
      proficiency: 90,
      category: "Management"
    },
  ];

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Mountain Landscape Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black " />
        
        {/* Mountain Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-64 opacity-20">
          <svg viewBox="0 0 1200 300" className="w-full h-full">
            <path 
              d="M0,300 L0,200 L200,100 L400,150 L600,80 L800,120 L1000,90 L1200,140 L1200,300 Z" 
              fill="url(#mountainGradient)"
            />
            <path 
              d="M0,300 L0,250 L150,180 L350,200 L550,160 L750,180 L950,150 L1200,170 L1200,300 Z" 
              fill="url(#mountainGradient2)"
            />
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0891b2" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
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
            <Mountain className="w-6 h-6 text-cyan-400" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building bridges between <span className="text-cyan-400">innovative design</span>, 
            <span className="text-cyan-400"> cutting-edge technology</span>, and 
            <span className="text-cyan-400"> impactful leadership</span>
          </p>
        </motion.div>

        {/* Navigation Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="flex bg-gray-800/50 backdrop-blur-xl rounded-2xl p-2 border border-gray-700/50">
            {[
              { id: "story", label: "My Story", icon: Mountain },
              { id: "education", label: "Education", icon: GraduationCap },
              { id: "experience", label: "Experience", icon: Briefcase },
              { id: "skills", label: "Skills", icon: Target }
            ].map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === id
                    ? "bg-cyan-500 text-gray-900 shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: activeSection !== id ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {activeSection === "story" && <StorySection stats={stats} />}
          {activeSection === "education" && <EducationSection education={education} />}
          {activeSection === "experience" && <ExperienceSection experiences={experiences} selectedExp={selectedExp} setSelectedExp={setSelectedExp} />}
          {activeSection === "skills" && <SkillsSection coreStrengths={coreStrengths} />}
        </AnimatePresence>

        {/* Experience Modal */}
        <AnimatePresence>
          {selectedExp && (
            <ExperienceModal 
              experience={selectedExp} 
              onClose={() => setSelectedExp(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Story Section
function StorySection({ stats }: { stats: any[] }) {
  return (
    <motion.div
      key="story"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="space-y-16"
    >
      {/* Personal Narrative */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm <span className="text-white font-semibold">Ansh Setia</span>, a passionate 
              <span className="text-cyan-400"> final-year Computer Science student</span> at 
              Chandigarh University. My journey in technology began with curiosity and has evolved 
              into a mission to create meaningful digital experiences.
            </p>
            
            <p>
              Specializing in <span className="text-cyan-400">full-stack development</span> and 
              <span className="text-cyan-400"> UI/UX design</span>, I bring together technical 
              expertise with creative vision. My proficiency spans modern technologies like 
              <span className="text-white"> React, Node.js, Python</span>, and design tools 
              like <span className="text-white">Figma</span>.
            </p>

            <p>
              Beyond coding and designing, I'm a <span className="text-cyan-400">community builder</span> 
              at heart. Through my leadership roles and organizing <span className="text-white">100+ events</span>, 
              I've learned that the most impactful technology comes from understanding people and 
              fostering collaborative environments.
            </p>
          </div>

          <motion.div
            className="flex items-center gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-cyan-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Punjab, India</span>
            </div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">Available for exciting opportunities</span>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map(({ icon: Icon, label, value, sublabel, color }, i) => (
            <motion.div
              key={label}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-full h-full text-gray-900" />
              </div>
              
              <div className="text-2xl font-bold text-white mb-2">{value}</div>
              <div className="text-sm font-medium text-gray-300 mb-1">{label}</div>
              <div className="text-xs text-gray-500">{sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Education Section
function EducationSection({ education }: { education: any[] }) {
  return (
    <motion.div
      key="education"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Academic Excellence</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mx-auto" />
      </div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="group p-8 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-500"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-white rounded-2xl p-3 flex-shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-400 font-medium">{edu.field}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    edu.status === "Current"
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "bg-gray-700/50 text-gray-400 border border-gray-600"
                  }`}>
                    {edu.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {edu.institution}
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.duration}
                  </div>
                  {edu.grade && (
                    <>
                      <span>•</span>
                      <span className="text-cyan-400 font-medium">{edu.grade}</span>
                    </>
                  )}
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highliht) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Experience Section
function ExperienceSection({ experiences, selectedExp, setSelectedExp }: { 
  experiences: any[]; 
  selectedExp: any; 
  setSelectedExp: (exp: any) => void; 
}) {
  return (
    <motion.div
      key="experience"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Professional Journey</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mx-auto" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group p-8 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-500"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl p-2 flex-shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src={exp.logo}
                  alt={exp.organization}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {exp.type}
                  </span>
                </div>
                <p className="text-cyan-400 font-medium mb-2">{exp.organization}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              {exp.description}
            </p>

            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-semibold text-white mb-2">Key Achievements:</h5>
                <ul className="space-y-1">
                  {exp.achievements.slice(0, 2).map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <div className="text-sm font-medium text-cyan-400">
                  {exp.impact}
                </div>
                <motion.button
                  onClick={() => setSelectedExp(exp)}
                  className="group/btn flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/20 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Skills Section
function SkillsSection({ coreStrengths }: { coreStrengths: any[] }) {
  return (
    <motion.div
      key="skills"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Core Capabilities</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreStrengths.map((strength, i) => (
          <motion.div
            key={strength.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group p-6 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-500"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl p-3 group-hover:scale-110 transition-transform">
                <strength.icon className="w-full h-full text-gray-900" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1">{strength.name}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{strength.description}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Proficiency</span>
                <span className="text-sm font-medium text-cyan-400">{strength.proficiency}%</span>
              </div>
              <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${strength.proficiency}%` }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Experience Modal - FIXED VERSION
function ExperienceModal({ experience, onClose }: { experience: any; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl p-2">
                <img
                  src={experience.logo}
                  alt={experience.organization}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-cyan-400 font-medium mb-1">
                  {experience.organization}
                </p>
                <p className="text-gray-400 text-sm">{experience.duration}</p>
              </div>
            </div>
            <motion.button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-xl hover:bg-gray-700/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">{experience.description}</p>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {experience.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-700/30 rounded-xl">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FIXED: Image Gallery Section */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Gallery</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {experience.photos.map((photo, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-700/20 rounded-xl overflow-hidden border border-gray-600"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={photo}
                      alt={`${experience.organization} work ${idx + 1}`}
                      className="w-full max-h-80 object-contain bg-gray-800/50"
                      style={{
                        minHeight: '200px',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Tags */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
