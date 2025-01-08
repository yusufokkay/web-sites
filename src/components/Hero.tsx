import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  return (
    <div id="anasayfa" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-50 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hello , I'm<br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-2xl text-gray-600">
              {personalInfo.title}
            </p>
            <div className="flex gap-4">
              <a
                href="#projeler"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Projelerimi Gör
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/Yusuf OKKAY.pdf"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all flex items-center gap-2"
              >
                CV İndir
                <Download className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative animate-float">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
              alt={personalInfo.name}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}