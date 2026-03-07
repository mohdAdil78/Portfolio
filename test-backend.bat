@echo off
title Test Backend Server
color 0E
echo.
echo ========================================
echo   Testing Backend Server
echo ========================================
echo.

cd /d "c:/Users/admin/Desktop/portfolio/New folder/portja"

echo Testing server startup...
echo.

node -e "
try {
  require('./server.js');
  console.log('✅ Server file loaded successfully');
} catch (error) {
  console.error('❌ Error loading server:', error.message);
  process.exit(1);
}
"

echo.
echo If no errors appeared above, the server should start correctly.
echo.
echo To start the server manually, run:
echo   node server.js
echo.
pause
