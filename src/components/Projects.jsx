import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Default projects
  const defaultProjects = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600',
      link: 'https://github.com/alihaider',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe']
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800&h=600',
      link: 'https://github.com/alihaider',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io']
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions, forecasts, and weather maps using external APIs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800&h=600',
      link: 'https://github.com/alihaider',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS']
    }
  ];

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio-projects');
    if (savedProjects) {
      const parsedProjects = JSON.parse(savedProjects);
      setProjects(parsedProjects.length > 0 ? parsedProjects : defaultProjects);
    } else {
      setProjects(defaultProjects);
      localStorage.setItem('portfolio-projects', JSON.stringify(defaultProjects));
    }
  }, []);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work and personal projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects available. Add some from the admin panel!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;