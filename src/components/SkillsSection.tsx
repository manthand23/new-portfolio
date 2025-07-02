import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: "Proficient", years: "7yrs" },
        { name: "Java", level: "Proficient", years: "6yrs" },
        { name: "JavaScript", level: "Proficient", years: "5yrs" },
        { name: "TypeScript", level: "Proficient", years: "3yrs" },
        { name: "C/C++", level: "Proficient", years: "3yrs" },
        { name: "PHP", level: "Proficient", years: "3yrs" },
        { name: "SQL", level: "Proficient", years: "3yrs" },
        { name: "Swift", level: "Intermediate", years: "2yrs" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "🛠️",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "TensorFlow", level: "Proficient" },
        { name: "Langchain", level: "Proficient" },
        { name: "Django", level: "Proficient" },
        { name: "Pandas", level: "Advanced" },
        { name: "NumPy", level: "Advanced" },
        { name: "Bootstrap", level: "Proficient" },
        { name: "Angular", level: "Intermediate" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Pinecone", level: "Proficient" },
        { name: "Redis", level: "Proficient" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "⚙️",
      skills: [
        { name: "AWS", level: "Advanced" },
        { name: "Azure", level: "Proficient" },
        { name: "Docker", level: "Advanced" },
        { name: "Kubernetes", level: "Proficient" },
        { name: "Jenkins", level: "Proficient" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Git", level: "Advanced" },
        { name: "Agile", level: "Advanced" },
        { name: "CI/CD", level: "Proficient" },
        { name: "GCP", level: "Proficient" },
        { name: "JupyterNotebook", level: "Advanced" },
        { name: "Bash", level: "Proficient" },
        { name: "Jira", level: "Proficient" },
        { name: "Google Cloud Run", level: "Proficient" },
        { name: "Anaconda", level: "Advanced" },
        { name: "Nebari", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary text-primary-foreground";
      case "Proficient":
        return "bg-lavender text-white";
      case "Intermediate":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lavender hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="animate-fade-in-left"
                      style={{ animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                    >
                      <Badge 
                        variant="secondary" 
                        className={`${getLevelColor(skill.level)} hover:scale-105 transition-transform duration-200 cursor-default`}
                      >
                        {skill.name}
                        {skill.years && (
                          <span className="ml-1 text-xs opacity-80">({skill.years})</span>
                        )}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 inline-block animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Skill Level Legend</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-primary text-primary-foreground">Advanced</Badge>
                <Badge className="bg-lavender text-white">Proficient</Badge>
                <Badge className="bg-secondary text-secondary-foreground">Intermediate</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;