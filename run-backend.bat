@echo off
title Backend Server - Portfolio Contact API
color 0A
echo.
echo ========================================
echo   Portfolio Backend Server
echo ========================================
echo.
echo Starting server on http://localhost:5000
echo.

cd /d "c:/Users/admin/Desktop/portfolio/New folder/portja"

echo Checking Node.js...
node --version
if errorlevel 1 (
    echo ERROR: Node.js not found!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo.
echo Starting backend server...
echo.
node start-backend.js

echo.
echo Server stopped.
pause
