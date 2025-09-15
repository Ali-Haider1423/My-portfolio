import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('projects');
  
  // Project form state
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    technologies: ''
  });

  // Experience form state
  const [experienceForm, setExperienceForm] = useState({
    company: '',
    position: '',
    duration: '',
    description: '',
    technologies: ''
  });

  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio-projects');
    const savedExperiences = localStorage.getItem('portfolio-experiences');
    
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedExperiences) setExperiences(JSON.parse(savedExperiences));
  }, []);

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (!projectForm.title || !projectForm.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const newProject = {
      id: Date.now().toString(),
      title: projectForm.title,
      description: projectForm.description,
      image: projectForm.image || 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=800&h=600',
      link: projectForm.link,
      technologies: projectForm.technologies.split(',').map(tech => tech.trim()).filter(Boolean)
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects));
    
    setProjectForm({ title: '', description: '', image: '', link: '', technologies: '' });
    
    toast({
      title: "Success",
      description: "Project added successfully!",
    });
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    if (!experienceForm.company || !experienceForm.position) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const newExperience = {
      id: Date.now().toString(),
      company: experienceForm.company,
      position: experienceForm.position,
      duration: experienceForm.duration,
      description: experienceForm.description,
      technologies: experienceForm.technologies.split(',').map(tech => tech.trim()).filter(Boolean)
    };

    const updatedExperiences = [...experiences, newExperience];
    setExperiences(updatedExperiences);
    localStorage.setItem('portfolio-experiences', JSON.stringify(updatedExperiences));
    
    setExperienceForm({ company: '', position: '', duration: '', description: '', technologies: '' });
    
    toast({
      title: "Success",
      description: "Experience added successfully!",
    });
  };

  const deleteProject = (id) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects));
    toast({
      title: "Success",
      description: "Project deleted successfully!",
    });
  };

  const deleteExperience = (id) => {
    const updatedExperiences = experiences.filter(e => e.id !== id);
    setExperiences(updatedExperiences);
    localStorage.setItem('portfolio-experiences', JSON.stringify(updatedExperiences));
    toast({
      title: "Success",
      description: "Experience deleted successfully!",
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold hero-text mb-4">Admin Panel</h1>
          <p className="text-muted-foreground">Manage your portfolio content</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          <Button
            variant={activeTab === 'projects' ? 'default' : 'outline'}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </Button>
          <Button
            variant={activeTab === 'experience' ? 'default' : 'outline'}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </Button>
        </div>

        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add Project Form */}
            <Card>
              <CardHeader>
                <CardTitle>Add New Project</CardTitle>
                <CardDescription>Fill in the details to add a new project</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProjectSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title *</label>
                    <Input
                      value={projectForm.title}
                      onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
                      placeholder="Project title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description *</label>
                    <Textarea
                      value={projectForm.description}
                      onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                      placeholder="Project description"
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Image URL</label>
                    <Input
                      value={projectForm.image}
                      onChange={(e) => setProjectForm({...projectForm, image: e.target.value})}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Link</label>
                    <Input
                      value={projectForm.link}
                      onChange={(e) => setProjectForm({...projectForm, link: e.target.value})}
                      placeholder="https://example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Technologies (comma-separated)</label>
                    <Input
                      value={projectForm.technologies}
                      onChange={(e) => setProjectForm({...projectForm, technologies: e.target.value})}
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>
                  <Button type="submit" className="w-full">Add Project</Button>
                </form>
              </CardContent>
            </Card>

            {/* Projects List */}
            <Card>
              <CardHeader>
                <CardTitle>Current Projects ({projects.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {projects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{project.title}</h4>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteProject(project.id)}
                        >
                          Delete
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-xs bg-primary-light text-primary-dark px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  {projects.length === 0 && (
                    <p className="text-muted-foreground text-center py-8">No projects added yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add Experience Form */}
            <Card>
              <CardHeader>
                <CardTitle>Add New Experience</CardTitle>
                <CardDescription>Fill in the details to add work experience</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleExperienceSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company *</label>
                    <Input
                      value={experienceForm.company}
                      onChange={(e) => setExperienceForm({...experienceForm, company: e.target.value})}
                      placeholder="Company name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Position *</label>
                    <Input
                      value={experienceForm.position}
                      onChange={(e) => setExperienceForm({...experienceForm, position: e.target.value})}
                      placeholder="Job title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Duration</label>
                    <Input
                      value={experienceForm.duration}
                      onChange={(e) => setExperienceForm({...experienceForm, duration: e.target.value})}
                      placeholder="2020 - 2022"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Textarea
                      value={experienceForm.description}
                      onChange={(e) => setExperienceForm({...experienceForm, description: e.target.value})}
                      placeholder="Job description and achievements"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Technologies (comma-separated)</label>
                    <Input
                      value={experienceForm.technologies}
                      onChange={(e) => setExperienceForm({...experienceForm, technologies: e.target.value})}
                      placeholder="React, Node.js, AWS"
                    />
                  </div>
                  <Button type="submit" className="w-full">Add Experience</Button>
                </form>
              </CardContent>
            </Card>

            {/* Experience List */}
            <Card>
              <CardHeader>
                <CardTitle>Current Experience ({experiences.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{exp.position}</h4>
                          <p className="text-sm text-primary">{exp.company}</p>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteExperience(exp.id)}
                        >
                          Delete
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{exp.duration}</p>
                      <p className="text-sm text-muted-foreground mb-2">{exp.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="text-xs bg-primary-light text-primary-dark px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  {experiences.length === 0 && (
                    <p className="text-muted-foreground text-center py-8">No experience added yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;