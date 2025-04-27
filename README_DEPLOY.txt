# Panduan Deploy ProBiz Website ke Render.com

1. Buat akun di https://render.com
2. Upload semua isi folder ini ke GitHub (bisa lewat upload manual atau push git).
3. Buat Web Service di Render:
   - Build Command: npm install
   - Start Command: npm start
4. Setting Environment Variables di Render:
   - EMAIL_USER = yourgmail@gmail.com
   - EMAIL_PASS = yourapppassword

5. Klik Deploy.

# Catatan
- Untuk EMAIL_PASS gunakan App Password Gmail, bukan password biasa.
- Jika ingin mengubah nomor WhatsApp, edit di file: views/partials/navbar.ejs
- TailwindCSS sudah include via CDN, tidak perlu build manual.

Good luck, ProBiz!