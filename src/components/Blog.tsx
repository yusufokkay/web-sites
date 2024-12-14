import React from 'react';
import { blogPosts } from '../data/blog';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-xl text-gray-600">Teknoloji ve yazılım üzerine yazılarım</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4" />
                  <time>{post.date}</time>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={post.url}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 gap-1"
                >
                  Devamını Oku
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}