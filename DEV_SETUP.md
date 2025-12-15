# Development Setup Guide

## Quick Start

To run your portfolio locally, you need to start both the frontend and backend servers.

### Terminal 1 - Backend Server
```bash
cd backend
npm install
npm run dev
```
This will start the Express server on http://localhost:5000

### Terminal 2 - Frontend Server  
```bash
cd frontend
npm install
npm run dev
```
This will start the React app on http://localhost:3000

## Environment Configuration

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:5000
```

### Backend (.env)
```
PORT=5000
ALLOWED_ORIGIN=http://localhost:3000
SMTP_HOST=smtp.zoho.in
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@zohomail.in
SMTP_PASS=your-app-password
CONTACT_TO=your-email@zohomail.in
```

## Testing the Contact Form

1. Make sure both servers are running
2. Open http://localhost:3000 in your browser
3. Navigate to the contact section
4. Fill out and submit the form
5. Check the backend terminal for email sending logs

## Common Issues

- **404 on /api/contact**: Backend server not running or wrong VITE_API_BASE_URL
- **CORS errors**: Check ALLOWED_ORIGIN in backend .env matches frontend URL
- **Email not sending**: Verify SMTP credentials in backend .env