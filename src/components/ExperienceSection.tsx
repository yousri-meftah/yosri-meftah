import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Award, MapPin, Calendar, ChevronRight, Flag } from 'lucide-react';
import { profile } from '@/data/profile';
import { vulnerabilities } from '@/data/vulnerabilities';

interface Experience {
  id: number;
  type: 'work' | 'education' | 'achievement';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    type: 'work',
    title: profile.role,
    company: "Self-Hosted Infrastructure",
    location: "Remote / Homelab",
    period: "Ongoing",
    description: profile.bio.replace(/\s+/g, ' ').trim(),
    highlights: [
      "Automation & self-hosting",
      "Containerization & reverse proxy",
      "Monitoring, backups, and recovery",
    ],
  },
  {
    id: 2,
    type: 'achievement',
    title: "Homelab: 20+ Production Services",
    company: "Personal Homelab",
    location: "Self-Hosted",
    period: "Ongoing",
    description: profile.longBio.split('\n')[0].replace(/\s+/g, ' ').trim(),
    highlights: [
      "SSL automation & access control",
      "Observability with metrics & dashboards",
      "Disaster recovery workflows",
    ],
  },
  {
    id: 3,
    type: 'achievement',
    title: "Security Research & Vulnerability Reports",
    company: "Independent",
    location: "Responsible Disclosure",
    period: "Aug 2024 – Dec 2024",
    description: "Identified and reported real-world vulnerabilities across web and cloud systems.",
    highlights: vulnerabilities.slice(0, 5).map((vuln) => `${vuln.type} — ${vuln.title}`),
  },
];

const iconMap = {
  work: Briefcase,
  achievement: Award,
};

const colorMap = {
  work: 'primary',
  education: 'secondary',
  achievement: 'accent',
} as const;

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 overflow-hidden" ref={containerRef}>
      
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6">
            <Flag className="w-4 h-4 text-accent" />
            <span className="font-display text-xs tracking-widest text-muted-foreground">RACE HISTORY</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">MY </span>
            <span className="text-gradient-neon">JOURNEY</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every checkpoint in my career has shaped who I am as a developer today.
          </p>
        </motion.div>

        
        <div className="relative max-w-4xl mx-auto">
          
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-border">
            
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-secondary to-accent"
              style={{ height: lineHeight }}
            />
          </div>

          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.type];
              const color = colorMap[exp.type];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        border-2 bg-background
                        ${color === 'primary' ? 'border-primary glow-primary' : ''}
                        ${color === 'secondary' ? 'border-secondary glow-secondary' : ''}
                        ${color === 'accent' ? 'border-accent glow-accent' : ''}
                      `}
                    >
                      <Icon className={`w-4 h-4 ${color === 'primary' ? 'text-primary' : color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
                    </motion.div>
                  </div>

                  
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`
                        relative p-6 bg-card rounded-xl border-2 transition-all duration-300
                        ${color === 'primary' ? 'border-primary/30 hover:border-primary hover:glow-primary' : ''}
                        ${color === 'secondary' ? 'border-secondary/30 hover:border-secondary hover:glow-secondary' : ''}
                        ${color === 'accent' ? 'border-accent/30 hover:border-accent hover:glow-accent' : ''}
                      `}
                    >
                      
                      <div 
                        className={`
                          absolute top-4 w-4 h-4 bg-card border-t-2 border-l-2 rotate-45
                          ${isLeft ? 'md:-right-2 md:border-r-2 md:border-l-0' : '-left-2'}
                          ${color === 'primary' ? 'border-primary/30' : ''}
                          ${color === 'secondary' ? 'border-secondary/30' : ''}
                          ${color === 'accent' ? 'border-accent/30' : ''}
                          hidden md:block
                        `}
                      />

                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="w-3 h-3" />
                        <span className="font-display tracking-wider">{exp.period}</span>
                      </div>

                      
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>

                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className={color === 'primary' ? 'text-primary' : color === 'secondary' ? 'text-secondary' : 'text-accent'}>
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                          >
                            <ChevronRight className="w-3 h-3" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-12 flex justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center glow-primary">
              <Flag className="w-6 h-6 text-primary-foreground" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
