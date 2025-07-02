import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
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
                  Hello!
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    📍 Based in Canada | Open to new grad and entry level Software Engineering opportunities in the United States
                  </p>
                  <p>
                    Currently, I'm a <span className="text-primary font-semibold">Software Engineering Resident at Headstarter</span>, where I design scalable full-stack and AI pipelines. My recent work involves building multiple machine learning and web applications using Python, C++, and TypeScript, optimizing for speed, modularity, and real-world deployment. I've led the design of multithreaded systems using POSIX and Docker-based CI/CD pipelines to support large-scale LLM tasks.
                  </p>
                  <p>
                    Previously, I was a <span className="text-primary font-semibold">Software Engineering Intern at RadicalAI</span>, where I developed a React-based frontend and Node.js backend for an AI chatbot that increased engagement by 40%. I also contributed to Kai, an open-source AI Teaching Assistant, and built internal tools with C++ for high-performance use cases.
                  </p>
                  <p>
                    Across my roles—including at <span className="text-lavender font-semibold">ScaleAI</span>, where I wrote thread-safe daemons and refactored data infrastructure—I've learned to ship production-ready code across diverse stacks and collaborate in fast-paced Agile environments. I bring a strong foundation in Python, JavaScript/TypeScript, C++, React.js, Node.js, and cloud platforms like AWS and GCP.
                  </p>
                  <p>
                    I'm open to opportunities in AI or full-stack engineering, especially in teams where I can continue learning, contribute to cutting-edge projects, and solve tough technical problems. Let's connect!
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