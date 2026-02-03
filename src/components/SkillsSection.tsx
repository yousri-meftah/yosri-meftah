import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Cpu, Database, Cloud, Terminal, Wrench, Network, Boxes } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  category: 'frontend' | 'backend' | 'tools';
  color: 'primary' | 'secondary' | 'accent';
}

const skills: Skill[] = [
  { name: "Python & FastAPI", level: 88, icon: Zap, category: 'backend', color: 'secondary' },
  { name: "Spring Boot & Java", level: 80, icon: Cpu, category: 'backend', color: 'secondary' },
  { name: "PostgreSQL & SQL", level: 84, icon: Database, category: 'backend', color: 'secondary' },
  { name: "Docker & Kubernetes", level: 86, icon: Boxes, category: 'tools', color: 'accent' },
  { name: "Linux & VPS Admin", level: 82, icon: Terminal, category: 'tools', color: 'accent' },
  { name: "Nginx & Microservices", level: 83, icon: Network, category: 'tools', color: 'accent' },
  { name: "React & TypeScript", level: 74, icon: Shield, category: 'frontend', color: 'primary' },
  { name: "Git & CI/CD (Jenkins)", level: 78, icon: Wrench, category: 'tools', color: 'accent' },
  { name: "Keycloak & Security", level: 76, icon: Cloud, category: 'tools', color: 'accent' },
];

const colorClasses = {
  primary: {
    bar: 'bg-gradient-to-r from-primary to-primary/70',
    glow: 'shadow-[0_0_20px_hsl(185_100%_50%_/_0.4)]',
    text: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
  secondary: {
    bar: 'bg-gradient-to-r from-secondary to-secondary/70',
    glow: 'shadow-[0_0_20px_hsl(320_100%_60%_/_0.4)]',
    text: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/30',
  },
  accent: {
    bar: 'bg-gradient-to-r from-accent to-accent/70',
    glow: 'shadow-[0_0_20px_hsl(45_100%_55%_/_0.4)]',
    text: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
};

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const colors = colorClasses[skill.color];
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className={`relative p-4 rounded-lg border ${colors.border} ${colors.bg} transition-all duration-300 hover:scale-[1.02]`}>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${colors.bg} ${colors.border} border`}>
              <Icon className={`w-4 h-4 ${colors.text}`} />
            </div>
            <span className="font-display text-sm text-foreground tracking-wide">{skill.name}</span>
          </div>
          <span className={`font-display text-lg font-bold ${colors.text}`}>
            {isInView ? skill.level : 0}%
          </span>
        </div>

        
        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
          
          <div className="absolute inset-0 flex">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex-1 border-r border-background/30 last:border-r-0" />
            ))}
          </div>
          
          
          <motion.div
            className={`absolute left-0 top-0 bottom-0 rounded-full ${colors.bar} ${colors.glow}`}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
          >
            
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </div>

        
        <div className="flex justify-between mt-1">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark} className="text-[10px] font-display text-muted-foreground">
              {mark}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const categories = [
    { id: 'frontend', label: 'DELIVERY', color: 'primary' as const },
    { id: 'backend', label: 'BACKEND', color: 'secondary' as const },
    { id: 'tools', label: 'INFRA & OPS', color: 'accent' as const },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      
      <div className="absolute inset-0 racing-stripes opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="font-display text-xs tracking-widest text-muted-foreground">POWER STATS</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">MY </span>
            <span className="text-gradient-neon">SKILLS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every skill leveled up through countless hours of practice and real-world battles.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
        >
          {categories.map((cat) => {
            const catSkills = skills.filter(s => s.category === cat.id);
            const avgLevel = Math.round(catSkills.reduce((acc, s) => acc + s.level, 0) / catSkills.length);
            const colors = colorClasses[cat.color];
            
            return (
              <div key={cat.id} className={`text-center p-4 rounded-lg border ${colors.border} ${colors.bg}`}>
                <div className={`font-display text-3xl font-bold ${colors.text} mb-1`}>
                  {avgLevel}%
                </div>
                <div className="font-display text-xs text-muted-foreground tracking-wider">
                  {cat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {categories.map((cat) => {
            const colors = colorClasses[cat.color];
            return (
              <div key={cat.id} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${colors.bar}`} />
                <span className="text-sm text-muted-foreground font-display">{cat.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
