@echo off
title Signal Decay — Local Server
echo.
echo  ╔══════════════════════════════════════════╗
echo  ║   SIGNAL DECAY — Universe Reader         ║
echo  ║   Starting local server on port 8080...  ║
echo  ╚══════════════════════════════════════════╝
echo.
echo  Opening Chrome in 3 seconds...
echo  Press Ctrl+C to stop the server.
echo.

cd /d "%~dp0"

:: Open Chrome after a short delay
start "" cmd /c "timeout /t 3 >nul && start chrome http://localhost:8080"

:: Start Python HTTP server
python -m http.server 8080
