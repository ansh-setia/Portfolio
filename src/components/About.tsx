import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import CULOGO from "../Images/CULOGO.jpg";
import dps_logo from "../Images/dps_logo.jpg";
import IMP from "../Images/IMP.webp";
import Launched from "../Images/Launched.png";
import Techno from "../Images/Techno.png";
import ec from "../Images/ec.png";
import imp2 from "../Images/imp2.jpg";
import Launched1 from "../Images/Launched1.jpg";
import Launched2 from "../Images/Launched2.jpg";
import ec1 from "../Images/ec1.jpg";
import ec2 from "../Images/ec2.jpg";
import tech1 from "../Images/tech1.jpg";
import tech2 from "../Images/tech2.jpg";
import imp1 from "../Images/imp1.jpg";

const About = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const stats = [
    { icon: Calendar, label: "Years of Study", value: "3rd" },
    { icon: Rocket, label: "Projects Built", value: "10+" },
    { icon: Users, label: "Leadership Roles", value: "4+" },
    { icon: Award, label: "Events Organized", value: "100+" },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Chandigarh University",
      duration: "2022-2026",
      grade: "CGPA: 7.9 (Till 7th Sem)",
      status: "Current",
      logo: "public/images/CULOGO.jpg",
    },
    {
      degree: "Intermediate (CBSE)",
      institution: "Delhi Public School Saharanpur",
      duration: "2021-2022",
      status: "Completed",
      logo: "public/images/dps_logo.jpg",
    },
    {
      degree: "Matriculation (CBSE)",
      institution: "Delhi Public School Saharanpur",
      duration: "2019-2020",
      status: "Completed",
      logo: "public/images/dps_logo.jpg",
    },
  ];

  const experiences = [
    {
      title: "Campus Ambassador",
      organization: "Innovation Mission Punjab",
      duration: "Mar 2025 - Present",
      description:
        "Promoted innovation through campus drives and events. Acted as liaison between students and IMPunjab to foster entrepreneurial initiatives.",
      skills: ["Innovation Promotion", "Event Organization", "Student Engagement"],
      logo: "public/images/IMP.webp",
      photos: ["public/images/imp1.jpg", "public/images/imp2.jpg"],
    },
    {
      title: "Brand Ambassador",
      organization: "LaunchED",
      duration: "Feb 2024 - Present",
      description:
        "Led campaigns to enhance brand visibility and student engagement through events, promotions, and content creation.",
      skills: ["Brand Marketing", "Campaign Management", "Content Creation"],
      logo: "public/images/Launched.png",
      photos: ["public/images/Launched1.jpg", "public/images/Launched2.jpg"],
    },
    {
      title: "Secretary",
      organization: "Technophiles Society",
      duration: "Current",
      description:
        "Planned and executed tech events and workshops, coordinated teams, and built a culture of innovation and learning.",
      skills: ["Leadership", "Event Management", "Team Coordination"],
      logo: "public/images/Techno.png",
      photos: ["public/images/tech1.jpg", "public/images/tech2.jpg"],
    },
    {
      title: "Joint Secretary",
      organization: "Event Crew Club – Chandigarh University",
      duration: "Current",
      description:
        "Organized 100+ events, collaborated with industry leaders, and built a community of 8,000+ students by driving flagship university events such as IGNITE 2024 (with Shark Tank’s Aman Gupta) and IEEE Day.",
      skills: ["Leadership", "Event Management", "Team Coordination"],
      logo: "public/images/ec.png",
      photos: ["public/images/ec1.jpg", "public/images/ec2.jpg"],
    },
  ];

  const coreStrengths = [
    { icon: Target, name: "Problem Solving", description: "Quick analytical thinking" },
    { icon: Clock, name: "Time Management", description: "Efficient task prioritization" },
    { icon: Users, name: "Leadership", description: "Team building & coordination" },
    { icon: Lightbulb, name: "Innovation", description: "Creative solution finding" },
    { icon: Palette, name: "UI/UX Design", description: "Figma expertise" },
    { icon: Brain, name: "Technical Skills", description: "Programming & development" },
  ];

  const achievements = [
    { title: "Founder & President • Young Orators Club" },
    { title: "Secretary • Technophiles Society" },
    { title: "Joint Secretary • Event Crew Club" },
    { title: "Organized 100+ Events at Chandigarh University" },
  ];

  return (
    <section id="about" className="relative py-28 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* ----- Existing Code Stays Same Until Work Experience ----- */}
        {/* Header */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center mb-20"
>
  <h2 className="text-5xl font-extrabold mb-4 text-white tracking-tight">
    About <span className="text-cyan-500">Me</span>
  </h2>
  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
    Designing, building, and leading impactful digital experiences with
    creativity and purpose.
  </p>
</motion.div>

{/* Intro + Strengths */}
<div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
  {/* Intro */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="space-y-6"
  >
    <p className="text-lg leading-relaxed text-gray-300">
      I'm a{" "}
      <span className="text-cyan-500">Final-year Computer Science student</span>{" "}
      at Chandigarh University, skilled in{" "}
      <span className="text-cyan-500">C++, Java, Python, and Web Technologies</span>.
      My passion lies in creating seamless user experiences, supported by my
      expertise in{" "}
      <span className="text-cyan-500">UI/UX design using figma and Webflow</span>.
    </p>

    <p className="text-lg leading-relaxed text-gray-300">
      Beyond academics, I’ve taken leadership roles as{" "}
      <span className="text-cyan-500">Campus Ambassador</span> and{" "}
      <span className="text-cyan-500">Brand Ambassador</span>, organizing
      100+ events and building vibrant student communities.
    </p>

    <div className="grid grid-cols-2 gap-4 pt-4">
      {coreStrengths.map((strength, i) => (
        <motion.div
          key={strength.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center space-x-3 p-3 bg-[#111] rounded-xl border border-gray-800 hover:border-cyan-500 transition"
        >
          <strength.icon className="h-6 w-6 text-cyan-500" />
          <div>
            <div className="text-sm font-medium text-white">
              {strength.name}
            </div>
            <div className="text-xs text-gray-400">
              {strength.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* Stats */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="grid grid-cols-2 gap-6"
  >
    {stats.map(({ icon: Icon, label, value }, i) => (
      <motion.div
        key={label}
        whileHover={{ scale: 1.05 }}
        className="p-6 text-center rounded-2xl bg-[#111] border border-gray-800 hover:border-cyan-500 transition"
      >
        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-3">
          <Icon className="h-6 w-6 text-cyan-500" />
        </div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </motion.div>
    ))}
  </motion.div>
</div>

{/* Education */}
<div className="mb-28">
  <h3 className="text-4xl font-bold text-center mb-14 text-white">
    Education
  </h3>
  <div className="space-y-6">
    {education.map((edu, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.02 }}
        className="flex items-center gap-6 p-6 bg-[#111] rounded-2xl border border-gray-800 hover:border-cyan-500 transition"
      >
        <img
          src={edu.logo}
          alt={edu.institution}
          className="w-20 h-20 object-contain rounded-lg bg-white p-2 shadow-md"
        />
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-white mb-1">
            {edu.degree}
          </h4>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-cyan-500 font-medium">
              {edu.institution}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400 text-sm">{edu.duration}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">{edu.grade}</span>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                edu.status === "Current"
                  ? "bg-[#d4af37]/20 text-cyan-500"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {edu.status}
            </span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>


        {/* Work Experience */}
        <div className="mb-28">
          <h3 className="text-4xl font-bold text-center mb-14 text-white">Work Experience</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl bg-[#111] border border-gray-800 hover:border-cyan-500 shadow-md flex flex-col md:flex-row items-center gap-6"
              >
                {/* Logo */}
                <div className="w-24 h-24 flex-shrink-0 rounded-full bg-white p-2 shadow-md">
                  <img
                    src={exp.logo}
                    alt={exp.organization}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-white mb-2">{exp.title}</h4>
                  <p className="text-gray-400 mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-800 text-xs text-cyan-500 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedExp(exp)}
                    className="px-4 py-2 rounded-lg bg-gray-800 border-cyan-500 border-2 text-white font-semibold hover:bg-cyan-500 transition"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal for Photos */}
        {selectedExp && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#111] rounded-2xl p-6 max-w-3xl w-full relative">
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedExp.title} @ {selectedExp.organization}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedExp.photos.map((photo, idx) => (
                  <img
                    key={idx}
                    src={photo}
                    alt={`work-${idx}`}
                    className="rounded-lg object-cover w-full h-56"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ----- Rest of your code (Achievements) stays the same ----- */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-14 text-white">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, rotate: -1 }}
                className="p-6 bg-[#111] rounded-2xl border border-gray-800 hover:border-[#d4af37] transition shadow-md"
              >
                <Trophy className="h-8 w-8 text-cyan-500 mx-auto mb-3" />
                <p className="text-sm text-gray-300">{achievement.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
