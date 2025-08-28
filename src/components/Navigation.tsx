import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">
              Ansh<span className="text-cyan-400">.dev</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Resume_Ansh.pdf"
              download="/Resume_Ansh.pdf"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-all text-sm font-semibold"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/Gray and White Simple Professional Marketing Manager CV Resume.pdf"
                download="Ansh_Setia_Resume.pdf"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-all text-sm font-semibold w-fit"
                onClick={() => setIsOpen(false)}
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
