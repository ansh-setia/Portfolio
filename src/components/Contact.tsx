import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anshssetiaxia@gmail.com',
      href: 'mailto:anshssetiaxia@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9149151900',
      href: 'tel:+919149151900'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chandigarh University, Mohali, Punjab',
      href: '#'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ansh09setia',
      href: 'https://linkedin.com/in/ansh09setia'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4" />
          <p className="text-lg text-gray-400">Let's build something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let’s Connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I’m always open to discussing new opportunities, internships, 
                innovative projects, or just having a chat about technology. 
                Feel free to reach out anytime!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 border border-gray-800 rounded-lg hover:border-cyan-500 transition-all"
                >
                  <Icon className="h-6 w-6 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">{label}</div>
                    <div className="text-white font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex space-x-4 pt-6">
              <a
                href="mailto:anshssetiaxia@gmail.com"
                className="flex items-center space-x-2 px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Email Me</span>
              </a>
              <a
                href="/Gray and White Simple Professional Marketing Manager CV Resume.pdf"
                download="Ansh_Setia_Resume.pdf"
                className="flex items-center space-x-2 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all"
              >
                <Calendar className="h-5 w-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="p-8 bg-gray-900 rounded-xl border border-gray-800 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="What's this about?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all font-semibold"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2024 Ansh Setia. Crafted with passion and professionalism.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
