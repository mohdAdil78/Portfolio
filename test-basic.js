console.log('Starting basic test...');

try {
  const express = require('express');
  console.log('✓ Express loaded');
  
  const app = express();
  const PORT = 5000;
  
  app.get('/test', (req, res) => {
    res.json({ message: 'Server is working!' });
  });
  
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
  
} catch (error) {
  console.error('❌ Error:', error.message);
}
