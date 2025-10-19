import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with cart functionality, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      codeLink: "#",
      liveLink: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind"],
      codeLink: "#",
      liveLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio template with smooth animations and responsive design.",
      tech: ["React", "TypeScript", "Vite"],
      codeLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <section id="project" className="py-16 sm:py-20 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent works showcasing my skills and passion for development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-6 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-black/30"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 4 4 4-4V5h-2a1 1 0 100 2h2v2l-4 4-4-4-4 4z" clipRule="evenodd" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-base mb-4 flex-grow">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white/10 text-gray-200 text-sm px-3 py-1 rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between gap-4 mt-auto">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-2 border border-purple-500 text-white rounded-lg text-base font-medium transition-all duration-300 hover:bg-purple-600 hover:border-purple-600"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-base font-medium transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
