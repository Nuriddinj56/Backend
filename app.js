require('dotenv').config
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Router
app.use('/api/post',require('./router/post.route'))

const DB_URL =
 'mongodb+srv://nuri93j:JRZRa94Ad24ZBPIk@nube.dqwnabw.mongodb.net/?retryWrites=true&w=majority&appName=nube';
const PORT = 8080;

// const PORT = process.env.DB_URL || 8080
const bootstrap = async () => {
    try {
        await mongoose.connect(DB_URL,).then(()=>console.log('DB connected'));
        app.listen(PORT, () => 
        console.log(`Listening on http://localhost:${PORT}`));
    } catch (error) {
        console.error(`Error connecting to DB: ${error}` );
    }
};

bootstrap();
