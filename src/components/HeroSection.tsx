import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/manthand23",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/manthand/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:manthan.d10@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-secondary relative overflow-hidden">
      {/* Enhanced Background decoration with floating elements */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-95"></div>
      
      {/* AI-themed floating elements with neural network inspired animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-bounce-gentle"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-lavender/20 blur-2xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-accent/30 blur-lg animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-primary/15 blur-md animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-lavender/10 blur-lg animate-bounce-gentle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-10 right-1/2 w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-bounce-gentle" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-10 left-1/2 w-28 h-28 rounded-full bg-primary/15 blur-2xl animate-bounce-gentle" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* AI Neural Network Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural nodes */}
        <div className="absolute top-32 right-20 w-3 h-3 bg-primary/60 rounded-full animate-glow-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-40 left-32 w-4 h-4 bg-lavender/80 rounded-full animate-glow-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-accent/70 rounded-full animate-glow-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-1/3 left-20 w-3 h-3 bg-primary/50 rounded-full animate-glow-pulse" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-lavender/60 rounded-full animate-glow-pulse" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-accent/80 rounded-full animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/2 left-10 w-2 h-2 bg-primary/70 rounded-full animate-glow-pulse" style={{ animationDelay: '2.8s' }}></div>
        
        {/* Neural connections */}
        <div className="absolute top-32 right-20 w-16 h-0.5 bg-gradient-to-r from-primary/30 to-transparent rotate-45 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-32 w-12 h-0.5 bg-gradient-to-r from-lavender/40 to-transparent -rotate-12 animate-glow-pulse" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-0.5 bg-gradient-to-r from-accent/30 to-transparent rotate-12 animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 left-20 w-14 h-0.5 bg-gradient-to-r from-primary/40 to-transparent -rotate-45 animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Code-like elements */}
        <div className="absolute top-20 left-1/2 text-primary/30 text-xs font-mono animate-glow-pulse" style={{ animationDelay: '1.6s' }}>{'{ AI }'}</div>
        <div className="absolute bottom-20 right-1/3 text-lavender/40 text-xs font-mono animate-glow-pulse" style={{ animationDelay: '2.4s' }}>{'< ML />'}</div>
        <div className="absolute top-1/4 left-1/4 text-accent/30 text-xs font-mono animate-glow-pulse" style={{ animationDelay: '3.2s' }}>{'def()'}</div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight relative animate-glow-pulse">
              <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-primary inline-block">
                Manthan Desai
              </span>
              <div className="absolute -inset-1 bg-gradient-primary opacity-30 blur-lg rounded-lg animate-glow-pulse"></div>
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl text-foreground/90 mb-8 font-light animate-fade-in" style={{ animationDelay: '2s' }}>
            <span className="animate-typing-delayed overflow-hidden whitespace-nowrap border-r-4 border-primary/50 inline-block">
              Software Engineer
            </span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '4s' }}>
            <span className="animate-typing-delayed-2 overflow-hidden whitespace-nowrap inline-block">
              I build scalable AI applications that optimize performance & user experience
            </span>
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.label}
                variant="outline"
                size="lg"
                asChild
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              </Button>
            );
          })}
        </div>
        
        <div className="mt-16 animate-bounce-gentle">
          <svg
            className="w-8 h-8 text-white/60 mx-auto cursor-pointer hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;