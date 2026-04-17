import { motion } from 'framer-motion';
import { Award, Images, Mic2, Trophy, Video } from 'lucide-react';
import {
  highlightCards,
  highlightGallery,
  highlightStats,
  highlightVideo,
  type HighlightCard,
} from '@/data/highlights';

const colorClasses: Record<
  HighlightCard['color'],
  {
    border: string;
    bg: string;
    text: string;
    glow: string;
  }
> = {
  primary: {
    border: 'border-primary/30 hover:border-primary',
    bg: 'bg-primary/10',
    text: 'text-primary',
    glow: 'hover:glow-primary',
  },
  secondary: {
    border: 'border-secondary/30 hover:border-secondary',
    bg: 'bg-secondary/10',
    text: 'text-secondary',
    glow: 'hover:glow-secondary',
  },
  accent: {
    border: 'border-accent/30 hover:border-accent',
    bg: 'bg-accent/10',
    text: 'text-accent',
    glow: 'hover:glow-accent',
  },
};

const labelIcon = {
  Competition: Trophy,
  Presentation: Mic2,
} as const;

const HighlightsSection = () => {
  return (
    <section id="highlights" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 racing-stripes opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6">
            <Award className="w-4 h-4 text-accent" />
            <span className="font-display text-xs tracking-widest text-muted-foreground">
              WINS & TALKS
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">MY </span>
            <span className="text-gradient-gold">HIGHLIGHTS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Competition wins, technical presentations, and workshop moments from my journey outside the code editor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
        >
          {highlightStats.map((stat) => (
            <div
              key={stat.label}
              className="relative rounded-xl border border-accent/30 bg-accent/10 p-5 text-center overflow-hidden"
            >
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent/40" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent/40" />
              <div className="font-display text-4xl font-bold text-accent text-glow-accent mb-1">
                {stat.value}
              </div>
              <div className="font-display text-xs tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-8 items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlightCards.map((item, index) => {
              const colors = colorClasses[item.color];
              const Icon = labelIcon[item.label];

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative"
                >
                  <div
                    className={`relative h-full overflow-hidden rounded-xl border-2 bg-card transition-all duration-300 hover:scale-[1.02] ${colors.border} ${colors.glow}`}
                  >
                    <div className="absolute top-2 left-2 z-10 w-4 h-4 border-t-2 border-l-2 border-current opacity-40" />
                    <div className="absolute top-2 right-2 z-10 w-4 h-4 border-t-2 border-r-2 border-current opacity-40" />
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div
                        className={`inline-flex items-center gap-2 px-2 py-1 rounded text-xs font-display tracking-wider border mb-4 ${colors.bg} ${colors.text} ${colors.border}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {item.label.toUpperCase()}
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="space-y-6 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl border-2 border-primary/30 bg-card p-5 hover:border-primary transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">PUBLIC TALK</h3>
                  <p className="text-xs text-muted-foreground">Workshop video</p>
                </div>
              </div>
              <video
                className="w-full rounded-lg border border-border bg-background"
                controls
                muted
                preload="metadata"
                poster="/for_portfolio/workshop_backend1.jfif"
              >
                <source src={highlightVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-xl border-2 border-secondary/30 bg-card p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                  <Images className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">MORE MOMENTS</h3>
                  <p className="text-xs text-muted-foreground">Photos from talks and workshops</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {highlightGallery.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className="aspect-square w-full rounded-lg border border-border object-cover bg-muted"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
