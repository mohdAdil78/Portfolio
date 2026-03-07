#!/usr/bin/env node

console.log('🧪 Testing server startup...');

try {
  // Test if we can load the server without errors
  console.log('📦 Loading server modules...');
  
  const express = require('express');
  console.log('✅ Express loaded');
  
  const cors = require('cors');
  console.log('✅ CORS loaded');
  
  const dotenv = require('dotenv');
  console.log('✅ dotenv loaded');
  
  const nodemailer = require('nodemailer');
  console.log('✅ nodemailer loaded');
  
  // Test nodemailer function
  if (typeof nodemailer.createTransport === 'function') {
    console.log('✅ nodemailer.createTransport is available');
  } else {
    console.log('❌ nodemailer.createTransport is not available');
  }
  
  // Load environment
  dotenv.config();
  console.log('✅ Environment loaded');
  
  // Create basic app to test Express setup
  const app = express();
  const PORT = 5001; // Use different port for testing
  
  // Basic middleware
  app.use(cors());
  app.use(express.json());
  
  // Test route
  app.get('/test', (req, res) => {
    res.json({ message: 'Server test successful!' });
  });
  
  // Test 404 handler (without wildcard)
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });
  
  // Start test server
  app.listen(PORT, () => {
    console.log(`✅ Test server running on http://localhost:${PORT}`);
    console.log('🔗 Test endpoint: http://localhost:' + PORT + '/test');
    
    // Auto-close after 2 seconds
    setTimeout(() => {
      console.log('🛑 Test completed successfully!');
      process.exit(0);
    }, 2000);
  });
  
} catch (error) {
  console.error('❌ Server test failed:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}
