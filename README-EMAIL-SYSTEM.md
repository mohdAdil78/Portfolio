# 📧 Complete Contact Form Email System

A full-stack contact form solution with Node.js backend and Nodemailer integration for your portfolio website.

## 🏗️ Architecture

- **Frontend**: React (Vite) with space-themed UI
- **Backend**: Node.js + Express server
- **Email Service**: Nodemailer with Gmail SMTP
- **Environment**: Secure configuration with dotenv

## 🚀 Quick Start

### 1. Backend Setup

```bash
# Install backend dependencies
npm install --save express cors dotenv nodemailer
npm install --save-dev nodemon

# Copy environment configuration
cp .env.example .env

# Edit .env with your Gmail credentials
```

### 2. Gmail Configuration

1. **Enable 2-Step Verification** on your Google Account
2. **Generate App Password**:
   - Go to Google Account → Security → 2-Step Verification
   - Click "App passwords"
   - Select "Mail" and your device
   - Copy the generated password

3. **Update .env file**:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Gmail SMTP Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-generated-app-password
RECIPIENT_EMAIL=your-recipient-email@gmail.com
```

### 3. Start the Servers

```bash
# Start backend server (in terminal 1)
npm run dev

# Start frontend server (in terminal 2)
npm run dev
```

## 📁 File Structure

```
portfolio/
├── server.js                 # Express server with email logic
├── package-server.json       # Backend dependencies
├── .env.example             # Environment template
├── .env                     # Your secrets (don't commit!)
└── src/
    └── pages/
        └── Contact.jsx      # Updated contact form
```

## 🔧 Backend Features

### Express Server (`server.js`)
- ✅ CORS enabled for frontend
- ✅ Input validation and sanitization
- ✅ Professional HTML email templates
- ✅ Error handling and logging
- ✅ Confirmation emails to senders
- ✅ Health check endpoint

### API Endpoints

#### POST `/api/contact`
**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello! I'd like to discuss a project..."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["Email must be valid"]
}
```

#### GET `/api/health`
Health check endpoint for monitoring.

## 🎨 Frontend Features

### Contact Form (`Contact.jsx`)
- ✅ Real-time validation
- ✅ Field-specific error messages
- ✅ Loading states with animations
- ✅ Success/error notifications
- ✅ Character counter for message
- ✅ Disabled state during submission
- ✅ Space-themed Nebula Glass UI

### Form Validation
- **Name**: Minimum 2 characters
- **Email**: Valid email format
- **Message**: 10-2000 characters

## 📧 Email Templates

### Recipient Email
- Professional space-themed design
- Gradient headers matching portfolio
- Structured message display
- Timestamp and sender info

### Confirmation Email
- Automatic reply to sender
- Message preview
- Professional branding

## 🔒 Security Features

- ✅ Environment variables for secrets
- ✅ Input validation and sanitization
- ✅ CORS protection
- ✅ Rate limiting ready (add express-rate-limit)
- ✅ XSS prevention
- ✅ No hardcoded credentials

## 🛠️ Development Scripts

Add to your main `package.json`:

```json
{
  "scripts": {
    "dev:frontend": "vite",
    "dev:backend": "nodemon server.js",
    "dev": "concurrently \"npm run dev:backend\" \"npm run dev:frontend\"",
    "start": "node server.js",
    "build": "vite build"
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}
```

## 🚀 Deployment

### Backend Deployment Options:
1. **Vercel** (Recommended)
2. **Heroku**
3. **Railway**
4. **DigitalOcean**

### Environment Variables for Production:
```env
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://yourdomain.com
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-production-app-password
RECIPIENT_EMAIL=your-recipient@gmail.com
```

## 🐛 Troubleshooting

### Common Issues:

1. **Gmail Authentication Error**:
   - Ensure 2-Step Verification is enabled
   - Generate a new App Password
   - Check EMAIL_USER and EMAIL_PASS in .env

2. **CORS Error**:
   - Verify FRONTEND_URL in .env matches your frontend URL
   - Check backend is running on correct port

3. **Connection Refused**:
   - Ensure backend server is running
   - Check port 5000 is available
   - Verify firewall settings

4. **Form Not Submitting**:
   - Check browser console for errors
   - Verify backend health endpoint: `http://localhost:5000/api/health`

## 📞 Testing

1. **Backend Test**:
```bash
curl http://localhost:5000/api/health
```

2. **Email Test**:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

## 🎯 Next Steps

- Add rate limiting with `express-rate-limit`
- Implement email queue for high volume
- Add file attachment support
- Integrate with email service like SendGrid
- Add analytics for contact form submissions

---

**🌟 Your contact form is now fully functional with professional email delivery!**
