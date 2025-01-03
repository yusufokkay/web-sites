import React, { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert('Mesajınız başarıyla gönderildi.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Mesaj gönderilirken bir hata oluştu.');
      }
    } catch (error) {
      alert('Mesaj gönderilirken bir hata oluştu.');
    }
  };

  return (
    <section id="iletisim" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">İletişim</h2>
          <p className="text-xl text-gray-600">Projeleriniz için benimle iletişime geçin</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mesaj
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              Mesaj Gönder
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">Veya direkt e-posta gönderin:</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-2 inline-flex items-center gap-2 text-purple-600 hover:text-purple-700"
            >
              <Mail className="h-5 w-5" />
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}