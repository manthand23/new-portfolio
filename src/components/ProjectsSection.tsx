import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Multimodal Video Analyzer",
      type: "Personal Project",
      duration: "~30 hours",
      date: "June 2025",
      description: "Built a video analysis app using GPT-4o, Gemini Vision, Whisper, and Milvus to enable chat and semantic search over videos up to 4 hours long.",
      highlights: [
        "Engineered timestamp alignment logic with 98% accuracy using ASR offsets and scene-change detection",
        "Achieved 95% accuracy in visual content search with CLIP-based embeddings and batched vector queries",
        "Designed a chatbot interface with timestamped citations, enabling users to quickly summarize content and ask detailed, context-aware questions about any part of the video"
      ],
      githubUrl: "https://github.com/manthand23/multimodal-video-analysis",
      technologies: ["Python", "GPT-4o", "Gemini Vision", "Whisper", "Milvus", "CLIP"]
    },
    {
      title: "Property Recommendation System",
      type: "Team Project",
      duration: "~40 hours",
      date: "May 2025",
      description: "Developed a Python-based, notebook-integrated app to recommend top real estate comparables using NLP, structured data pipelines, and custom-trained XGBoost models.",
      highlights: [
        "Standardized infrastructure using modular RESTful API design in Python (FastAPI), and deployed Dockerized backend and TypeScript-based React frontend services",
        "Built responsive TypeScript interfaces and optimized frontend state management for seamless user interaction and data visualization",
        "Improved data parsing accuracy by 32% through pandas-powered preprocessing, regex-based field extraction, and schema validation utilities"
      ],
      githubUrl: "https://github.com/manthand23/property-recommendation-system",
      technologies: ["Python", "FastAPI", "TypeScript", "React", "XGBoost", "Docker", "Pandas"]
    },
    {
      title: "AI Voice Assistant",
      type: "Personal Project",
      duration: "~30 hours",
      date: "May 2025",
      description: "Engineered a real-time AI voice assistant using TypeScript and Vite, reducing command response latency by ~30% through efficient frontend bundling and optimization.",
      highlights: [
        "Deployed OpenAI's GPT-3.5 API to enable natural language understanding, successfully handling over 150+ unique user queries across testing scenarios",
        "Leveraged ElevenLabs API for high-quality, lifelike text-to-speech output, increasing user engagement and command completion rate by an estimated 40%",
        "Crafted a fully responsive interface with Tailwind CSS, delivering smooth performance across devices and maintaining 60 FPS rendering in modern browsers"
      ],
      githubUrl: "https://github.com/manthand23/aivoiceassistant",
      technologies: ["TypeScript", "Vite", "OpenAI API", "ElevenLabs", "Tailwind CSS"]
    },
    {
      title: "WorkoutAI",
      type: "Team Project",
      duration: "~24 hours",
      date: "Aug 2023",
      description: "Created an AI-powered workout trainer as a React web application to provide real-time feedback on exercise form using image classification.",
      highlights: [
        "Trained a TensorFlow CNN model on a dataset of 200+ images, achieving 92% accuracy in detecting exercise posture",
        "Deployed the AI model to a React-based front-end interface, delivering real-time feedback to users and laying the foundation for a mobile application"
      ],
      githubUrl: "https://github.com/manthand23/Workout-AI",
      technologies: ["React", "TensorFlow", "CNN", "Python", "Image Classification"]
    },
    {
      title: "Anesthesia Pocket Guide",
      type: "Team Project",
      duration: "~70 hours",
      date: "Nov 2022 - Mar 2023",
      description: "Developed a mobile application to help medical students grasp key anesthesia concepts through visuals and interactive quizzes.",
      highlights: [
        "Integrated 5 essential calculators frequently used by anesthetists, increasing workplace productivity",
        "Conducted a user study with 30 medical students, demonstrating a 15% efficiency improvement in day-to-day tasks"
      ],
      githubUrl: "https://github.com/manthand23/anesthesia-app",
      technologies: ["Mobile Development", "UI/UX", "Medical Software", "User Research"]
    }
  ];

  const getProjectTypeColor = (type: string) => {
    return type === "Personal Project" ? "bg-primary text-primary-foreground" : "bg-lavender text-white";
  };

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI, machine learning, and full-stack development
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lavender hover:shadow-glow transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
                      >
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={getProjectTypeColor(project.type)}>
                        {project.type}
                      </Badge>
                      <Badge variant="outline" className="bg-card border-border">
                        {project.duration}
                      </Badge>
                      <Badge variant="outline" className="bg-card border-border">
                        {project.date}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div 
                      key={highlightIndex}
                      className="flex items-start gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + highlightIndex * 0.05}s` }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-lavender mt-2 flex-shrink-0"></span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors animate-fade-in-left"
                      style={{ animationDelay: `${index * 0.1 + techIndex * 0.02}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;