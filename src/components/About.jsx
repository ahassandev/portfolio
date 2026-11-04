import { motion } from 'framer-motion';
import { Award, Code2, Users2, Zap } from 'lucide-react';

const About = ({ data }) => {
  const iconMap = {
    Award: <Award className="text-primary-500" />,
    Zap: <Zap className="text-secondary-500" />,
    Users2: <Users2 className="text-accent-500" />,
    Code2: <Code2 className="text-primary-500" />
  };

  const stats = data.map(item => ({ ...item, icon: iconMap[item.icon] }));

  return (
    <section id="about" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-primary-500 mb-3 sm:mb-4">Discovery</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              I'm Ahmad Hassan Zafar, Frontend Web Developer building modern web applications using React, Next.js, and Laravel.
            </h4>
            <p className="text-gray-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Based in the digital world, I specialize in crafting high-end, responsive, 
              and user-centric web applications. My approach blends technical excellence 
              with creative design to deliver products that truly stand out.
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 sm:p-6 rounded-2xl group hover:border-primary-500/50 transition-colors"
                >
                  <div className="mb-2 sm:mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[500px] border border-gray-200 dark:border-white/10 group shadow-xl">
              <img 
                src="/ahmad.png"
                alt="Ahmad Hassan Zafar - Frontend Web Developer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 glass-card bg-dark/85 backdrop-blur-md p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4 shadow-xl border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-500/20 flex items-center justify-center shrink-0">
                  <Code2 className="text-primary-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm sm:text-base tracking-wide truncate">Web Developer</div>
                  <div className="text-xs sm:text-sm text-zinc-300 truncate">Transforming ideas into reality</div>
                </div>
              </div>
            </div>

            {/* Decorative backgrounds */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-500/20 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
