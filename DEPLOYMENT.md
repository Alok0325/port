# Deployment Guide

This project consists of a React frontend and Express backend that need to be deployed separately.

## Backend Deployment (Render)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup for Render and Vercel deployment"
   git push origin main
   ```

2. **Create a new Web Service on Render:**
   - Go to [render.com](https://render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Build Command:** `npm install`
     - **Start Command:** `npm run server`
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

1. **Update your .env file:**
   ```
   VITE_API_BASE_URL=https://your-render-app.onrender.com
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Set Environment Variables:
     ```
     VITE_API_BASE_URL=https://your-render-app.onrender.com
     ```

3. **Update CORS after deployment:**
   - After Vercel gives you a domain, update the `ALLOWED_ORIGIN` on Render to your Vercel URL
   - Update your local `.env` file with the correct URLs

## Important Notes

- The backend will be available at: `https://your-app.onrender.com`
- The frontend will be available at: `https://your-app.vercel.app`
- Make sure to update CORS origins after getting the final URLs
- Render may take a few minutes to start up on the first request (free tier)