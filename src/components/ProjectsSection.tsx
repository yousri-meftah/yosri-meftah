import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Gamepad, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolio } from '@/data/portfolio';

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6">
            <Gamepad className="w-4 h-4 text-primary" />
            <span className="font-display text-xs tracking-widest text-muted-foreground">PROJECTS & HOMELAB</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">MY </span>
            <span className="text-gradient-neon">PROJECTS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Backend, DevOps, and self-hosted systems I build and maintain.
          </p>
        </motion.div>

        
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Gamepad className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-display text-xl md:text-2xl text-foreground tracking-wide">
            FEATURED & PERSONAL PROJECTS
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div
                className={`
                  relative bg-card border-2 rounded-xl p-6 h-full
                  transition-all duration-300 cursor-pointer
                  ${hoveredId === project.id 
                    ? 'border-primary glow-primary scale-[1.02]' 
                    : 'border-border hover:border-primary/50'}
                `}
              >
                
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-secondary/30 group-hover:border-secondary transition-colors" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-secondary/30 group-hover:border-secondary transition-colors" />

                
                {project.featured && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-display border text-primary border-primary bg-primary/10 mb-4">
                    FEATURED
                  </div>
                )}

                {!project.featured && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-display border text-muted-foreground border-border bg-muted/40 mb-4">
                    PROJECT
                  </div>
                )}

                
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  📦
                </div>

                
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                
                <div className="flex items-center gap-2 mt-auto">
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <a href={project.githubUrl} aria-label={`${project.title} GitHub`}>
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <a href={project.liveUrl} aria-label={`${project.title} Live link`}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>

                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none rounded-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>

        
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center">
              <Server className="w-4 h-4 text-secondary" />
            </div>
            <h3 className="font-display text-xl md:text-2xl text-foreground tracking-wide">
              HOMELAB SERVICES
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.services.map((app, index) => (
              <motion.a
                key={app.id}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative bg-card border-2 rounded-xl p-6 h-full border-border hover:border-secondary/50 transition-all duration-300">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-secondary/30 group-hover:border-secondary transition-colors" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-secondary/30 group-hover:border-secondary transition-colors" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-secondary/30 group-hover:border-secondary transition-colors" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-secondary/30 group-hover:border-secondary transition-colors" />

                  <div className="text-4xl mb-4">{app.icon}</div>

                  <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {app.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {app.description}
                  </p>

                  {app.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-2 mt-auto">
                    <div className="inline-flex items-center gap-1 text-xs text-secondary font-display opacity-0 group-hover:opacity-100 transition-opacity">
                      OPEN <ExternalLink className="w-3 h-3" />
                    </div>
                    {app.note && (
                      <span className="ml-auto text-xs text-muted-foreground font-display">
                        {app.note}
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="arcadeOutline" size="lg">
            SEE MORE
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
