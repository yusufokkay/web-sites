import React from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projeler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projelerim</h2>
          <p className="text-xl text-gray-600">Son dönemde geliştirdiğim bazı projeler</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-purple-600 hover:text-purple-700"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-purple-600 hover:text-purple-700"
                  >
                    <Github className="h-4 w-4" />
                    Kod
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}