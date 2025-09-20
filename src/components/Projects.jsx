import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Default projects
  const defaultProjects = [
    {
      id: '1',
      title: 'Operating Systems simulation',
      description: 'Built an OS simulation in React with process, memory, and I/O management, implementing scheduling algorithms like FCFS, RR, SJF, and Priority.',
      image: '../../public/images/OSproject.png',
      link: 'https://os-project-three.vercel.app/',
      technologies: ['React','OS algorithms']
    }
  ];

  useEffect(() => {
      setProjects(defaultProjects);
      localStorage.setItem('portfolio-projects', JSON.stringify(defaultProjects));
   
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