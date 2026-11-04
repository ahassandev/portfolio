import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';

const Projects = ({ data: projects }) => {

  return (
    <section id="projects" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-accent-500 mb-3 sm:mb-4">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 sm:mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h3>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
                className="glass-card group rounded-2xl sm:rounded-3xl overflow-hidden hover:border-primary-500/50 transition-colors flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden shrink-0 bg-zinc-800">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-grow">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase font-bold tracking-tight text-gray-600 dark:text-zinc-400 bg-black/5 dark:bg-white/5 px-2 py-1 rounded border border-black/5 dark:border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-gray-900 dark:text-white font-bold hover:text-primary-500 transition-colors text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Live Preview</span>
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
