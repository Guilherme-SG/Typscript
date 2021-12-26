import dotenv from 'dotenv'
dotenv.config()

console.log("Server online")

import app from './app'

app.listen(process.env.APP_PORT)