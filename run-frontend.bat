@echo off
title Frontend Server - Portfolio Website
color 0B
echo.
echo ========================================
echo   Portfolio Frontend Server
echo ========================================
echo.
echo Starting server on http://localhost:5173
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
echo Starting frontend server...
echo.
npm run dev

echo.
echo Frontend server stopped.
pause
