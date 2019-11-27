import express from 'express'
import next from 'next'
import path from 'path'
import bodyParser from 'body-parser'
import apiRouter from './apiRouter'
import nextRouter from './nextRouter'

const dev = process.env.NODE_ENV !== 'production'
const nextDir = `${path.relative(process.cwd(), path.dirname(__dirname))}/app`
const nextConf = { dev }

if(dev) nextConf.dir = nextDir
else nextConf.conf = { distDir: nextDir }

const app = next(nextConf)

const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use('/api', apiRouter)

app.prepare().then(() => {
    nextRouter(app, server)
})

server.use('/static', express.static(`${path.dirname(__dirname)}/static`))

export { server as App }
