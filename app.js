const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const app = express();
const mainRoutes = require('./routes/main');

dotenv.config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', mainRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});