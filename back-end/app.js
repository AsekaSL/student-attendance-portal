const express = require('express');
const cors = require('cors');
const studentRouter = require('./routers/studentRoutes.js')
const authRouter = require('./routers/authRouters.js')
const adminRouter = require('./routers/adminRoutes.js')
const cookieParser = require('cookie-parser')


const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/student', studentRouter)
app.use('/api/admin', adminRouter)

module.exports = app;