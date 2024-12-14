import React from 'react';
import { Code, Palette, Globe, MessageSquare,Phone } from 'lucide-react';

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
    icon : <Phone className="h-8 w-8" />,
    title:"Mobil Uygulama Geliştirme",
    description:"Mobil uygulamalarınızı geliştiriyoruz."
  }
];

export default function Services() {
  return (
    <div id="hizmetler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600">Size özel profesyonel çözümler sunuyoruz</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group"
            >
              <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}