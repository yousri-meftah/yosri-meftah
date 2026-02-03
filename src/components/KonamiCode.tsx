import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Sparkles, Trophy, Star } from 'lucide-react';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

const KonamiCode = () => {
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [isActivated, setIsActivated] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const newSequence = [...keySequence, e.code].slice(-10);
    setKeySequence(newSequence);

    if (newSequence.join(',') === KONAMI_CODE.join(',')) {
      setIsActivated(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [keySequence]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  rotate: 0,
                  scale: 0,
                }}
                animate={{
                  y: window.innerHeight + 100,
                  rotate: Math.random() * 720 - 360,
                  scale: [0, 1, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 0.5,
                  ease: "easeOut",
                }}
                className="absolute"
              >
                {i % 4 === 0 && <Star className="w-4 h-4 text-accent fill-accent" />}
                {i % 4 === 1 && <Sparkles className="w-4 h-4 text-primary" />}
                {i % 4 === 2 && <Trophy className="w-4 h-4 text-secondary" />}
                {i % 4 === 3 && <Gamepad2 className="w-4 h-4 text-success" />}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {isActivated && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="fixed bottom-24 right-6 z-[100] pointer-events-auto"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px hsl(45 100% 55% / 0.4)',
                  '0 0 40px hsl(45 100% 55% / 0.6)',
                  '0 0 20px hsl(45 100% 55% / 0.4)',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center gap-4 p-4 bg-card border-2 border-accent rounded-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <Trophy className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <div className="font-display text-xs text-accent tracking-wider mb-1">
                  🎮 ACHIEVEMENT UNLOCKED!
                </div>
                <div className="font-display text-sm text-foreground">
                  You discovered the secret code!
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  +1000 XP | True Gamer Badge
                </div>
              </div>
              <button
                onClick={() => setIsActivated(false)}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
      {keySequence.length > 0 && keySequence.length < 10 && !isActivated && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-[100]"
        >
          <div className="flex gap-1">
            {KONAMI_CODE.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i < keySequence.length ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default KonamiCode;
