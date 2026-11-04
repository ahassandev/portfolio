import { motion } from 'framer-motion';
import { Layout, Code, Server } from 'lucide-react';

const Services = ({ data }) => {
  const iconMap = {
    Layout: <Layout className="text-primary-500" />,
    Code: <Code className="text-secondary-500" />,
    Server: <Server className="text-accent-500" />
  };

  const services = data.map(item => ({ ...item, icon: iconMap[item.icon] }));

  return (
    <section id="services" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-primary-500 mb-3 sm:mb-4">Values</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            My <span className="text-gradient">Services</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl group hover:border-primary-500/50 transition-all duration-500"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all">
                {service.icon}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-primary-500 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
