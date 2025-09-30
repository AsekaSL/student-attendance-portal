const express = require('express');
const cors = require('cors');
const studentRouter = require('./routers/studentRoutes.js')


const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/student', studentRouter)


module.exports = app;