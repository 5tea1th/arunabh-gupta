import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Zap, Target, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Custom Flutter App Development",
      description: "Clean UI, fast integration, and platform-native performance",
      features: [
        "Cross-platform mobile apps (iOS & Android)",
        "Clean, intuitive user interfaces",
        "Fast development and deployment",
        "Native performance optimization",
        "Seamless API integrations",
        "Real-time features and notifications"
      ],
      process: [
        "Requirements Analysis",
        "UI/UX Design",
        "Development & Testing",
        "Deployment & Support"
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Development",
      description: "Rapid prototyping and iterative development approach"
    },
    {
      icon: Target,
      title: "User-Focused",
      description: "Clean, intuitive interfaces that users love"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Close collaboration throughout the development process"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized in creating high-quality mobile applications that deliver exceptional user experiences
          </p>
        </div>

        {/* Main Service */}
        <div className="max-w-4xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card key={index} className="project-card">
              <div className="text-center mb-8">
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-lg text-muted-foreground">{service.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">What You Get:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Development Process:</h4>
                  <div className="space-y-4">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                          {idx + 1}
                        </div>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="project-card text-center">
              <div className="bg-primary/10 p-3 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Technologies I Use</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Flutter', 'Dart', 'Firebase', 'REST APIs', 'SQLite', 
              'Push Notifications', 'State Management', 'Material Design',
              'Cupertino Design', 'TensorFlow Lite', 'Maps Integration'
            ].map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Build Your App?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together. 
            From concept to deployment, I'll guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-tech"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-tech"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;