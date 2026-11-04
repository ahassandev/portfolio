import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, MapPin, Phone } from 'lucide-react';


const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  const iconMap = {
    Mail: <Mail className="text-primary-500" />,
    Phone: <Phone className="text-secondary-500" />,
    MapPin: <MapPin className="text-accent-500" />
  };

  const contactInfo = data.info.map(item => ({ ...item, icon: iconMap[item.icon] }));

  return (
    <section id="contact" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-primary-500 mb-3 sm:mb-4">Connect</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            Get In <span className="text-gradient">Touch</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Let's discuss your next project</h4>
              <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                I'm always open to discussing new projects, creative ideas or 
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info) => (
                <a 
                  key={info.label} 
                  href={info.href}
                  className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl glass-card hover:border-primary-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-xs text-zinc-500 font-bold uppercase tracking-wider">{info.label}</div>
                    <div className="text-gray-900 dark:text-white font-medium text-sm sm:text-base truncate sm:break-all">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center text-center py-10 sm:py-12"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-500/20 flex items-center justify-center mb-6">
                      <CheckCircle size={36} className="text-primary-500" />
                    </div>
                    <h5 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h5>
                    <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-4 sm:space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-zinc-500 uppercase tracking-wider ml-1">Your Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-sm sm:text-base"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-zinc-500 uppercase tracking-wider ml-1">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-sm sm:text-base"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-bold text-zinc-500 uppercase tracking-wider ml-1">Your Message</label>
                      <textarea 
                        required
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none text-sm sm:text-base"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="btn-primary w-full justify-center py-4 sm:py-5 group cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
