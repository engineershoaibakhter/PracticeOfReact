const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const contact = require('./contact/contact');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
app.get('/', (req, res) => {
    res.send('Hello, this is the home page!');
});
app.use('/contact', contact);
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});
