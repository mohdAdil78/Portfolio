const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

// Load environment variables
dotenv.config();

console.log('🔧 Starting server...');
console.log('📧 Environment check:', {
  EMAIL_USER: process.env.EMAIL_USER ? '✓' : '✗',
  EMAIL_PASS: process.env.EMAIL_PASS ? '✓' : '✗',
  RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL ? '✓' : '✗'
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Validate environment variables
const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASS', 'RECIPIENT_EMAIL'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
  console.error('Please update your .env file with the following:');
  console.error('- EMAIL_USER: Your Gmail address');
  console.error('- EMAIL_PASS: Your Gmail App Password');
  console.error('- RECIPIENT_EMAIL: Where to receive messages');
  console.error('\nInstructions:');
  console.error('1. Enable 2-Step Verification on your Google Account');
  console.error('2. Generate an App Password: https://myaccount.google.com/apppasswords');
  console.error('3. Update the .env file with your credentials');
  // Don't exit in development, just show warning
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
}

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Email server connection failed:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Input validation function
const validateContactForm = (name, email, message) => {
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Please provide a valid email address');
  }

  if (!message || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  if (message && message.length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }

  return errors;
};

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    const validationErrors = validateContactForm(name, email, message);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Portfolio Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7C7CFF, #38BDF8); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">New Contact Message</h2>
          </div>
          <div style="background: #05070F; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #E5E7EB; margin: 0 0 5px 0;">From:</h3>
              <p style="color: #94A3B8; margin: 0; font-size: 16px;">
                <strong style="color: #7C7CFF;">${name}</strong> &lt;${email}&gt;
              </p>
            </div>
            <div style="margin-bottom: 20px;">
              <h3 style="color: #E5E7EB; margin: 0 0 10px 0;">Message:</h3>
              <div style="background: rgba(255,255,255,0.06); padding: 20px; border-radius: 8px; border-left: 4px solid #7C7CFF;">
                <p style="color: #E5E7EB; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
              <p style="color: #64748B; margin: 0; font-size: 12px; text-align: center;">
                Sent from portfolio contact form on ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to sender (optional)
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7C7CFF, #38BDF8); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">Message Received!</h2>
          </div>
          <div style="background: #05070F; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid rgba(255,255,255,0.1);">
            <p style="color: #E5E7EB; margin: 0 0 20px 0; line-height: 1.6;">
              Hi ${name},
            </p>
            <p style="color: #94A3B8; margin: 0 0 20px 0; line-height: 1.6;">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible.
            </p>
            <div style="background: rgba(255,255,255,0.06); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #64748B; margin: 0; font-size: 14px; font-style: italic;">
                Your message: "${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"
              </p>
            </div>
            <p style="color: #94A3B8; margin: 20px 0 0 0; line-height: 1.6;">
              Best regards,<br>
              Portfolio Team
            </p>
          </div>
        </div>
      `
    };

    // Send confirmation (don't wait for it to complete)
    transporter.sendMail(confirmationMailOptions).catch(err => {
      console.warn('Failed to send confirmation email:', err);
    });

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Portfolio Contact API'
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Start server
try {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📧 Email service configured`);
    console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  });
} catch (error) {
  console.error('❌ Failed to start server:', error.message);
  process.exit(1);
}
