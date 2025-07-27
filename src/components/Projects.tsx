import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cownnect",
      description: "An AI-powered mobile application for detecting Indian cow breeds using advanced machine learning. Features real-time breed identification, detailed breed information, and integration with Gemini API for intelligent responses.",
      longDescription: "Cownnect combines computer vision and natural language processing to create a comprehensive solution for livestock identification. The app uses a custom-trained TensorFlow Lite model optimized for mobile deployment, ensuring fast and accurate breed detection even in offline scenarios.",
      technologies: ["Flutter", "TensorFlow Lite", "Gemini API", "Dart", "Computer Vision", "Mobile ML"],
      category: "Mobile App",
      icon: Smartphone,
      status: "Completed",
      features: [
        "Real-time cow breed detection",
        "Offline ML model support", 
        "Detailed breed information",
        "AI-powered chat integration",
        "Cross-platform compatibility"
      ],
      metrics: {
        accuracy: "92%",
        breeds: "25+",
        platforms: "iOS & Android"
      }
    }
  ];

  const upcomingProjects = [
    {
      title: "RoboVITics Mobile Platform",
      description: "Developing a comprehensive mobile platform for robotics club management and competition tracking.",
      technologies: ["Flutter", "Firebase", "Real-time Database"],
      status: "In Development"
    },
    {
      title: "ML Model Deployment Tool",
      description: "Creating a tool to simplify deployment of machine learning models on mobile devices.",
      technologies: ["Python", "TensorFlow", "Flutter", "Docker"],
      status: "Planning"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions that blend mobile development with cutting-edge AI/ML
          </p>
        </div>

        {/* Featured Project */}
        <div className="max-w-6xl mx-auto mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <Badge className="bg-accent/20 text-accent-foreground text-xs mt-1">
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button className="btn-tech" disabled>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo (Coming Soon)
                    </Button>
                    <Button variant="outline" className="btn-outline-tech" disabled>
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>

                {/* Project Metrics & Visual */}
                <div className="space-y-6">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{project.metrics.accuracy}</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{project.metrics.breeds}</div>
                      <div className="text-xs text-muted-foreground">Cow Breeds</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">2</div>
                      <div className="text-xs text-muted-foreground">Platforms</div>
                    </div>
                  </div>

                  {/* Visual placeholder */}
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 text-center">
                    <Brain className="h-16 w-16 mx-auto text-primary/60 mb-4" />
                    <p className="text-sm text-muted-foreground">
                      AI-Powered Detection Engine
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Custom TensorFlow Lite Model
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Upcoming Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="project-card">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Interested in collaborating on a project?
          </p>
          <Button 
            className="btn-tech"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Build Something Amazing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;