import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold hero-text">Ali Haider</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Button
                variant="nav"
                onClick={() => scrollToSection('home')}
                className="hover:text-primary hover-scale"
              >
                Home
              </Button>
              <Button
                variant="nav"
                onClick={() => scrollToSection('projects')}
                className="hover:text-primary hover-scale"
              >
                Projects
              </Button>
              <Button
                variant="nav"
                onClick={() => scrollToSection('about')}
                className="hover:text-primary hover-scale"
              >
                About
              </Button>
              <Button
                variant="nav"
                onClick={() => scrollToSection('experience')}
                className="hover:text-primary hover-scale"
              >
                Experience
              </Button>
              <Button
                variant="nav"
                onClick={() => scrollToSection('contact')}
                className="hover:text-primary hover-scale"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="nav"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Button
                variant="nav"
                onClick={() => scrollToSection('home')}
                className="block w-full text-left hover:text-primary hover-scale"
              >
                Home
              </Button>
              <Button
                variant="nav"
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left hover:text-primary hover-scale"
              >
                Projects
              </Button>
              <Button
                variant="nav"
                onClick={() => scrollToSection('about')}
                className="block w-full text-left hover:text-primary hover-scale"
              >
                About
              </Button>
              <Button
                variant="nav"
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left hover:text-primary hover-scale"
              >
                Experience
              </Button>
              <Button
                variant="nav"
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left hover:text-primary hover-scale"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;