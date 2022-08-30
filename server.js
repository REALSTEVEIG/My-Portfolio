require('dotenv').config()
const path = require('path')
const express = require('express')
const server = express()
const connectDB = require('./db/connect')
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const expressRateLimitter = require('express-rate-limit')
const submitRouter = require('./route/submit')

server.set('view engine', 'pug');
server.set('views', path.join(__dirname, 'views'))
server.use(express.static('./public'))
server.use(express.json())
server.set('trust proxy', 1)
server.use(cors())
server.use(helmet())
server.use(xss())
server.use(expressRateLimitter({windowsMs : 60 *1000, max : 60}))
/*server.use('/', (req, res) => {
    res.render('./public')
})*/
server.use('/submit', submitRouter)
const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        server.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()