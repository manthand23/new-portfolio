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
    <section className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-lavender/20 blur-xl animate-bounce-gentle"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-accent/20 blur-2xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-primary/30 blur-lg animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Manthan Desai
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build scalable AI applications that optimize performance & user experience
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