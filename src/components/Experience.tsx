import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Intern",
      company: "DRDO",
      location: "Remote",
      period: "Summer 2025",
      type: "Internship",
      description:
        "Worked on integrating and testing ML-based perception models on custom robotic hardware using ROS. Contributed to advancing autonomous systems and gained hands-on experience with robotics software stack.",
      technologies: [
        "ROS",
        "Machine Learning",
        "Python",
        "Computer Vision",
        "Robotics",
      ],
      current: false,
    },
    {
      title: "Projects Lead",
      company: "RoboVITics",
      location: "VIT Vellore",
      period: "2024 - Present",
      type: "Leadership",
      description:
        "Leading and managing multiple technical projects within RoboVITics, coordinating with sub-teams, and ensuring timely delivery of robotics initiatives. Oversee project planning, execution, and innovation strategy.",
      technologies: [
        "Project Leadership",
        "Robotics",
        "Team Management",
        "Strategic Planning",
        "Innovation",
      ],
      current: true,
    },
    {
      title: "App Development Head",
      company: "RoboVITics",
      location: "VIT Vellore",
      period: "2024 - Present",
      type: "Leadership",
      description:
        "Leading the club's mobile app development efforts, mentoring junior developers, and coordinating technical projects. Responsible for driving innovation in mobile solutions for robotics applications.",
      technologies: [
        "Flutter",
        "Team Leadership",
        "Project Management",
        "Mobile Development",
        "Mentoring",
      ],
      current: true,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building expertise through hands-on projects and leadership roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="project-card relative">
                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      Current
                    </Badge>
                  </div>
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Timeline indicator */}
                  <div className="flex flex-col items-center md:items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mb-2">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="hidden md:block w-px h-full bg-border ml-6"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-primary font-medium">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Interested in working together?
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-primary hover:text-accent transition-colors duration-300 font-medium"
            >
              Let's connect →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;