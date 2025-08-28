"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Download,
  Linkedin,
  Mountain,
  CheckCircle,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.sendForm(
        "service_zrpiq5i", // Replace with your EmailJS service ID
        "template_2b5oq38", // Replace with your EmailJS template ID
        form.current,
        "RBaNJV7J9kdcRO3CL" // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      setStatusMessage("Message sent successfully! I'll get back to you soon.");
      form.current.reset();
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        "Failed to send message. Please try again or contact me directly."
      );
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anshssetiaxia@gmail.com",
      href: "mailto:anshssetiaxia@gmail.com",
      description: "Drop me a line anytime",
    },

    {
      icon: MapPin,
      label: "Location",
      value: "Chandigarh, India",
      href: "#",
      description: "Currently based in",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ansh09setia",
      href: "https://linkedin.com/in/ansh09setia",
      description: "Connect professionally",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-gray-900 overflow-hidden"
    >
      {/* Mountain Landscape Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-gray-900" />

        {/* Mountain Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-64 opacity-15">
          <svg viewBox="0 0 1200 300" className="w-full h-full">
            <path
              d="M0,300 L0,190 L180,130 L320,150 L480,110 L640,140 L800,120 L960,135 L1120,115 L1200,125 L1200,300 Z"
              fill="url(#contactMountain1)"
            />
            <path
              d="M0,300 L0,240 L140,180 L300,200 L460,170 L620,190 L780,175 L940,185 L1100,165 L1200,175 L1200,300 Z"
              fill="url(#contactMountain2)"
            />
            <defs>
              <linearGradient
                id="contactMountain1"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient
                id="contactMountain2"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
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
              <pattern
                id="contactGrid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#0891b2"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
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
            <MessageSquare className="w-6 h-6 text-cyan-400" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Let's create something
            <span className="text-cyan-400"> extraordinary together</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative
                projects, or potential collaborations. Whether you have a
                specific project in mind or just want to explore possibilities,
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map(
                ({ icon: Icon, label, value, href, description }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-6 p-6 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 4, scale: 1.01 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl p-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-full h-full text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">
                        {description}
                      </div>
                      <div className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                        {value}
                      </div>
                      <div className="text-sm text-gray-500">{label}</div>
                    </div>
                    {href.startsWith("http") && (
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    )}
                  </motion.a>
                )
              )}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.a
                href="mailto:anshssetiaxia@gmail.com"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-cyan-500 text-white rounded-2xl hover:bg-cyan-600 transition-all font-medium group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Email Me Directly</span>
              </motion.a>

              <motion.a
                href="/Gray and White Simple Professional Marketing Manager CV Resume.pdf"
                download="Ansh_Setia_Resume.pdf"
                className="flex items-center justify-center gap-3 px-6 py-4 border border-gray-600 text-gray-300 rounded-2xl hover:border-cyan-500 hover:text-cyan-400 transition-all font-medium group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-8 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl space-y-6"
            >
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">
                  Send a Message
                </h4>
                <p className="text-gray-400">
                  I typically respond within 24 hours
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold group"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </motion.button>

              {/* Status Message */}
              <AnimatePresence>
                {submitStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      submitStatus === "success"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span className="text-sm">{statusMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 pt-8 border-t border-gray-700/50"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mountain className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-400">
              Built with passion in the mountains of Punjab
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Ansh Setia. Crafted with passion and professionalism.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
