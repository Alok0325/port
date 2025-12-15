import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

/* ========= CORS (FINAL, SIMPLE) ========= */
app.use((req, res, next) => {
  const origin = req.headers.origin

  const allowedOrigins = process.env.ALLOWED_ORIGIN
    ? process.env.ALLOWED_ORIGIN.split(',').map(o => o.trim())
    : ['http://localhost:5173']

  if (!origin || allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  }

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204)
  }

  next()
})

/* ========= MIDDLEWARE ========= */
app.use(express.json())

/* ========= MAIL SETUP ========= */
const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

/* ========= ROUTES ========= */
app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'All fields required' })
  }

  try {
    await mailer.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Message from ${name}`,
      text: message,
    })

    res.json({ ok: true })
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Mail failed' })
  }
})

/* ========= START ========= */
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
