"use client";
import React from "react";
import {
  Monitor,
  Code2,
  Palette,
  Users,
  Target,
  Clock,
  Brain,
  Rocket,
  Smartphone,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
      ],
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: [
        { name: "Figma", level: 95 },
        { name: "UI Design", level: 90 },
        { name: "UX Research", level: 85 },
        { name: "Prototyping", level: 88 },
      ],
    },
    {
      icon: Users,
      title: "Event Management",
      skills: [
        { name: "Event Planning", level: 95 },
        { name: "Team Coordination", level: 90 },
        { name: "Project Management", level: 88 },
        { name: "Logistics", level: 85 },
      ],
    },
    {
      icon: Target,
      title: "Leadership & Soft Skills",
      skills: [
        { name: "Problem Solving", level: 92 },
        { name: "Time Management", level: 90 },
        { name: "Leadership", level: 88 },
        { name: "Collaboration", level: 95 },
      ],
    },
  ];

  const interpersonalSkills = [
    { icon: Target, name: "Problem Solving", description: "Analytical thinking" },
    { icon: Users, name: "Leadership", description: "Team building & guidance" },
    { icon: Clock, name: "Time Management", description: "Efficient prioritization" },
    { icon: Brain, name: "Collaboration", description: "Strong teamwork skills" },
    { icon: Lightbulb, name: "Innovation", description: "Creative problem-solving" },
    { icon: Rocket, name: "Event Organization", description: "100+ events managed" },
  ];

  const hobbies = [
    { icon: Smartphone, name: "Badminton", description: "Sports & fitness" },
    { icon: Monitor, name: "Video Editing", description: "Creative content" },
    { icon: Palette, name: "Designing", description: "Visual creativity" },
    { icon: Target, name: "Travelling", description: "Exploring new places" },
  ];

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-400">
            Technical expertise and leadership abilities that drive innovation
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {skillCategories.map(({ icon: Icon, title, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-gray-800 rounded-2xl bg-gray-900/60 backdrop-blur-lg hover:border-cyan-500 transition-all shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Icon className="h-7 w-7 text-cyan-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{name}</span>
                      <span className="text-cyan-400">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-cyan-500 h-2 rounded-full shadow-[0_0_10px_#22d3ee]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">
              Core <span className="text-cyan-400">Strengths</span>
            </h3>
            <p className="text-gray-400">
              Key abilities that make me an effective leader and team player
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {interpersonalSkills.map(({ icon: Icon, name, description }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="p-6 border border-gray-800 rounded-xl text-center bg-gray-900/40 backdrop-blur-md hover:border-cyan-500 hover:shadow-[0_0_20px_#22d3ee] transition-all"
              >
                <Icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                <span className="block text-white text-sm font-medium mb-1">
                  {name}
                </span>
                <span className="text-gray-500 text-xs">{description}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-2">
              Hobbies & <span className="text-cyan-400">Interests</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hobbies.map(({ icon: Icon, name, description }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="p-6 border border-gray-800 rounded-xl text-center bg-gray-900/40 backdrop-blur-md hover:border-cyan-500 hover:shadow-[0_0_20px_#22d3ee] transition-all"
              >
                <Icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                <span className="block text-white text-sm font-medium mb-1">
                  {name}
                </span>
                <span className="text-gray-500 text-xs">{description}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
