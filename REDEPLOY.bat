@echo off
title Signal Decay — Quick Redeploy to Azure
echo.
echo  Redeploying to Azure Static Web Apps...
echo.

cd /d "%~dp0"

if not exist ".azure-deploy-token" (
    echo  [!] No deploy token found. Run DEPLOY_AZURE.ps1 first.
    pause
    exit /b
)

set /p TOKEN=<.azure-deploy-token
swa deploy . --deployment-token %TOKEN% --env production

echo.
echo  ✅ Redeployed! Changes are live.
pause
