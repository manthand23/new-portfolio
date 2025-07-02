import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lavender">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Welcome to my digital space!
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate <span className="text-primary font-semibold">recent Computer Science graduate</span> (Spring 2025) 
                    with a deep love for building innovative AI applications and scalable software solutions.
                  </p>
                  <p>
                    With over <span className="text-lavender font-semibold">7 years of Python experience</span> and expertise 
                    across multiple programming languages, I specialize in creating intelligent systems that bridge the gap 
                    between cutting-edge technology and real-world applications.
                  </p>
                  <p>
                    Currently working as a <span className="text-primary font-semibold">Software Engineering Resident at Headstarter</span>, 
                    where I'm building 14+ machine learning and AI engineering projects while developing neural networks and 
                    implementing advanced LLM techniques.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in-right">
            <Card className="bg-gradient-secondary border-border/50 shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  What I Bring
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      title: "Problem Solver",
                      description: "I thrive on tackling complex challenges with innovative, scalable solutions."
                    },
                    {
                      title: "Team Collaborator",
                      description: "Experienced in Agile environments, leading Scrum meetings and cross-functional teams."
                    },
                    {
                      title: "Continuous Learner",
                      description: "Always staying current with emerging technologies and best practices."
                    },
                    {
                      title: "Performance Focused",
                      description: "Dedicated to optimizing systems for maximum efficiency and user experience."
                    }
                  ].map((skill, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg bg-card/30 backdrop-blur-sm animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h4 className="font-semibold text-primary mb-2">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;