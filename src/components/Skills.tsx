import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Smartphone, Cpu, Code, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-primary",
      skills: [
        { name: "Flutter", level: 90, description: "Cross-platform mobile apps" },
        { name: "Dart", level: 85, description: "Flutter's primary language" },
        { name: "Firebase", level: 75, description: "Backend & authentication" },
        { name: "REST APIs", level: 80, description: "API integration" }
      ]
    },
    {
      title: "AI/ML & Data",
      icon: Cpu,
      color: "text-accent",
      skills: [
        { name: "Machine Learning", level: 75, description: "Model development & training" },
        { name: "TensorFlow Lite", level: 70, description: "Mobile ML deployment" },
        { name: "Python", level: 80, description: "Data science & ML" },
        { name: "Data Manipulation", level: 75, description: "Pandas, NumPy" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-primary",
      skills: [
        { name: "HTML/CSS", level: 85, description: "Modern web standards" },
        { name: "JavaScript", level: 75, description: "Interactive experiences" },
        { name: "Bootstrap", level: 80, description: "Responsive design" },
        { name: "React", level: 70, description: "Component-based UI" }
      ]
    },
    {
      title: "Design & Tools",
      icon: Palette,
      color: "text-accent",
      skills: [
        { name: "Fusion 360", level: 70, description: "3D modeling & design" },
        { name: "UI/UX Design", level: 75, description: "User-centered design" },
        { name: "Git", level: 80, description: "Version control" },
        { name: "ROS", level: 65, description: "Robotics framework" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="project-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-muted p-2 rounded-lg">
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                      <span className="text-sm font-mono text-primary">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies I work with */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Flutter', 'Dart', 'Python', 'JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3',
              'TensorFlow', 'Firebase', 'Git', 'VSCode', 'Android Studio', 'Figma', 'Bootstrap',
              'REST APIs', 'JSON', 'SQLite', 'Node.js', 'ROS'
            ].map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;