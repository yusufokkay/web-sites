const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // dotenv paketini yükleyin

// MongoDB bağlantısı
mongoose.connect('mongodb://127.0.0.1:27017/contactDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB bağlantısı başarılı');
}).catch((err) => {
  console.error('MongoDB bağlantısı başarısız:', err);
});

// Şema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model('Contact', contactSchema);

// Express ayarları
const app = express();
app.use(cors());
app.use(express.json());

// Nodemailer taşıyıcı
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Çevresel değişkenlerden alınan e-posta adresi
    pass: process.env.EMAIL_PASS, // Çevresel değişkenlerden alınan e-posta şifresi
  },
});

// Form verilerini alıp kaydetme ve e-posta gönderme
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Veritabanına kaydet
  await Contact.create({ name, email, message });

  // E-posta içeriği
  const mailOptions = {
    from: process.env.EMAIL_USER, // Gönderici olarak sizin e-posta adresiniz
    to: process.env.EMAIL_TO, // Alıcı e-posta adresi (sizin e-posta adresiniz)
    subject: 'Yeni İletişim Formu Mesajı',
    text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('E-posta gönderilemedi:', error);
    res.status(500).json({ success: false, error: 'E-posta gönderilemedi.' });
  }
});

app.listen(4000, () => {
  console.log('Sunucu http://localhost:4000 üzerinde çalışıyor.');
});