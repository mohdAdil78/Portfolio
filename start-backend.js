#!/usr/bin/env node

console.log('🔧 Starting Backend Server...');
console.log('📍 Working directory:', process.cwd());
console.log('📦 Node.js version:', process.version);

try {
  // Check if required modules are available
  console.log('\n📋 Checking dependencies...');
  const express = require('express');
  console.log('✅ Express loaded:', express.version);
  
  const cors = require('cors');
  console.log('✅ CORS loaded');
  
  const dotenv = require('dotenv');
  console.log('✅ dotenv loaded');
  
  // Load environment variables
  dotenv.config();
  console.log('✅ Environment variables loaded');
  
  // Create Express app
  const app = express();
  const PORT = process.env.PORT || 5000;
  
  // Middleware
  app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));
  
  // Request logging middleware
  app.use((req, res, next) => {
    console.log(`📥 ${req.method} ${req.path} - IP: ${req.ip || req.connection.remoteAddress}`);
    next();
  });
  
  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      service: 'Portfolio Contact API',
      port: PORT
    });
  });
  
  // Simple test endpoint
  app.get('/api/test', (req, res) => {
    res.json({
      message: 'Backend is working!',
      timestamp: new Date().toISOString(),
      ip: req.ip || req.connection.remoteAddress
    });
  });
  
  // Contact endpoint (simplified version for testing)
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Get client IP
      const getClientIP = (req) => {
        return req.headers['x-forwarded-for']?.split(',')[0] || 
               req.headers['x-real-ip'] || 
               req.connection?.remoteAddress || 
               req.socket?.remoteAddress ||
               req.ip ||
               'unknown';
      };
      
      const clientIP = getClientIP(req);
      const timestamp = new Date().toISOString();
      
      // Log the submission
      console.log('📨 Contact form submission:', {
        timestamp,
        ip: clientIP,
        name: name?.trim(),
        email: email?.trim(),
        messageLength: message?.trim().length
      });
      
      // Basic validation
      if (!name || name.trim().length < 2) {
        return res.status(400).json({
          success: false,
          message: 'Name must be at least 2 characters long',
          errors: ['Name must be at least 2 characters long']
        });
      }
      
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
          success: false,
          message: 'Please provide a valid email address',
          errors: ['Please provide a valid email address']
        });
      }
      
      if (!message || message.trim().length < 10) {
        return res.status(400).json({
          success: false,
          message: 'Message must be at least 10 characters long',
          errors: ['Message must be at least 10 characters long']
        });
      }
      
      // Success response
      res.status(200).json({
        success: true,
        message: 'Message received successfully!',
        data: {
          timestamp,
          ip: clientIP
        }
      });
      
    } catch (error) {
      console.error('❌ Error in contact endpoint:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  });
  
  // 404 handler
  app.use('*', (req, res) => {
    res.status(404).json({
      success: false,
      message: 'Endpoint not found',
      path: req.originalUrl
    });
  });
  
  // Global error handler
  app.use((error, req, res, next) => {
    console.error('❌ Unhandled error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  });
  
  // Start server
  app.listen(PORT, '0.0.0.0', () => {
    console.log('\n🚀 Backend Server Started Successfully!');
    console.log(`📍 Server running on: http://localhost:${PORT}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🧪 Test endpoint: http://localhost:${PORT}/api/test`);
    console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
    console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
    console.log('\n✅ Server is ready to accept requests!');
    console.log('💡 Press Ctrl+C to stop the server\n');
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Server terminated');
    process.exit(0);
  });
  
} catch (error) {
  console.error('❌ Failed to start server:', error.message);
  console.error('📍 Stack trace:', error.stack);
  console.error('\n🔧 Possible solutions:');
  console.error('1. Make sure you are in the correct directory');
  console.error('2. Run: npm install');
  console.error('3. Check if Node.js is properly installed');
  process.exit(1);
}
