import { useState, useEffect } from 'react';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  // Default experiences
  const defaultExperiences = [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and performance.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker']
    },
    {
      id: '2',
      company: 'Digital Innovations Ltd.',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive and user-friendly interfaces.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Material-UI', 'Git']
    },
    {
      id: '3',
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      duration: '2019 - 2020',
      description: 'Built interactive user interfaces for a fast-growing startup. Implemented responsive designs and optimized application performance for better user experience.',
      technologies: ['JavaScript', 'React', 'CSS3', 'REST APIs', 'Webpack']
    }
  ];

  useEffect(() => {
    const savedExperiences = localStorage.getItem('portfolio-experiences');
    if (savedExperiences) {
      const parsedExperiences = JSON.parse(savedExperiences);
      setExperiences(parsedExperiences.length > 0 ? parsedExperiences : defaultExperiences);
    } else {
      setExperiences(defaultExperiences);
      localStorage.setItem('portfolio-experiences', JSON.stringify(defaultExperiences));
    }
  }, []);

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <div className="md:ml-16 bg-card border border-border rounded-lg p-6 card-hover">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.duration}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary-light text-primary-dark font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {experiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No experience entries available. Add some from the admin panel!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;