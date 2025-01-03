import { personalInfo } from '../data/personalInfo';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="hakkimda" className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-block">
                <h2 className="text-5xl font-bold text-slate-800 mb-2">Hakkımda</h2>
                <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-light">{personalInfo.description}</p>
            </div>
            
            <div className="flex items-center gap-3 text-slate-600 bg-white p-4 rounded-xl shadow-sm border border-slate-100 w-fit hover:shadow-md transition-shadow duration-300">
              <MapPin className="h-6 w-6 text-indigo-600" />
              <span className="font-medium">{personalInfo.location}</span>
            </div>
            
            <div className="flex gap-8">
              {[
                { href: personalInfo.github, icon: Github, label: "Github" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" }
              ].map(({ href, icon: Icon, label }) => (
                <a 
                  key={label}
                  href={href}
                  className="group relative p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition duration-300"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6 text-slate-600 group-hover:text-indigo-600 transition-colors duration-300" />
                </a>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              {personalInfo.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-2.5 bg-white border border-slate-100 shadow-sm text-slate-700 rounded-xl text-sm font-medium transition duration-300 hover:shadow-md hover:border-indigo-100 hover:text-indigo-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl transform -rotate-3"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-xl">
              <img
                src="/api/placeholder/800/600"
                alt="Profil Resmi"
                className="rounded-xl w-full object-cover"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}