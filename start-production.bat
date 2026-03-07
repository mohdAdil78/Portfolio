@echo off
title Portfolio Production Ready
color 0A
echo.
echo ========================================
echo   Portfolio Contact Form - Production Ready
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Starting Backend Server...
cd /d "c:/Users/admin/Desktop/portfolio/New folder/portja"
start "Backend Server" cmd /k "node server.js"

echo Waiting for backend to start...
timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ✅ Both servers are starting...
echo.
echo 📧 Email: mohdadil9cse@gmail.com
echo 🔐 Gmail App Password: Configured
echo 🌐 IP Capture: Enabled
echo 🎨 Dark Theme: Fixed
echo.
echo Press any key to exit...
pause >nul
