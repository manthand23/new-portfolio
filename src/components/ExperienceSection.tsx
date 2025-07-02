import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineering Resident",
      company: "Headstarter",
      location: "Remote, Canada",
      period: "May 2025 - Present",
      highlights: [
        "Building 14+ machine learning, AI-engineering and full-stack projects in fast-paced software team environments",
        "Developing 5+ neural networks in Python & C++, 11 apps in TypeScript on AWS/Vercel with dev and production environments",
        "Implementing LLM-chaining, hyperparameter tuning, fine tuning on 10+ LLM models controlling for latency & accuracy",
        "Employing POSIX threading and mutex control in Python backends for controlled parallel execution of LLM tasks",
        "Designing AI pipelines deployed on Linux servers, integrating CI/CD via Docker and Jenkins"
      ],
      color: "primary"
    },
    {
      title: "Software Engineering Intern",
      company: "RadicalAI",
      location: "Remote, Canada", 
      period: "June 2024 - Aug 2024",
      highlights: [
        "Built an intuitive frontend chat application using React.js and TypeScript, integrated with OpenAI's GPT-3.5 API, increasing platform user engagement by 40%",
        "Designed and deployed backend services for a chatbot with Node.js and MongoDB, enabling real-time communication, improving system reliability by 30%, and reducing latency by 25%",
        "Assisted in developing Kai, an open-source AI Teaching Assistant, improving instructional workflows and increasing educator productivity by 50%",
        "Built internal utilities leveraging C++ CLI wrappers for performance-sensitive routines",
        "Collaborated with diverse teams to deliver scalable, user-centric applications, leveraging Agile workflows and best practices"
      ],
      color: "lavender"
    },
    {
      title: "Software Engineer",
      company: "ScaleAI",
      location: "Remote, Canada",
      period: "Feb 2024 - Aug 2024", 
      highlights: [
        "Developed performance-critical prompt pipeline tools in Python and C++ using OOP for modular, reusable code",
        "Built multithreaded Python daemons for real-time log ingestion, increasing throughput by 60% with thread-safe design",
        "Wrote infrastructure test cases across backend modules, achieving over 70% coverage, and refactored legacy systems for improved data structure efficiency and algorithmic performance",
        "Collaborated on optimizing platform data pipelines running on Linux-based systems, debugging OS-level issues"
      ],
      color: "accent"
    },
    {
      title: "Business Systems Analyst Intern",
      company: "TD Securities",
      location: "Toronto, ON",
      period: "May 2022 - Aug 2022",
      highlights: [
        "Analyzed and reported on Key Risk Indicators (KRIs), visualizing trends and managing 40+ technology assets to ensure risk mitigation",
        "Facilitated discussions with technology asset owners, addressing application findings and driving the development of 50+ effective risk remediation plans",
        "Co-led Scrum meetings to train 30 technology asset owners on issue management processes and risk remediation workflows, improving team efficiency",
        "Collaborated with cross-functional teams to identify and resolve potential system risks, ensuring compliance with organizational standards",
        "Utilized tools such as Microsoft Office and Jira to streamline risk reporting, improve communication, and optimize workflows"
      ],
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-l-primary bg-primary/5";
      case "lavender":
        return "border-l-lavender bg-lavender/5";
      case "accent":
        return "border-l-accent bg-accent/5";
      case "secondary":
        return "border-l-secondary bg-secondary/5";
      default:
        return "border-l-primary bg-primary/5";
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My professional journey building innovative solutions across diverse tech environments
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`${getColorClasses(exp.color)} border-l-4 bg-card/50 backdrop-blur-sm border-border/50 shadow-lavender hover:shadow-glow transition-all duration-300 animate-fade-in-left`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="bg-card border-border">
                      {exp.period}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li 
                      key={highlightIndex}
                      className="flex items-start gap-3 text-muted-foreground animate-fade-in"
                      style={{ animationDelay: `${index * 0.2 + highlightIndex * 0.1}s` }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;