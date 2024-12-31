import React from 'react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="yetenekler" className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">Teknik Yetenekler</h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 font-light">Uzman olduğum teknolojiler</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 inline-flex items-center">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {category.category}
                </span>
              </h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm font-medium bg-indigo-50 text-indigo-700 px-2 py-1 rounded-lg">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="overflow-hidden h-2 rounded-full bg-slate-100">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-500 ease-out"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}