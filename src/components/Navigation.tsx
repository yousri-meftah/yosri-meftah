import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, Zap, Clock, Mail, Trophy } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

const iconMap = {
  home: Home,
  briefcase: Briefcase,
  zap: Zap,
  clock: Clock,
  mail: Mail,
} as const;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = portfolio.navigation.items.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(portfolio.navigation.items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-muted">
        <motion.div
          className="h-full bg-gradient-neon"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="relative">
          
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border" />
          
          <div className="relative flex flex-col gap-6">
            {portfolio.navigation.items.map((item, index) => {
              const Icon = iconMap[item.icon];
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative flex items-center gap-3"
                  whileHover={{ x: -5 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  
                  <motion.span
                    className={`
                      absolute right-full mr-4 px-3 py-1 rounded font-display text-xs tracking-wider
                      opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap
                      ${isActive ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground'}
                    `}
                  >
                    {item.label}
                  </motion.span>

                  
                  <div
                    className={`
                      relative w-10 h-10 rounded-lg flex items-center justify-center
                      border transition-all duration-300
                      ${isActive 
                        ? 'bg-primary border-primary glow-primary' 
                        : 'bg-card border-border hover:border-primary/50'}
                    `}
                  >
                    <Icon 
                      className={`w-4 h-4 transition-colors ${isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'}`} 
                    />
                    
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-lg border-2 border-primary"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        
        <div className="mt-8 text-center">
          <div className="text-xs font-display text-muted-foreground tracking-wider mb-1">LEVEL</div>
          <div className="font-display text-2xl text-primary text-glow-primary">
            {portfolio.navigation.items.findIndex((item) => item.id === activeSection) + 1}
          </div>
        </div>
      </nav>

      
      <div className="fixed top-4 left-4 right-4 z-50 lg:hidden">
        <div className="flex items-center justify-between">
          
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Trophy className="w-6 h-6 text-primary" />
            <span className="font-display text-sm text-foreground">{portfolio.navigation.mobileLabel}</span>
          </motion.div>

          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-lg border border-border rounded-lg overflow-hidden"
            >
              {portfolio.navigation.items.map((item, index) => {
                const Icon = iconMap[item.icon];
                const isActive = activeSection === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full flex items-center gap-4 px-6 py-4 transition-colors
                      ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'}
                      ${index !== portfolio.navigation.items.length - 1 ? 'border-b border-border' : ''}
                    `}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className="font-display text-sm tracking-wider">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
