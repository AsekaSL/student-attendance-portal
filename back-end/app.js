const express = require('express');
const cors = require('cors');
const studentRouter = require('./routers/studentRoutes.js')
const authRouter = require('./routers/authRouters.js')
const adminRouter = require('./routers/adminRoutes.js')
const sessionRouter = require('./routers/SessionRoutes.js')
const attendRouter = require('./routers/attendanceRoutes.js')
const cookieParser = require('cookie-parser')


const app = express();

const allowedOrigins = ['http://localhost:5173']

app.use(cors({origin: allowedOrigins, credentials: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/student', studentRouter)
app.use('/api/admin', adminRouter)
app.use('/api/session', sessionRouter)
app.use('/api/attendance', attendRouter)

module.exports = app;