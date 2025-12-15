# Alok Prajapati Portfolio

A modern, responsive portfolio website with separate frontend and backend deployments.

## Project Structure

```
port/
├── frontend/              # React app (Vite + Tailwind + Framer Motion)
├── backend/               # Express.js API server
├── DEPLOYMENT.md          # Deployment instructions
└── README.md              # This file
```

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- React Icons

### Backend
- Node.js with Express.js
- Nodemailer for email functionality
- CORS for cross-origin requests

## Quick Start

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Development
```bash
cd backend
npm install
npm run dev
```

## Deployment

This project is designed for separate deployments:

- **Frontend**: Deploy to Vercel
- **Backend**: Deploy to Render

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## Features

- Modern responsive design
- Contact form with email integration
- Portfolio project showcase
- Skills and experience sections
- Smooth animations and transitions
- SEO optimized

## Environment Setup

Each folder has its own `.env` file:

**Frontend** (`frontend/.env`):
```
VITE_API_BASE_URL=your-backend-url
```

**Backend** (`backend/.env`):
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

## License

MIT License - feel free to use this project as a template for your own portfolio!