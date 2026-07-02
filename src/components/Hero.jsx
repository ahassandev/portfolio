import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const roles = ["Frontend Web Developer", "React Developer",];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setTypeSpeed(50);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleType, typeSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles, typeSpeed]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent px-4 pt-28 pb-12 sm:pt-0 sm:pb-0">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-accent-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="noise-bg" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">


        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 mt-5 tracking-tight"
        >
          Where Design <span className="text-gradient">Meets</span> <br />
          Code
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-600 dark:text-zinc-400 font-medium mb-12 mt-3 h-8"
        >
          I'm a <span className="text-gray-900 dark:text-white border-r-2 border-primary-500 pr-1">{text}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-gray-500 dark:text-zinc-500 text-lg mb-12 leading-relaxed"
        >
          I build fast, responsive and scalable web applications using React, Laravel and modern web technologies.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
          >
            <span>View My Work</span>
            <ArrowRight size={20} />
          </button>
          
          <a 
            href="/Ahmad Hassan Zafar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            My resume
            <Download size={20} />
          </a>
        </motion.div>
      </div>



      {/* Floating Elements (Visual Decoration) */}
      <div className="absolute top-1/4 left-10 md:left-20 animate-float opacity-20">
        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary-500 to-transparent rotate-12 blur-sm" />
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-20 animate-float-delayed opacity-20">
        <div className="w-16 h-16 rounded-full bg-linear-to-br from-accent-500 to-transparent -rotate-12 blur-sm" />
      </div>
    </section>
  );
};

export default Hero;
