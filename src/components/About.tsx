import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="hakkimda" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Hakkımda</h2>
            <p className="text-lg text-gray-600">{personalInfo.description}</p>
            
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>{personalInfo.location}</span>
            </div>
            
            <div className="flex gap-4">
              <a href={personalInfo.github} className="hover:text-purple-600 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href={personalInfo.linkedin} className="hover:text-purple-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {personalInfo.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}