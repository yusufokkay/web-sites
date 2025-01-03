import React from 'react';
import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="referanslar" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Referanslar</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-purple-600 mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}