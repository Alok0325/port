import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

/* ========= CORS (SIMPLE & SAFE) ========= */
app.use((req, res, next) => {
  const origin = req.headers.origin

  // header tabhi set hoga jab origin exist kare
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // preflight request
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204)
  }

  next()
})

/* ========= MIDDLEWARE ========= */
app.use(express.json())

/* ========= MAILER ========= */
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
  const { name, email, message } = req.body || {}

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

    return res.json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ ok: false })
  }
})

/* ========= START ========= */
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
