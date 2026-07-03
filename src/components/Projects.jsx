import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';

const Projects = () => {

  const projects = [
    {
      title: 'React Portfolio',
      description: 'A clean and responsive developer portfolio built using React.js and Tailwind CSS. It highlights my technical skills, featured projects, and professional journey with a fast and user-friendly interface.',
      image: '/image copy.png',
      tech: ['React', 'Tailwind'],
      liveUrl: 'https://react-portfolio-coral-xi-14.vercel.app/',
    },
    {
      title: 'Responsive Web Template',
      description: 'A modern responsive web template built with Bootstrap 5, featuring a mobile-first design, clean layout, and cross-device compatibility.',
      image: '/image copy 5.png',
      tech: ['HTML', 'Bootstrap'],
      liveUrl: 'https://responsive-portfolio-template-ivory.vercel.app/',
    },
    {
      title: 'Software Company Website',
      description: 'A modern multi-page software company website developed using Bootstrap 5. It includes responsive layouts, reusable components, smooth navigation, and a professional design optimized for all screen sizes.',
      image: '/image copy 2.png',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      liveUrl: 'https://website-main-seven-iota.vercel.app/Services.html',
    },
    {
      title: 'Responsive Web Template',
      description: 'A modern responsive web template built with Bootstrap 5, featuring a mobile-first design, clean layout, and cross-device compatibility.',
      image: '/image copy 3.png ',
      tech: ['Bootstrap'],
      liveUrl: 'https://responsive-bootstrap-template.vercel.app/#',
    },
    {
      title: 'Micro Data',
      description: 'A modern and responsive microdata website built with React.js and Tailwind CSS. The application features a clean user interface, reusable components, and a fast, mobile-friendly experience optimized for all screen sizes.',
      image: '/image copy 4.png',
      tech: ['React JS', 'Tailwind CSS'],
      liveUrl: 'https://micro-data-react-app.vercel.app/#',
    },
    {
      title: 'Portfolio 2.0',
      description: 'Ultra-modern portfolio template for creative developers.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tech: ['React', 'Framer Motion', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest font-bold text-accent-500 mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h3>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card group rounded-3xl overflow-hidden hover:border-primary-500/50 transition-colors flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden shrink-0">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase font-black tracking-tighter text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a href={project.liveUrl} className="flex items-center gap-2 text-white font-bold hover:text-primary-500 transition-colors">
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </a>
                  </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
