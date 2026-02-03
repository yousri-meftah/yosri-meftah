import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [isEnabled, setIsEnabled] = useState(true);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const cursorX = useSpring(x, { stiffness: 400, damping: 28, mass: 0.5 });
  const cursorY = useSpring(y, { stiffness: 400, damping: 28, mass: 0.5 });
  const glowSpringX = useSpring(glowX, { stiffness: 140, damping: 18, mass: 0.9 });
  const glowSpringY = useSpring(glowY, { stiffness: 140, damping: 18, mass: 0.9 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updateEnabled = () => setIsEnabled(mediaQuery.matches);
    updateEnabled();
    mediaQuery.addEventListener('change', updateEnabled);

    const updatePosition = (e: MouseEvent) => {
      const nextX = e.clientX - 16;
      const nextY = e.clientY - 16;
      x.set(nextX);
      y.set(nextY);
      glowX.set(e.clientX - 80);
      glowY.set(e.clientY - 80);
    };

    const updateCursorType = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isClickable = !!target.closest(
        'a, button, [role="button"], input, textarea, select, [onclick]'
      );
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursorType);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      mediaQuery.removeEventListener('change', updateEnabled);
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursorType);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [glowX, glowY, x, y]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          scale: isClicking ? 0.8 : isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          x: prefersReducedMotion ? x : cursorX,
          y: prefersReducedMotion ? y : cursorY,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-150 ${isPointer ? 'drop-shadow-[0_0_8px_hsl(320,100%,60%)]' : 'drop-shadow-[0_0_8px_hsl(185,100%,50%)]'}`}
        >
          
          <circle
            cx="16"
            cy="16"
            r="12"
            stroke={isPointer ? "hsl(320, 100%, 60%)" : "hsl(185, 100%, 50%)"}
            strokeWidth="2"
            fill="none"
            className="transition-colors duration-150"
          />
          
          <circle
            cx="16"
            cy="16"
            r="3"
            fill={isPointer ? "hsl(320, 100%, 60%)" : "hsl(185, 100%, 50%)"}
            className="transition-colors duration-150"
          />
          
          <line x1="16" y1="0" x2="16" y2="8" stroke={isPointer ? "hsl(320, 100%, 60%)" : "hsl(185, 100%, 50%)"} strokeWidth="2" className="transition-colors duration-150" />
          <line x1="16" y1="24" x2="16" y2="32" stroke={isPointer ? "hsl(320, 100%, 60%)" : "hsl(185, 100%, 50%)"} strokeWidth="2" className="transition-colors duration-150" />
          <line x1="0" y1="16" x2="8" y2="16" stroke={isPointer ? "hsl(320, 100%, 60%)" : "hsl(185, 100%, 50%)"} strokeWidth="2" className="transition-colors duration-150" />
          <line x1="24" y1="16" x2="32" y2="16" stroke={isPointer ? "hsl(320, 100%, 60%)" : "hsl(185, 100%, 50%)"} strokeWidth="2" className="transition-colors duration-150" />
        </svg>
      </motion.div>

      
      <motion.div
        className="fixed pointer-events-none z-[9997] w-40 h-40 rounded-full"
        style={{
          x: prefersReducedMotion ? glowX : glowSpringX,
          y: prefersReducedMotion ? glowY : glowSpringY,
          background: isPointer 
            ? 'radial-gradient(circle, hsl(320 100% 60% / 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, hsl(185 100% 50% / 0.1) 0%, transparent 70%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
