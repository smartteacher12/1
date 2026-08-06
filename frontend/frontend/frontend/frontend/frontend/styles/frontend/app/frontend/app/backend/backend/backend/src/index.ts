import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV || 'development' })
})

// Placeholder auth route
app.post('/api/auth/login', (req, res) => {
  // TODO: Implement login with JWT
  res.status(501).json({ message: 'Not implemented yet' })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`)
})
