@echo off
echo Starting Mohammed Adil Portfolio Website...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "node server.js"

echo Waiting for backend to start...
timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Frontend: http://localhost:5173
echo Backend: http://localhost:5000
echo.
echo Press any key to exit...
pause >nul
