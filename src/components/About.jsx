const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'Git', 'REST APIs', 'Material-UI'
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-64 h-64 mb-8 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/profile-photo.jpg" 
                alt="Ali Haider - Full Stack Developer" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Ali Haider, a passionate full-stack developer with extensive experience 
                in building modern web applications. My journey in software development 
                started with a curiosity about how things work on the web.
              </p>
              <p>
                Over the years, I've worked with various technologies and frameworks, 
                always staying updated with the latest trends in web development. 
                I enjoy solving complex problems and creating user-friendly applications 
                that make a real impact.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-card border border-border rounded-lg p-3 text-center card-hover cursor-default"
                >
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
              <h4 className="font-semibold text-foreground mb-2">Currently Learning</h4>
              <p className="text-muted-foreground">
                Next.js, React Native, Microservices Architecture, and Cloud Computing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;