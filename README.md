# Alok Prajapati - Portfolio Website

A modern, motion-driven personal portfolio website showcasing the work and expertise of Alok Prajapati, a Full Stack Developer specializing in backend development and scalable systems.

## 🚀 Features

- **Modern Design**: Dark-first theme with electric blue/violet/cyan accents
- **Smooth Animations**: Framer Motion-powered animations and micro-interactions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Fast loading with lazy loading and optimized animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Dark Mode**: Built-in dark mode toggle

## 🛠️ Tech Stack

- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd port
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
port/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── ScrollToTop.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit the following files to update personal details:

- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Contact Section**: `src/components/Contact.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Achievements**: `src/components/Achievements.jsx`

### Update Colors

Modify `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  accent: {
    blue: '#00d4ff',
    violet: '#8b5cf6',
    cyan: '#06b6d4',
  }
}
```

### Add Resume Link

Update the `downloadResume` function in `src/components/Hero.jsx`:

```javascript
const downloadResume = () => {
  window.open('your-resume-link.pdf', '_blank')
}
```

### Update Social Links

Update GitHub and LinkedIn links in:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`

## 🌐 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Deploy: `npm run deploy`

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Alok Prajapati**
- Email: alokprajapati022@gmail.com
- Phone: +91 7054279700
- Location: Lucknow, India

---

Built with ❤️ using React, Vite, and Tailwind CSS
