import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export const CV = () => {
  const handleDownload = () => {
    // CV dosyasının URL'si
    const cvUrl = 'C:\\Users\\MONSTER\\Desktop\\Yusuf OKKAY.pdf';
    
    // Yeni bir anchor elementi oluştur
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Yusuf_OKKAY_CV.pdf'; // İndirilen dosyanın adı
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    frontend: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma'],
    softSkills: ['Problem Çözme', 'Takım Çalışması', 'İletişim', 'Proje Yönetimi']
  };

  const experiences = [
    {
      company: "Ono Yazılım A.Ş.",
      position: "Backend Developer",
      period: "2023",
      achievements: [
        "Mikroservis mimarisi ile ölçeklenebilir backend sistemleri geliştirdim",
        "React ve TypeScript ile modern web uygulamaları oluşturdum",
      ]
    },
    {
      company: "Ono Yazılım A.Ş.",
      position: "Frontend Developer",
      period: "2024- Şimdi",
      achievements: [
        "Vue.js ile kullanıcı arayüzleri geliştirdim",
        "Performance optimizasyonları ile sayfa yüklenme hızını %40 artırdım",
        "A/B testleri ile kullanıcı deneyimini iyileştirdim"
      ]
    }
  ];

  return (
    <section id="cv" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          CV & Deneyim
        </motion.h2>
        
        <div className="text-center mb-12">
          <motion.button
            onClick={handleDownload}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            <Download className="w-5 h-5" />
            CV'mi İndir
          </motion.button>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Deneyim Bölümü */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Deneyim</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h4 className="font-semibold text-lg">{exp.company}</h4>
                <p className="text-purple-600">{exp.position}</p>
                <p className="text-gray-600 text-sm mb-2">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Yetenekler Bölümü */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Yetenekler</h3>
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h4 className="font-semibold text-lg capitalize mb-3">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};