import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "arunabhsgupta@gmail.com",
      href: "mailto:arunabhsgupta@gmail.com",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/arunabh-s-gupta/",
      href: "https://linkedin.com/in/arunabh-s-gupta/",
      color: "text-accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/5tea1th",
      href: "https://github.com/5tea1th",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="project-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, share ideas, or collaborate on 
                interesting projects. Whether you have a specific project in mind or just want to 
                connect, feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-all duration-300 group"
                  >
                    <div className="bg-muted p-2 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                      <method.icon className={`h-5 w-5 ${method.color} group-hover:text-primary`} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{method.label}</div>
                      <div className="text-sm text-muted-foreground">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Info */}
            <Card className="project-card">
              <h4 className="font-semibold text-foreground mb-4">Quick Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  VIT Vellore, Tamil Nadu, India
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  Available for remote work & collaborations
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="project-card">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  required
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button type="submit" className="btn-tech w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2024 Arunabh Gupta. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Open to opportunities • Available for freelance projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;