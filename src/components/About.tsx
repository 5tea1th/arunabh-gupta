import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating seamless user experiences and exploring the frontiers of AI/ML
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Building the Future, One App at a Time
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                As a Computer Science student at VIT Vellore, I'm deeply passionate about mobile development 
                and artificial intelligence. My journey in tech began with a curiosity about how apps work, 
                and has evolved into a love for creating solutions that make a real impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My experience spans from leading app development initiatives at RoboVITics to working on 
                cutting-edge ML perception models during my DRDO internship. I believe in the power of 
                technology to solve real-world problems and am always excited to take on new challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Mobile-First Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">AI/ML Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Team Leadership</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">Research & Innovation</span>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="space-y-6">
            <Card className="project-card">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Education</h4>
                  <div className="space-y-3">
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h5 className="font-medium text-foreground">B.Tech Computer Science (Core)</h5>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-3 w-3" /> VIT Vellore
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="h-3 w-3" /> 2023 – 2027
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <div className="text-center p-6">
                <h4 className="text-2xl font-bold gradient-text mb-2">3rd Year</h4>
                <p className="text-muted-foreground">Currently pursuing my degree with a focus on</p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {['Mobile Development', 'Machine Learning', 'Robotics'].map((interest) => (
                    <span key={interest} className="skill-tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;