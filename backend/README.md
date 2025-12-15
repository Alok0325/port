# Portfolio Backend

Express.js backend API for Alok Prajapati's portfolio website.

## Features

- Contact form API endpoint
- Email sending via Nodemailer
- CORS configuration
- Environment-based configuration

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file with required variables:
   ```
   PORT=5000
   ALLOWED_ORIGIN=your-frontend-url
   SMTP_HOST=smtp.zoho.in
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your-email@zohomail.in
   SMTP_PASS=your-app-password
   CONTACT_TO=your-email@zohomail.in
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Deployment

Deploy to Render or any Node.js hosting platform.

## API Endpoints

- `POST /api/contact` - Send contact form email
- `GET /api/health` - Health check endpoint