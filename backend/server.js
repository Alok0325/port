import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000



const allowedOrigins = process.env.ALLOWED_ORIGIN
  ? process.env.ALLOWED_ORIGIN.split(',').map((o) => o.trim())
  : '*'

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server, Postman, curl
      if (!origin) return callback(null, true)

      if (allowedOrigins === '*' || allowedOrigins.includes(origin)) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
)

app.options('*', cors())



app.use(express.json())



const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_TO',
]

const missingEnv = requiredEnv.filter((key) => !process.env[key])
if (missingEnv.length) {
  console.warn(`Missing required env vars: ${missingEnv.join(', ')}`)
}



const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure:
    process.env.SMTP_SECURE === 'true' ||
    Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})



// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

// Contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: 'All fields are required.',
    })
  }

  try {
    // Mail to you
    await mailer.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `
        <p>${message}</p>
        <p>From: <strong>${name}</strong> &lt;${email}&gt;</p>
      `,
    })

    // Auto-reply
    await mailer.sendMail({
      from: `"${process.env.CONTACT_NAME || 'Alok Prajapati'}" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thanks for reaching out!',
      text: `Hi ${name},

Thanks for contacting me. I have received your message and will get back to you soon.

Best regards,
${process.env.CONTACT_NAME || 'Alok Prajapati'}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting me. I have received your message and will get back to you soon.</p>
        <p>Best regards,<br/>${process.env.CONTACT_NAME || 'Alok Prajapati'}</p>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Email send failed:', error)
    return res.status(500).json({
      ok: false,
      error: 'Failed to send message. Please try again later.',
    })
  }
})



app.listen(PORT, () => {
  console.log(`Mail server running on port ${PORT}`)
})
