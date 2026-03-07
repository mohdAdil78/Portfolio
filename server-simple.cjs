const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/contact', (req, res) => {
  console.log('Contact form submission received:', req.body);
  
  // Validate input
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }
  
  // Demo mode - just log the message
  console.log(`
    === NEW CONTACT MESSAGE ===
    From: ${name} (${email})
    Message: ${message}
    ============================
  `);
  
  res.json({ 
    success: true, 
    message: 'Message received successfully! (Demo mode - no email sent)' 
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`📧 Email config: ${process.env.EMAIL_USER ? '✓ Configured' : '✗ Not configured'}`);
});
