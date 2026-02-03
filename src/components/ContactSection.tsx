import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { profile } from '@/data/profile';

const socialLinks = [
  profile.social.github ? { icon: Github, href: profile.social.github, label: 'GitHub' } : null,
  profile.social.linkedin ? { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' } : null,
].filter(Boolean) as Array<{ icon: typeof Github; href: string; label: string }>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL as string | undefined;
    if (!webhookUrl) {
      toast({
        title: "Webhook not configured",
        description: "Set VITE_N8N_WEBHOOK_URL in your environment to enable contact form delivery.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: 'portfolio-contact-form',
          sentAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Message failed",
        description: "Something went wrong sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      
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
            <Gamepad2 className="w-4 h-4 text-primary" />
            <span className="font-display text-xs tracking-widest text-muted-foreground">MULTIPLAYER MODE</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">LET'S </span>
            <span className="text-gradient-neon">CONNECT</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to team up? Send me a message and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-primary transition-shadow">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-xs text-muted-foreground tracking-wider mb-1">EMAIL</div>
                  <a href={`mailto:${profile.social.email}`} className="text-foreground hover:text-primary transition-colors">
                    {profile.social.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-secondary/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:glow-secondary transition-shadow">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-display text-xs text-muted-foreground tracking-wider mb-1">FOCUS</div>
                  <span className="text-foreground">{profile.tagline}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:glow-accent transition-shadow">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-display text-xs text-muted-foreground tracking-wider mb-1">INTERESTS</div>
                  <span className="text-foreground">
                    {profile.interests.slice(0, 2).join(' · ')}
                  </span>
                </div>
              </div>
            </div>

            
            <div>
              <div className="font-display text-xs text-muted-foreground tracking-wider mb-4">FIND ME ON</div>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            
            <div className="p-4 bg-muted/50 rounded-xl border border-dashed border-border">
              <p className="text-xs text-muted-foreground font-display tracking-wider">
                💡 PRO TIP: Press the Konami code for a surprise...
              </p>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative p-6 bg-card border-2 border-border rounded-xl">
                
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-secondary/50" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-secondary/50" />

                <div className="space-y-4">
                  
                  <div>
                    <label className="font-display text-xs text-muted-foreground tracking-wider mb-2 block">
                      YOUR NAME
                    </label>
                    <Input
                      type="text"
                      placeholder="Player One"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-muted border-border focus:border-primary focus:ring-primary/20 font-body"
                    />
                  </div>

                  
                  <div>
                    <label className="font-display text-xs text-muted-foreground tracking-wider mb-2 block">
                      YOUR EMAIL
                    </label>
                    <Input
                      type="email"
                      placeholder="player@game.dev"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-muted border-border focus:border-primary focus:ring-primary/20 font-body"
                    />
                  </div>

                  
                  <div>
                    <label className="font-display text-xs text-muted-foreground tracking-wider mb-2 block">
                      YOUR MESSAGE
                    </label>
                    <Textarea
                      placeholder="Let's build something awesome together..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-muted border-border focus:border-primary focus:ring-primary/20 font-body resize-none"
                    />
                  </div>
                </div>
              </div>

              
              <Button
                type="submit"
                variant="arcade"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    SENDING...
                  </>
                ) : (
                  <>
                    SEND MESSAGE
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
