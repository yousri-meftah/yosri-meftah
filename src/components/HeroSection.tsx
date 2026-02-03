import { motion } from 'framer-motion';
import { ChevronDown, Gamepad2, Code, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { applications } from '@/data/applications';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const [firstName, ...restName] = profile.name.split(' ');
  const lastName = restName.join(' ');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              y: [null, Math.random() * -500],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute h-[2px] w-40 bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{
            x: ['-10%', '110%'],
            y: ['20%', '30%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute h-[2px] w-60 bg-gradient-to-r from-transparent via-secondary to-transparent"
          animate={{
            x: ['110%', '-10%'],
            y: ['70%', '60%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute h-[2px] w-32 bg-gradient-to-r from-transparent via-accent to-transparent"
          animate={{
            x: ['-10%', '110%'],
            y: ['50%', '45%'],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
      </div>

      
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-secondary" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-secondary" />

          
          <motion.div 
            className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-display text-primary"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-2 h-2 bg-success rounded-full" />
            SYSTEM ONLINE
          </motion.div>

          <div className="p-8 md:p-12">
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-display text-sm md:text-base tracking-[0.3em] mb-4"
            >
              [ PLAYER_01 CONNECTED ]
            </motion.p>

            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-foreground">{firstName?.toUpperCase()}</span>
              <span className="text-gradient-neon ml-4">{lastName.toUpperCase()}</span>
            </motion.h1>

            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary" />
              <p className="font-display text-lg md:text-xl text-muted-foreground tracking-wide">
                {profile.role.toUpperCase()}
              </p>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-secondary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mx-auto max-w-4xl mb-8"
            >
              <div className="border-2 border-accent/70 bg-accent/10 text-foreground rounded-xl px-6 py-4 font-display text-base md:text-lg tracking-wide">
                NOTE: This frontend does not reflect my frontend skills. It was made with Lovable. If you're looking for a frontend dev, I may not be the best fit.
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10"
            >
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                <span className="font-display text-sm text-muted-foreground">
                  <span className="text-primary text-lg font-bold">{projects.length}</span> PROJECTS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-secondary" />
                <span className="font-display text-sm text-muted-foreground">
                  <span className="text-secondary text-lg font-bold">{applications.length}+</span> SERVICES
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-accent" />
                <span className="font-display text-sm text-muted-foreground">
                  <span className="text-accent text-lg font-bold">∞</span> AUTOMATION
                </span>
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                variant="arcade" 
                size="lg"
                onClick={scrollToProjects}
                className="group"
              >
                <span className="relative z-10">START GAME</span>
                <Gamepad2 className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button 
                variant="arcadeOutline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                CONTACT ME
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-display tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
