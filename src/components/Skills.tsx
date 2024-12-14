import React from 'react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="yetenekler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Teknik Yetenekler</h2>
          <p className="text-xl text-gray-600">Uzman olduğum teknolojiler</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600">{category.category}</h3>
              <div className="space-y-2">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative pt-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-100">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
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