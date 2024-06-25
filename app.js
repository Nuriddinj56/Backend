require('dotenv').config
const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const requireTime = require('./middlewares/request-time');

const app = express();

app.use(express.json());
app.use(express.static('static'))
app.use(fileUpload({}))
app.use(requireTime)

// Router
app.use('/api/post',require('./router/post.route'))
app.use('/api/auth', require('./router/auth.router'))

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
