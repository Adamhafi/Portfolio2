import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillProgress } from "@/components/ui/skill-progress";
import { Mail, Github, Phone, ExternalLink, Shield, Code, Bug, Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  const skills = [
    "Full-Stack Web Development",
    "Penetration Testing / Bounty Hunting",
    "Malware Analyst / Reverse Engineering",
  ];

  const projects = [
    {
      name: "🧬 BlackPoison ARAT",
      tagline: "Silent Dominion. Absolute Control.",
      description: "BlackRAT is a stealthy, high-performance Advanced Remote Tool (ARAT) designed for long-term system control and flexibility. It features fully encrypted command-and-control communication, hidden code execution,live remote monitoring via desktop and webcam streaming, robust persistence mechanisms,and a modular plugin system for customizable functionality.",
      tech: ["C#", "C/C++", "Networking", "Encryption"],
      outcome: "Research & Development",
      featured: true,
      demoImage: "/Project/BlackRAT.png",
      // youtubeUrl: "https://www.youtube.com/embed/your-arat-video-id"
    },
    {
      name: "🕷️ BlackPoison Steam",
      tagline: "Deployment Without Delay.",
      description: "BlackPoison Steam is a tool that injects and installs full games along with all DLCs and multiplayer support directly onto a device, then runs them automatically, bypassing standard installation steps.",
      tech: ["C#", "DevOps", "Automation"],
      outcome: "Active Testing Tool",
      featured: true,
      demoImage: "/Project/BlackSteam.png",
      // youtubeUrl: "https://www.youtube.com/embed/your-steam-video-id"
    },
    {
      name: "🔐 BlackPoison ClipBoard",
      tagline: "Timeless Archive.",
      description: "A clipboard manager for persistent archival and retrieval.",
      tech: ["C++", "Data Management", "Storage"],
      outcome: "Productivity Tool",
      featured: true,
      demoImage: "/projects/clipboard.png",
      youtubeUrl: "https://www.youtube.com/embed/your-clipboard-video-id"
    },
    {
      name: "🧬 BlackStrike",
      description: "Advanced XSS Scanner designed to detect and analyze cross-site scripting vulnerabilities in web applications with high precision.",
      tech: ["Python", "Security", "Web Scraping"],
      outcome: "Open-source security tool",
      github: "https://github.com/Adamhafi/BlackStrike",
      demoImage: "/Project/BlackStrike.png",
      //youtubeUrl: "https://www.youtube.com/embed/your-blackstrike-video-id"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-display font-bold cyber-glow-strong glitch-text cursor-pointer"
            data-text="Adam Hafi"
          >
            Adam Hafi
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-effect border-t border-border/50">
            <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        </div>
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-float">
            <Shield className="w-24 h-24 mx-auto mb-8 text-primary cyber-glow-strong animate-flicker" />
          </div>
          <h1 
            className="text-6xl md:text-8xl font-display font-black mb-6 cyber-glow-strong tracking-tight glitch-text" 
            data-text="Adam Hafi"
          >
            Adam Hafi
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light animate-float">
            Full-Stack Developer, Bounty Hunter, Malware Analyst
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              asChild
            >
              <a href="mailto:adamhafi187@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/Adamhafi" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="photo-frame animate-float">
                <div className="photo-content">
                  <img 
                    src="/Project/Profile.jpeg" 
                    alt="Adam Hafi" 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="photo-overlay"></div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold cyber-glow">Professional Profile</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-primary">Location</Badge>
                  <span className="text-muted-foreground">Beirut, Lebanon</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-primary">Expertise</Badge>
                  <span className="text-muted-foreground">Cybersecurity & Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-primary">Focus</Badge>
                  <span className="text-muted-foreground">Red Team Operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-primary">Experience</Badge>
                  <span className="text-muted-foreground">5+ Years in Tech</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Specialized in offensive security and advanced development, with a strong focus on creating sophisticated tools for security research and analysis.
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="w-full md:w-auto"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Connect With Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 cyber-glow text-center">About Me</h2>
          <Card className="p-8 md:p-12 glass-effect gradient-border card-glow hover-lift">
            <p className="text-lg text-card-foreground leading-relaxed">
              I am a Computer Science student and cybersecurity researcher with a passion for building secure, scalable web applications. 
              I actively hunt vulnerabilities through bug bounty programs and analyze malware to understand emerging threats. 
              Currently, I work in the IT department at Port Beirut, where I manage critical documentation, ensure data security, 
              implement backup strategies, maintain ISO compliance, conduct IT audits, and respond to system failures with precision and speed.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 cyber-glow text-center">Core Skills</h2>
          <Card className="p-8 glass-effect gradient-border card-glow hover-lift">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Technical Skills</h3>
                <p className="text-muted-foreground mb-6">A snapshot of my core technical skills and proficiency.</p>
                <SkillProgress
                  skills={[
                    { name: 'Full-Stack Web Development', level: 92 },
                    { name: 'Penetration Testing', level: 88 },
                    { name: 'Malware Analysis', level: 97 },
                    { name: 'Systems Programming', level: 85 },
                  ]}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Tools & Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-card-foreground">Primary Languages</span>
                    <span className="text-muted-foreground">C#, C++, Python</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-card-foreground">Security Focus</span>
                    <span className="text-muted-foreground">Red Teaming, Reverse Engineering</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-card-foreground">Tools</span>
                    <span className="text-muted-foreground">Frida, Ghidra, Burp, Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 cyber-glow text-center">Experience</h2>
          <Card className="p-8 md:p-12 glass-effect gradient-border card-glow hover-lift">
            <h3 className="text-2xl font-display font-bold mb-2 text-primary">IT Department</h3>
            <p className="text-muted-foreground mb-4">Port Beirut</p>
            <ul className="space-y-2 text-card-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                Managing critical IT documentation and knowledge bases
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                Ensuring data security and implementing backup strategies
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                Maintaining ISO compliance standards
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                Conducting comprehensive IT audits
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                Rapid response to system failures and security incidents
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 cyber-glow text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`p-8 glass-effect gradient-border card-glow hover-lift flex flex-col relative overflow-hidden ${
                  project.featured ? 'border-primary/50 animate-float' : ''
                }`}
              >
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-bl-lg">
                    FEATURED
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold mb-2 text-primary">{project.name}</h3>
                {project.tagline && (
                  <p className="text-sm text-muted-foreground italic mb-4 font-light">
                    {project.tagline}
                  </p>
                )}
                <p className="text-card-foreground mb-6 flex-grow leading-relaxed">
                  {project.description.length > 100 
                    ? `${project.description.slice(0, 100)}...` 
                    : project.description}
                </p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary/80 hover:bg-secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">Status:</span> {project.outcome}
                  </p>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="default" size="sm">
                          View Demo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[80vw] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-display font-bold text-primary mb-4">{project.name}</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            {project.demoImage && (
                              <div className="relative rounded-lg overflow-hidden shadow-lg">
                                <img 
                                  src={project.demoImage} 
                                  alt={`${project.name} demo`}
                                  className="w-full h-auto object-cover"
                                />
                              </div>
                            )}
                            <div className="space-y-4">
                              {project.tagline && (
                                <p className="text-sm text-muted-foreground italic font-light">
                                  {project.tagline}
                                </p>
                              )}
                              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 glass-effect gradient-border card-glow hover-lift flex flex-col relative overflow-hidden border-primary/50">
                                <h4 className="text-lg font-semibold mb-4">Full Description</h4>
                                <p className="text-card-foreground leading-relaxed">
                                  {project.description}
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary/80 hover:bg-secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                <span className="text-primary font-semibold">Status:</span> {project.outcome}
                              </p>
                            </div>
                          </div>
                          {project.youtubeUrl && (
                            <div className="aspect-video w-full">
                              <iframe
                                width="100%"
                                height="100%"
                                src={project.youtubeUrl}
                                title={`${project.name} demo video`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg shadow-lg"
                              ></iframe>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 cyber-glow text-center">Education & Courses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 glass-effect gradient-border card-glow hover-lift">
              <h3 className="text-xl font-display font-bold mb-2 text-primary">Computer Science</h3>
              <p className="text-muted-foreground">Current Student</p>
              <p className="text-card-foreground mt-2">
                Focused on software engineering, cybersecurity, and systems programming
              </p>
            </Card>
            <Card className="p-8 glass-effect gradient-border card-glow hover-lift">
              <h3 className="text-xl font-display font-bold mb-2 text-primary">ETH 101</h3>
              <p className="text-muted-foreground">Semi Colone Lebanese Cybersecurity Team</p>
              <p className="text-card-foreground mt-2">
                Advanced ethical hacking and penetration testing certification
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 cyber-glow">Get In Touch</h2>
          <Card className="p-8 md:p-12 glass-effect gradient-border card-glow hover-lift">
            <p className="text-lg text-card-foreground mb-8">
              Let's collaborate on cybersecurity projects or discuss opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:adamhafi187@gmail.com"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>adamhafi187@gmail.com</span>
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a
                href="tel:+96171042699"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+961 71 042 699</span>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-secondary/30">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Adam Hafi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
