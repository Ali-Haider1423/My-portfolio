import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project }) => {
  return (
    <Card className="group card-hover overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-primary-light text-primary-dark font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {project.link && (
          <Button 
            className="w-full btn-gradient text-white"
            onClick={() => window.open(project.link, '_blank')}
          >
            View Project
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;