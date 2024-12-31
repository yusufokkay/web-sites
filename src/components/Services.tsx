import React from 'react';
import { Code, Palette, Globe, MessageSquare, Phone } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Geliştirme",
    description: "Modern ve responsive web siteleri geliştiriyoruz."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Tasarım",
    description: "Kullanıcı odaklı arayüz ve deneyim tasarımları."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Dijital Pazarlama",
    description: "SEO ve sosyal medya stratejileri."
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Danışmanlık",
    description: "Teknoloji ve dijital dönüşüm danışmanlığı."
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Mobil Uygulama Geliştirme",
    description: "Mobil uygulamalarınızı geliştiriyoruz."
  }
];

export default function Services() {
  return (
    <div id="hizmetler" className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">Hizmetlerimiz</h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 font-light">Size özel profesyonel çözümler sunuyoruz</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-600 to-purple-600 transform origin-left group-hover:scale-x-full transition-transform duration-500 ease-out opacity-20 group-hover:opacity-10"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-50 text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-tl-full transform translate-x-8 translate-y-8"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}