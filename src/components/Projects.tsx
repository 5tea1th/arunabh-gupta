import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cowwnect",
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
        breeds: "Indian",
        platforms: "iOS & Android"
      },
      links: {
      github: "https://github.com/5tea1th/cowwnect"
    }
    },
    {
      title: "RoboWars App",
      description: "A live mobile app built for robotics competitions, currently available on the Play Store in beta testing. Features include live match tracking, instant updates, and media gallery.",
      longDescription: "RoboWars App empowers robotics enthusiasts and participants with real-time competition updates. Built using Flutter and Firestore, the app supports push notifications, match schedules, live scoring, and galleries for highlights, making robotics events more engaging and accessible.",
      technologies: ["Flutter", "Firestore Database", "Cloud", "Mobile"],
      category: "Mobile App",
      icon: Smartphone,
      status: "Live (Beta Testing)",
      features: [
        "Live match updates",
        "Match tracking",
        "Push notifications",
        "Media gallery",
        "Realtime database sync"
      ],
      metrics: {
        matches: "50+",
        users: "Beta testers",
        platforms: "Android"
      },
      links: {
      playstore: "https://play.google.com/store/apps/details?id=robowars.com.robowars_app",
      github: "https://github.com/5tea1th/RoboVITics_Robowars_2025"
    }
    },
    {
      title: "Artisan Platform",
      description:
        "Mobile-first platform that empowers local artisans with digital storefronts, KYC onboarding, product management and AI-powered short reels to showcase products.",
      longDescription:
        "A Flutter app + GCP-backed platform for artisans: secure onboarding (Aadhaar / PAN / selfie KYC), product CRUD (up to 5 photos per product), auto-generated 15s reels from product images (Cloud Run + FFmpeg), and dashboards for artisans and admins. Primary datastore is Cloud Firestore (asia-south1) with media in a GCS bucket (gs://artisan-app-media, Mumbai). Backend tooling uses Docker and Cloud Run for video generation and background jobs.",
      technologies: [
        "Flutter",
        "Firebase Auth",
        "Cloud Firestore",
        "Google Cloud Storage",
        "Cloud Run (Python + FFmpeg)",
        "Docker",
        "Firebase Storage",
        "GCP IAM / Service Accounts"
      ],
      category: "Marketplace / Creator Tools",
      icon: Smartphone,
      status: "In development (backend in Mumbai)",
      features: [
        "Artisan onboarding with KYC (Aadhaar, PAN, selfie) and admin review workflow",
        "Profile editor: name, bio, profile photo, up to 5 shop photos, intro video",
        "Products: add/edit/delete products, upload up to 5 product photos",
        "Auto reels: Cloud Run FFmpeg job creates 15s cross-fade reels (reel.mp4) from up to 5 images",
        "Reels and products exposed via Firestore collections (reels/{reelId}, products/{productId})",
        "Admin KYC dashboard and kycSubmissions subcollection",
        "Storage region handling (explicit bucket in Mumbai to avoid US default)",
        "Uses Docker images for reproducible Cloud Run deployments"
      ],
      metrics: {
        statusDetail: "Reel Generation Done"
      },
      links: {
      github: "https://github.com/5tea1th/konstant"
    }
    }
  ];

  const upcomingProjects = [
    {
      title: "RoboVITics Mobile Platform",
      description: "Currently in planning: a mobile-first platform to extend RoboWars features and community engagement with project tracking and mentorship support.",
      technologies: ["Flutter", "Cloud", "Realtime Database"],
      status: "Planning"
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

        {/* Featured / Completed Projects */}
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

  {project.longDescription && (
    <p className="text-sm text-muted-foreground leading-relaxed">
      {project.longDescription}
    </p>
  )}

  {/* Key Features */}
  {project.features && (
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
  )}

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
    {project.links?.playstore && (
      <Button
  className="btn-tech"
  disabled={!project.links?.playstore}
  asChild={!!project.links?.playstore} // only turn into <a> if link exists
>
  {project.links?.playstore ? (
    <a href={project.links.playstore} target="_blank" rel="noopener noreferrer">
      <ExternalLink className="mr-2 h-4 w-4" />
      Play Store
    </a>
  ) : (
    <span className="flex items-center">
      <ExternalLink className="mr-2 h-4 w-4" />
      Play Store
    </span>
  )}
</Button>
    )}

    {project.links?.github && (
      <Button asChild variant="outline" className="btn-outline-tech">
        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </a>
      </Button>
    )}
  </div>
</div> {/* ✅ Close space-y-6 properly here */}


{/* Project Metrics & Visual */}
{project.metrics && (
  <div className="space-y-6">
    <div className="grid grid-cols-3 gap-4">
      {Object.entries(project.metrics).map(([key, value]) => (
        <div key={key} className="text-center">
          <div className="text-2xl font-bold text-primary">{value}</div>
          <div className="text-xs text-muted-foreground">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 text-center">
      <Brain className="h-16 w-16 mx-auto text-primary/60 mb-4" />
      <p className="text-sm text-muted-foreground">AI-Powered / Cloud Sync</p>
      <p className="text-xs text-muted-foreground mt-1">
        {project.title === "Cowwnect"
          ? "Custom TensorFlow Lite Model"
          : "Cloud & Realtime Platform"}
      </p>
    </div>
  </div>
)}
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