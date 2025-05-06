import 'dotenv/config'
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import routes from './routes/index.js'
import { connectDB } from './config/connection.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)
const PORT       = Number(process.env.PORT) || 3001

async function start() {
  await connectDB()
  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.static(path.join(__dirname, '../../client/dist')))
  app.use(routes)
  app.listen(PORT, () => console.log(`Listening on ${PORT}`))
}

start().catch(err => {
  console.error('Failed to start server:', err)
  process.exit(1)
})
