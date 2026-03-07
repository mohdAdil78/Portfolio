# 🚀 Mohammed Adil Portfolio - Setup & Run Guide

## 📋 Prerequisites

Make sure you have Node.js installed (v16 or higher):
```bash
node --version
npm --version
```

## 🔧 Setup Instructions

### 1. Install Dependencies
```bash
cd "c:/Users/admin/Desktop/portfolio/New folder/portja"
npm install
```

### 2. Configure Environment
Edit `.env` file with your email credentials:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-recipient-email@gmail.com
```

## ▶️ Run Methods

### Method 1: Using Start Script (Recommended)
```bash
# Double-click start.bat or run:
start.bat
```

### Method 2: Manual Start
```bash
# Terminal 1 - Backend
cd "c:/Users/admin/Desktop/portfolio/New folder/portja"
node server.js

# Terminal 2 - Frontend  
cd "c:/Users/admin/Desktop/portfolio/New folder/portja"
npm run dev
```

### Method 3: Individual Commands
```bash
# Frontend only
npm run dev

# Backend only
node server.js
```

## 🌐 Access URLs

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## ✅ Features Ready

### ✨ Frontend Features
- **Hero Section**: Professional profile with skill tags
- **About Section**: Stats cards with navigation
- **Portfolio**: Projects, Certificates, Education, Tech Stack
- **Contact Form**: Dark theme, IP capture, validation
- **Responsive**: Mobile, tablet, desktop optimized
- **Dark Theme**: Consistent glassmorphism design

### 🔧 Backend Features
- **Contact API**: Secure form submission
- **IP Capture**: Address logging for security
- **Email Notifications**: Gmail SMTP integration
- **Validation**: Input sanitization and error handling
- **CORS**: Cross-origin resource sharing

## 📧 Contact Form Setup

1. **Enable 2-Step Verification** on your Google Account
2. **Generate App Password**: https://myaccount.google.com/apppasswords
3. **Update .env file** with your credentials
4. **Restart servers** to apply changes

## 🐛 Troubleshooting

### Frontend Issues
```bash
# Clear cache
npm run build
npm run dev

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Backend Issues
```bash
# Check environment variables
echo $EMAIL_USER
echo $EMAIL_PASS

# Test email service
curl http://localhost:5000/api/health
```

### Port Conflicts
```bash
# Kill processes on ports
netstat -ano | findstr :5173
netstat -ano | findstr :5000

# Change ports if needed
# Edit .env: PORT=5001
# Edit vite.config.js: server.port=5174
```

## 🎯 Testing

### Test Contact Form
1. Navigate to http://localhost:5173#contact
2. Fill out the form with test data
3. Check console for IP logging
4. Verify email receipt

### Test All Features
- **Navigation**: Smooth scrolling between sections
- **Certificates**: Lightbox functionality
- **Education**: Timeline display
- **Tech Stack**: Icon grid layout
- **Responsive**: Test on different screen sizes

## 📱 Mobile Testing

Use browser dev tools or test on actual devices:
- Chrome DevTools: Device Mode
- Firefox: Responsive Design Mode
- Safari: Develop > Enter Responsive Design Mode

## 🚀 Production Deployment

### Frontend Build
```bash
npm run build
# Deploy dist/ folder to hosting service
```

### Backend Deployment
```bash
# Set NODE_ENV=production
# Configure production environment variables
# Deploy to hosting service (Heroku, Vercel, etc.)
```

## 🔒 Security Notes

- **IP addresses** are logged for security purposes only
- **Email credentials** should never be committed to git
- **Input validation** prevents XSS and injection attacks
- **CORS** is configured for your frontend domain

## 📞 Support

If you encounter issues:
1. Check console logs for errors
2. Verify environment variables
3. Ensure all dependencies are installed
4. Test with different browsers

---

**🌟 Your portfolio is now ready to showcase your professional work!**
