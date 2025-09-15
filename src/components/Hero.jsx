import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="hero-text">Ali Haider</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. 
            I build scalable applications that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-gradient text-white hover:scale-105 transition-transform duration-200"
              onClick={() => scrollToSection('experience')}
            >
             My Work Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={() => scrollToSection('projects')}
      >
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;