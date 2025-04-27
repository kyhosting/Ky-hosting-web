const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Halaman Utama
router.get('/', (req, res) => {
    res.render('index');
});

// Tentang Kami
router.get('/about', (req, res) => {
    res.render('about');
});

// Layanan
router.get('/services', (req, res) => {
    res.render('services');
});

// Kontak
router.get('/contact', (req, res) => {
    res.render('contact');
});

// Handle Form Kontak
router.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Pesan dari ${name}`,
            text: message,
        });
        res.send('Pesan terkirim! Terima kasih.');
    } catch (error) {
        console.error(error);
        res.send('Terjadi kesalahan saat mengirim pesan.');
    }
});

module.exports = router;