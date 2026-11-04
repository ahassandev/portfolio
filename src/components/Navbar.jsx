import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, MessageSquare, Sun, Moon } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/ahassandev', icon: <GitHubIcon size={20} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmad-hassan-41a28b26b/', icon: <LinkedInIcon size={20} /> }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 w-full z-[100] flex justify-center pt-3 sm:pt-6 px-3 sm:px-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto relative z-[100] flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-500 w-full max-w-7xl ${
          scrolled 
            ? 'glass-nav shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="text-base sm:text-xl md:text-2xl font-black bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent cursor-pointer truncate max-w-[210px] sm:max-w-none"
          onClick={() => scrollToSection('home')}
        >
          Ahmad Hassan Zafar
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-xl border border-black/5 dark:border-white/5">
          {navLinks.map((link) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg cursor-pointer ${
                activeSection === link.href ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary-500/10 dark:bg-white/10 rounded-lg -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              {link.name}
            </motion.button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-gray-200 dark:border-white/10 pr-4 mr-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                className="text-gray-500 dark:text-zinc-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary scale-90 sm:scale-100 cursor-pointer"
          >
            <MessageSquare size={18} />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed inset-x-3 sm:inset-x-6 top-20 sm:top-24 md:hidden glass-card p-5 sm:p-6 rounded-2xl z-40 pointer-events-auto max-h-[calc(100vh-6rem)] overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-base font-semibold text-left px-4 py-2.5 rounded-xl transition-colors cursor-pointer ${
                    activeSection === link.href ? 'bg-primary-500/15 text-primary-600 dark:text-primary-400 font-bold' : 'text-gray-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-gray-200 dark:bg-white/10 my-2" />
              <div className="flex justify-between items-center px-2">
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-zinc-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full justify-center mt-2 cursor-pointer"
              >
                <MessageSquare size={18} />
                <span>Let's talk</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
