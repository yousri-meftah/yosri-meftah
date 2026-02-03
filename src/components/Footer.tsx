import { motion } from 'framer-motion';
import { Heart, Trophy, Coffee, Code } from 'lucide-react';
import { profile } from '@/data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
            >
              <Trophy className="w-5 h-5 text-primary-foreground" />
            </motion.div>
            <div>
              <div className="font-display text-sm text-foreground tracking-wider">
                {profile.name.toUpperCase()}
              </div>
              <div className="text-xs text-muted-foreground">© {currentYear} All rights reserved</div>
            </div>
          </div>

          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              <span className="font-display text-xs tracking-wider">BUILT WITH REACT</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-accent" />
              <span className="font-display text-xs tracking-wider">∞ COFFEE</span>
            </div>
          </div>

          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-display text-xs tracking-wider">MADE WITH</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-secondary fill-secondary" />
            </motion.div>
            <span className="font-display text-xs tracking-wider">& PASSION</span>
          </div>
        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground/50 font-display tracking-[0.3em]">
            ↑ ↑ ↓ ↓ ← → ← → B A
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
