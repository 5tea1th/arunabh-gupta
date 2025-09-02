import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Smartphone, Cpu, Code, Palette, Cloud, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-primary",
      skills: [
        { name: "Flutter", level: 90, description: "Cross-platform mobile apps" },
        { name: "Dart", level: 85, description: "Flutter's primary language" },
        { name: "Firebase", level: 80, description: "Backend, auth & notifications" },
        { name: "REST APIs", level: 85, description: "API integration" },
        { name: "State Management", level: 80, description: "Provider, Riverpod, BLoC" },
        { name: "Push Notifications", level: 75, description: "Firebase Cloud Messaging" },
        { name: "SQLite", level: 70, description: "Local persistence & caching" },
        { name: "Material / Cupertino", level: 80, description: "UI frameworks" }
      ]
    },
    {
      title: "AI/ML & Data",
      icon: Cpu,
      color: "text-accent",
      skills: [
        { name: "Machine Learning", level: 80, description: "Model development & training" },
        { name: "TensorFlow Lite", level: 75, description: "On-device ML deployment" },
        { name: "Computer Vision", level: 70, description: "Image classification & detection" },
        { name: "Python", level: 85, description: "ML, automation & backend tooling" },
        { name: "Pandas / NumPy", level: 80, description: "Data manipulation & analysis" },
        { name: "AI Integration", level: 70, description: "Gemini API, cloud AI services" }
      ]
    },
    {
      title: "Cloud & Backend",
      icon: Cloud,
      color: "text-primary",
      skills: [
        { name: "Google Cloud Platform (GCP)", level: 80, description: "Firestore, Storage, Cloud Run" },
        { name: "AWS", level: 70, description: "S3, EC2 basics" },
        { name: "Docker", level: 75, description: "Containerized deployments" },
        { name: "CI/CD", level: 70, description: "Automated builds & deployments" },
        { name: "Cloud Run + FFmpeg", level: 65, description: "Video processing & automation" },
        { name: "IAM & Security", level: 70, description: "Service accounts & roles" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-primary",
      skills: [
        { name: "React", level: 75, description: "Component-based UI" },
        { name: "JavaScript / TypeScript", level: 80, description: "Web & API logic" },
        { name: "HTML/CSS", level: 85, description: "Modern web standards" },
        { name: "Bootstrap / Tailwind", level: 80, description: "Responsive UI" },
        { name: "Next.js (basic)", level: 60, description: "SSR & modern frontend" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-accent",
      skills: [
        { name: "Firestore (NoSQL)", level: 85, description: "Realtime database & sync" },
        { name: "Realtime Database", level: 75, description: "Live updates & event sync" },
        { name: "SQLite", level: 70, description: "Local mobile database" },
        { name: "OracleDB (SQL)", level: 65, description: "Relational database" }
      ]
    },
    {
      title: "Design & Tools",
      icon: Palette,
      color: "text-accent",
      skills: [
        { name: "Fusion 360", level: 70, description: "3D modeling & design" },
        { name: "UI/UX Design", level: 75, description: "User-centered interfaces" },
        { name: "Figma", level: 80, description: "Prototyping & collaboration" },
        { name: "Git / GitHub", level: 85, description: "Version control" },
        { name: "ROS", level: 65, description: "Robotics framework" },
        { name: "VSCode / Android Studio", level: 80, description: "Dev environments" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building mobile apps, cloud platforms, and AI-powered solutions
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
                    <Progress value={skill.level} className="h-2" />
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
              'Flutter', 'Dart', 'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js',
              'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'TensorFlow', 'TensorFlow Lite',
              'Firebase', 'Firestore', 'Realtime DB', 'SQLite', 'OracleDB', 'REST APIs',
              'JSON', 'Docker', 'GCP', 'AWS', 'Cloud Run', 'FFmpeg', 'Git', 'GitHub',
              'VSCode', 'Android Studio', 'Figma', 'Fusion 360', 'ROS', 'CI/CD'
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