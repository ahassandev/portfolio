import { motion } from 'framer-motion';

const Skills = ({ data: skillCategories }) => {

  return (
    <section id="skills" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-secondary-500 mb-3 sm:mb-4">Expertise</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            Technical <span className="text-gradient">Stack</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
              className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl"
            >
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary-500 rounded-full" />
                {category.title}
              </h4>
              
              <div className="space-y-5 sm:space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-800 dark:text-zinc-300 font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-gray-500 dark:text-zinc-500 text-xs sm:text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/10 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "circOut" }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-[12rem] lg:text-[15rem] font-black text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none uppercase">
          Skills
        </div>
      </div>
    </section>
  );
};

export default Skills;
