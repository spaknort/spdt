require('dotenv').config()

import express from "express"
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser"
import router from './router'

const PORT = process.env.PORT || 7000
const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router)

const start = async () => {
    try {       
        app.listen(PORT, () => console.log(`Server run on port = ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()