import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

const Footer = ({ data }) => {
  const iconMap = {
    GitHubIcon: <GitHubIcon size={20} />,
    LinkedInIcon: <LinkedInIcon size={20} />,
    Mail: <Mail size={20} />
  };

  const socialLinks = data.socialLinks.map(link => ({ ...link, icon: iconMap[link.icon] }));

  return (
    <footer className="py-8 bg-transparent relative overflow-hidden">
      {/* Top Divider Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200 dark:bg-white/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 w-full text-gray-500 dark:text-zinc-500 text-xs sm:text-sm">
          {/* Left: Copyright */}
          <div className="order-2 md:order-1 flex-1 text-center md:text-left">
            <span>© {new Date().getFullYear()} Ahmad Hassan. All Rights Reserved.</span>
          </div>

          {/* Center: Designed & Developed */}
          <div className="order-1 md:order-2 flex-1 text-center font-medium">
            Designed & Developed by <span className="text-gray-900 dark:text-white font-semibold">Ahmad Hassan</span>
          </div>

          {/* Right: Social Icons */}
          <div className="order-3 flex-1 flex justify-center md:justify-end gap-5">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
    </footer>
  );
};

export default Footer;
