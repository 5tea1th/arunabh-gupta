import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="section-enter">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Arunabh Gupta" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-2xl animate-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block hero-gradient glow-text typing-effect">Arunabh Gupta</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-muted-foreground">
            Flutter App Developer <span className="text-primary">|</span> AI/ML Enthusiast
          </h2>

          {/* Bio */}
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed text-muted-foreground">
            I'm a 3rd year B.Tech CSE student at <span className="text-primary font-semibold">VIT Vellore</span>. 
            I love building mobile apps and exploring machine learning. Currently the{' '}
            <span className="text-accent font-semibold">App Development Head at RoboVITics</span> and a recent{' '}
            <span className="text-primary font-semibold">DRDO intern</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-tech text-base px-8 py-3 min-w-[160px]"
              onClick={() => window.open('/Resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-tech text-base px-8 py-3 min-w-[160px]"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;