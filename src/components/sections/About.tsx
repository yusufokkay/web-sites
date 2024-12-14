import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap } from 'lucide-react';
import { AnimatedText } from '../ui/AnimatedText';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedText
          text="Hakkımda"
          className="text-4xl font-bold text-center mb-12"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Ben Kimim?</h3>
            <p className="text-gray-600 leading-relaxed">
              Yazılım geliştirme tutkusu ile hareket eden bir Full Stack Developer'ım. 
              Modern web teknolojileri konusunda uzmanlaşmış ve sürekli kendini geliştiren
              bir yazılım mühendisiyim.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code2 className="w-6 h-6 text-blue-600" />
                <span>Full Stack Development</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <span>3+ Yıl Deneyim</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <span>Web Tasarım ve Kodlama</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Yeteneklerim</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'JavaScript/TypeScript',
                'React.js',
                'Node.js',
                'Python',
                'SQL',
                'MongoDB',
                'Docker',
                'AWS'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-3 rounded-lg text-center hover:bg-blue-50 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};