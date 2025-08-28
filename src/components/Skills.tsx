"use client";
import React, { useState, useRef } from "react";
import {
  Code2,
  Palette,
  Users,
  Target,
  Monitor,
  Figma,
  Layers,
  MousePointer2,
  Play,
  Pause,
  RotateCcw,
  Zap,
  GitBranch,
  Calendar,
  Clock,
  Brain,
  Lightbulb,
} from "lucide-react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const skillDemos = [
    {
      icon: Code2,
      title: "Programming Languages",
      subtitle: "Code that breathes and adapts",
      skills: [
        { name: "C++", level: 90, color: "#00599C" },
        { name: "JavaScript", level: 85, color: "#F7DF1E" },
        { name: "HTML5", level: 95, color: "#E34F26" },
        { name: "CSS3", level: 90, color: "#1572B6" },
      ],
      demo: "CodeEditor"
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      subtitle: "Interfaces that tell stories",
      skills: [
        { name: "Figma", level: 95, color: "#F24E1E" },
        { name: "Webflow", level: 90, color: "#22D3EE" },
        { name: "UI Design", level: 85, color: "#8B5CF6" },
        { name: "Prototyping", level: 88, color: "#10B981" },
      ],
      demo: "DesignStudio"
    },
    {
      icon: Users,
      title: "Event Management",
      subtitle: "Orchestrating experiences at scale",
      skills: [
        { name: "Event Planning", level: 95, color: "#EF4444" },
        { name: "Team Coordination", level: 90, color: "#F59E0B" },
        { name: "Project Management", level: 88, color: "#06B6D4" },
        { name: "Logistics", level: 85, color: "#8B5CF6" },
      ],
      demo: "EventOrchestrator"
    },
    {
      icon: Target,
      title: "Leadership & Soft Skills",
      subtitle: "Human connections that drive results",
      skills: [
        { name: "Problem Solving", level: 92, color: "#10B981" },
        { name: "Time Management", level: 90, color: "#F59E0B" },
        { name: "Leadership", level: 88, color: "#EF4444" },
        { name: "Collaboration", level: 95, color: "#8B5CF6" },
      ],
      demo: "LeadershipHub"
    },
  ];

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Core <span className="text-cyan-400">Competencies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Skills come alive through interaction—every capability tells its story through motion, feedback, and flow
          </p>
        </motion.div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-900/60 backdrop-blur-lg rounded-2xl p-2 border border-gray-800">
            {skillDemos.map(({ icon: Icon, title }, index) => (
              <motion.button
                key={title}
                onClick={() => setActiveDemo(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeDemo === index
                    ? "bg-cyan-500 text-black font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden md:block">{title}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <DemoRenderer demo={skillDemos[activeDemo]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Demo Renderer
function DemoRenderer({ demo }: { demo: any }) {
  const { demo: demoType, title, subtitle, skills } = demo;

  const demos: { [key: string]: React.ComponentType<any> } = {
    CodeEditor,
    DesignStudio,
    EventOrchestrator,
    LeadershipHub,
  };

  const DemoComponent = demos[demoType];

  return (
    <div className="bg-gray-900/60 backdrop-blur-lg rounded-3xl border border-cyan-500/20 overflow-hidden">
      {/* Demo Header */}
      <div className="p-8 border-b border-gray-800/50">
        <div className="flex items-center gap-4 mb-4">
          <demo.icon className="w-8 h-8 text-cyan-400" />
          <div>
            <h3 className="text-3xl font-bold text-white">{title}</h3>
            <p className="text-gray-400">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Interactive Demo Area */}
      <div className="p-8 min-h-[400px]">
        <DemoComponent skills={skills} />
      </div>

      {/* Skills Progress Bar */}
      <div className="p-8 bg-gray-800/30 border-t border-gray-700/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill: any, i: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-white font-medium mb-2">{skill.name}</div>
              <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full shadow-glow"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                />
              </div>
              <div className="text-cyan-400 text-sm mt-1">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Code Editor Demo
function CodeEditor({ skills }: { skills: any[] }) {
  const [isTyping, setIsTyping] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  const codeSnippets = [
    { lang: "C++", code: "vector<int> optimizePerformance() {", color: "#00599C" },
    { lang: "JavaScript", code: "const createInteraction = async () => {", color: "#F7DF1E" },
    { lang: "HTML5", code: "<canvas id='interactive-demo'>", color: "#E34F26" },
    { lang: "CSS3", code: ".skill-animation { transform: scale(1.2); }", color: "#1572B6" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % codeSnippets.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="bg-gray-950 rounded-2xl border border-gray-700 overflow-hidden">
        {/* Editor Header */}
        <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-300 text-sm">skills-demo.code</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setIsTyping(!isTyping)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1 text-gray-400 hover:text-white"
            >
              {isTyping ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 min-h-[280px] font-mono text-sm">
          <div className="space-y-3">
            {codeSnippets.map((snippet, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4"
                animate={{
                  opacity: currentLine === i ? 1 : 0.4,
                  x: currentLine === i ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-gray-500 w-8">{i + 1}</div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: snippet.color }}
                  />
                  <motion.span
                    className="text-gray-300"
                    animate={{
                      color: currentLine === i ? snippet.color : "#9CA3AF"
                    }}
                  >
                    {snippet.code}
                  </motion.span>
                  {currentLine === i && isTyping && (
                    <motion.div
                      className="w-2 h-5 bg-cyan-400"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Syntax Elements */}
          <div className="absolute top-20 right-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="absolute px-3 py-1 rounded-lg text-xs border"
                style={{
                  backgroundColor: `${skill.color}20`,
                  borderColor: `${skill.color}40`,
                  color: skill.color,
                  top: i * 40,
                  right: Math.sin(i) * 60,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Design Studio Demo
function DesignStudio({ skills }: { skills: any[] }) {
  const [selectedTool, setSelectedTool] = useState(0);
  const tools = [
    { name: "Figma", icon: Figma, action: "designing" },
    { name: "Webflow", icon: Layers, action: "layouting" },
    { name: "UI Design", icon: Brain, action: "researching" },
    { name: "Prototyping", icon: MousePointer2, action: "prototyping" }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 h-full">
      {/* Tool Palette */}
      <div className="space-y-3">
        <h4 className="text-white font-medium mb-4">Design Tools</h4>
        {tools.map((tool, i) => (
          <motion.button
            key={tool.name}
            onClick={() => setSelectedTool(i)}
            className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all ${
              selectedTool === i
                ? "bg-cyan-500/20 border-cyan-500 text-white"
                : "bg-gray-800/50 border-gray-700 text-gray-400 hover:text-white"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <tool.icon className="w-5 h-5" />
            <span>{tool.name}</span>
            <div className="ml-auto text-xs">
              {skills[i].level}%
            </div>
          </motion.button>
        ))}
      </div>

      {/* Canvas Area */}
      <div className="md:col-span-2">
        <div className="bg-gray-800/30 rounded-2xl border border-gray-700 h-80 relative overflow-hidden">
          <div className="absolute top-4 left-4 text-sm text-gray-400">
            Currently {tools[selectedTool].action}...
          </div>

          {/* Dynamic Design Elements */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTool}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-8 flex items-center justify-center"
            >
              {selectedTool === 0 && <FigmaCanvas />}
              {selectedTool === 1 && <UIDesignCanvas />}
              {selectedTool === 2 && <UXResearchCanvas />}
              {selectedTool === 3 && <PrototypeCanvas />}
            </motion.div>
          </AnimatePresence>

          {/* Floating Skill Indicators */}
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: skill.color,
                top: `${20 + (i * 15)}%`,
                right: `${10 + (i * 8)}%`,
              }}
              animate={{
                scale: selectedTool === i ? [1, 1.5, 1] : 1,
                opacity: selectedTool === i ? [0.6, 1, 0.6] : 0.3,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Canvas Components for Design Studio
function FigmaCanvas() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="grid grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="w-12 h-8 rounded bg-gradient-to-r from-purple-500 to-pink-500"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function UIDesignCanvas() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-4">
      <motion.div
        className="flex gap-2"
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-16 h-4 bg-blue-500 rounded"></div>
        <div className="w-12 h-4 bg-green-500 rounded"></div>
        <div className="w-20 h-4 bg-yellow-500 rounded"></div>
      </motion.div>
      <motion.div
        className="w-32 h-20 bg-gray-700 rounded-lg border-2 border-dashed border-cyan-400"
        animate={{ borderColor: ["#22D3EE", "#8B5CF6", "#22D3EE"] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}

function UXResearchCanvas() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="w-16 h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              borderColor: ["#22D3EE", "#F59E0B", "#22D3EE"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PrototypeCanvas() {
  return (
    <div className="w-full h-full relative">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-cyan-400 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + Math.sin(i) * 20}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      
      <motion.div
        className="absolute inset-0 border-2 border-dashed border-cyan-400/30 rounded-lg"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

// Event Orchestrator Demo - FIXED VERSION
function EventOrchestrator({ skills }: { skills: any[] }) {
  const [activePhase, setActivePhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const eventPhases = [
    { 
      name: "Event Planning", 
      icon: Calendar, 
      level: skills[0].level,
      color: skills[0].color,
      description: "Strategic blueprint"
    },
    { 
      name: "Team Coordination", 
      icon: Users, 
      level: skills[1].level,
      color: skills[1].color,
      description: "Synchronizing teams"
    },
    { 
      name: "Project Management", 
      icon: Target, 
      level: skills[2].level,
      color: skills[2].color,
      description: "Execution oversight"
    },
    { 
      name: "Logistics", 
      icon: GitBranch, 
      level: skills[3].level,
      color: skills[3].color,
      description: "Resource flow"
    },
  ];

  React.useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActivePhase(prev => (prev + 1) % eventPhases.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [isPlaying, eventPhases.length]);

  return (
    <div className="relative h-80 bg-gray-900/30 rounded-2xl border border-gray-700 overflow-hidden">
      {/* Control Panel */}
      <div className="absolute top-4 right-4 z-10">
        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 bg-gray-800/80 rounded-lg border border-gray-600 text-gray-400 hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </motion.button>
      </div>

      {/* Event Timeline Flow */}
      <div className="absolute inset-8 flex items-center justify-center">
        <div className="relative w-full max-w-md">
          {/* Timeline Base */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 rounded-full -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((activePhase + 1) / eventPhases.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Phase Nodes */}
          {eventPhases.map((phase, i) => {
            const isActive = i === activePhase;
            const isCompleted = i < activePhase;
            const position = (i / (eventPhases.length - 1)) * 100;

            return (
              <div
                key={phase.name}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${position}%`, transform: "translateX(-50%) translateY(-50%)" }}
              >
                {/* Node Circle */}
                <motion.div
                  className={`relative w-16 h-16 rounded-full border-4 flex items-center justify-center cursor-pointer ${
                    isActive 
                      ? "bg-cyan-500 border-cyan-400 shadow-lg shadow-cyan-500/50" 
                      : isCompleted
                      ? "bg-green-500/20 border-green-400"
                      : "bg-gray-800 border-gray-600"
                  }`}
                  onClick={() => setActivePhase(i)}
                  animate={{
                    scale: isActive ? [1, 1.1, 1] : 1,
                    boxShadow: isActive 
                      ? ["0 0 20px rgba(34,211,238,0.5)", "0 0 30px rgba(34,211,238,0.8)", "0 0 20px rgba(34,211,238,0.5)"]
                      : "none"
                  }}
                  transition={{ 
                    scale: { duration: 1, repeat: Infinity },
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                  whileHover={{ scale: 1.15 }}
                >
                  <phase.icon 
                    className={`w-6 h-6 ${
                      isActive ? "text-white" : isCompleted ? "text-green-400" : "text-gray-400"
                    }`} 
                  />
                </motion.div>

                {/* Phase Info Card */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: -80, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.8 }}
                      className="absolute left-1/2 -translate-x-1/2 bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 min-w-[180px]"
                    >
                      <div className="text-center">
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {phase.name}
                        </h4>
                        <p className="text-gray-400 text-xs mb-2">
                          {phase.description}
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          <div className="text-cyan-400 font-bold text-lg">
                            {phase.level}%
                          </div>
                          <div className="text-gray-500 text-xs">mastery</div>
                        </div>
                        
                        {/* Skill Level Bar */}
                        <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: phase.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${phase.level}%` }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                          />
                        </div>
                      </div>

                      {/* Arrow pointer */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800/95"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Counter */}
      <div className="absolute bottom-6 left-6">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-cyan-400" />
          <span className="text-gray-400">Events Organized:</span>
          <motion.span 
            className="text-cyan-400 font-bold text-lg"
            animate={{ scale: activePhase === 0 ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.5 }}
          >
            100+
          </motion.span>
        </div>
      </div>

      {/* Success Particles */}
      <AnimatePresence>
        {activePhase === eventPhases.length - 1 && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                  opacity: 1
                }}
                animate={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
      </div>
    </div>
  );
}

// Leadership Hub Demo
function LeadershipHub({ skills }: { skills: any[] }) {
  const [connections, setConnections] = useState<number[]>([]);

  const skillNodes = [
    { name: "Problem Solving", icon: Lightbulb, x: 20, y: 30 },
    { name: "Time Management", icon: Clock, x: 80, y: 25 },
    { name: "Leadership", icon: Target, x: 25, y: 75 },
    { name: "Collaboration", icon: Users, x: 75, y: 70 },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setConnections(prev => {
        const newConnections = [...prev];
        const randomNode = Math.floor(Math.random() * skillNodes.length);
        if (!newConnections.includes(randomNode)) {
          newConnections.push(randomNode);
        }
        if (newConnections.length > 2) {
          newConnections.shift();
        }
        return newConnections;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-80 overflow-hidden">
      {/* Network Background */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Connection Lines */}
        {connections.map((nodeIndex, i) => (
          <motion.line
            key={`${nodeIndex}-${i}`}
            x1="50%"
            y1="50%"
            x2={`${skillNodes[nodeIndex].x}%`}
            y2={`${skillNodes[nodeIndex].y}%`}
            stroke="rgba(34,211,238,0.4)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </svg>

      {/* Central Leader Node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
        <Brain className="w-8 h-8 text-white" />
      </div>

      {/* Skill Nodes */}
      {skillNodes.map((node, i) => (
        <motion.div
          key={node.name}
          className={`absolute p-3 rounded-xl border-2 backdrop-blur-sm ${
            connections.includes(i)
              ? "bg-cyan-500/20 border-cyan-400 shadow-lg"
              : "bg-gray-800/50 border-gray-600"
          }`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: connections.includes(i) ? [1, 1.1, 1] : 1,
            boxShadow: connections.includes(i) 
              ? "0 0 20px rgba(34,211,238,0.5)" 
              : "none",
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <node.icon className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
            <div className="text-xs text-white font-medium">{node.name}</div>
            <div className="text-xs text-cyan-400">{skills[i].level}%</div>
          </div>
        </motion.div>
      ))}

      {/* Pulse Rings */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-cyan-400/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </div>
  );
}

export default Skills;
