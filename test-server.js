console.log('🚀 Starting test server...');

try {
  const express = require('express');
  console.log('✓ Express loaded');
  
  const cors = require('cors');
  console.log('✓ CORS loaded');
  
  const dotenv = require('dotenv');
  console.log('✓ dotenv loaded');
  
  dotenv.config();
  console.log('✓ Environment loaded');
  
  const app = express();
  const PORT = 5000;
  
  app.use(cors());
  app.use(express.json());
  
  app.get('/test', (req, res) => {
    res.json({ message: 'Server is working!' });
  });
  
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📧 Test endpoint: http://localhost:${PORT}/test`);
  });
  
} catch (error) {
  console.error('❌ Error starting server:', error.message);
  console.error(error.stack);
}
