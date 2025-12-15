# Deployment Guide

This project consists of separate frontend and backend folders that need to be deployed to different platforms.

## Project Structure

```
port/
├── frontend/          # React app (deploy to Vercel)
├── backend/           # Express API (deploy to Render)
└── DEPLOYMENT.md      # This file
```

## Backend Deployment (Render)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Separate frontend and backend for deployment"
   git push origin main
   ```

2. **Create a new Web Service on Render:**
   - Go to [render.com](https://render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Root Directory:** `backend`
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Environment:** Node

3. **Set Environment Variables on Render:**
   ```
   ALLOWED_ORIGIN=https://your-vercel-domain.vercel.app
   SMTP_HOST=smtp.zoho.in
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your-email@zohomail.in
   SMTP_PASS=your-app-password
   CONTACT_TO=your-email@zohomail.in
   ```

## Frontend Deployment (Vercel)

1. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - **Root Directory:** `frontend`
     - **Framework Preset:** Vite
   - Set Environment Variables:
     ```
     VITE_API_BASE_URL=https://your-render-app.onrender.com
     ```

2. **Update CORS after deployment:**
   - After Vercel gives you a domain, update the `ALLOWED_ORIGIN` on Render to your Vercel URL

## Local Development

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Important Notes

- Backend will be available at: `https://your-app.onrender.com`
- Frontend will be available at: `https://your-app.vercel.app`
- Make sure to update CORS origins after getting the final URLs
- Each folder has its own package.json and dependencies