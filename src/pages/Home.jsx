import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useTheme } from '../contexts/ThemeContext';
import websiteData from '../data/websiteData.json';

const Home = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-dark text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar />
      <Hero data={websiteData.hero} />
      <About data={websiteData.about} />
      <Services data={websiteData.services} />
      <Skills data={websiteData.skills} />
      <Projects data={websiteData.projects} />
      <Contact data={websiteData.contact} />
      <Footer data={websiteData.footer} />
    </div>
  );
};

export default Home;
