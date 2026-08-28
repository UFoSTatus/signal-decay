# Signal Decay - Deploy to Azure Static Web Apps

$appName = "signal-decay"
$resourceGroup = "signal-decay-rg"
$location = "eastus2"

Write-Host ""
Write-Host "  SIGNAL DECAY - Azure Deployment" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check if Azure CLI is installed
if (-not (Get-Command az -ErrorAction SilentlyContinue)) {
    Write-Host "  [!] Azure CLI not found. Run: winget install Microsoft.AzureCLI" -ForegroundColor Yellow
    exit
}

# Step 2: Login to Azure
Write-Host "  [1/5] Logging into Azure..." -ForegroundColor Green
az login 2>$null

# Step 3: Create resource group
Write-Host "  [2/5] Creating resource group..." -ForegroundColor Green
az group create --name $resourceGroup --location $location 2>$null | Out-Null

# Step 4: Create Static Web App
Write-Host "  [3/5] Creating Static Web App..." -ForegroundColor Green
az staticwebapp create --name $appName --resource-group $resourceGroup --location $location --sku Free 2>$null | Out-Null

# Get hostname
$hostname = az staticwebapp show --name $appName --resource-group $resourceGroup --query "defaultHostname" -o tsv 2>$null
if ($hostname) {
    Write-Host "  URL: https://$hostname" -ForegroundColor Green
} else {
    Write-Host "  [!] Could not get hostname. App may still be provisioning..." -ForegroundColor Yellow
}

# Step 5: Get deployment token
Write-Host "  [4/5] Getting deployment token..." -ForegroundColor Green
$token = az staticwebapp secrets list --name $appName --resource-group $resourceGroup --query "properties.apiKey" -o tsv 2>$null

if (-not $token) {
    Write-Host "  [!] Could not get token. Try again in a minute." -ForegroundColor Yellow
    exit
}

# Step 6: Deploy
Write-Host "  [5/5] Deploying files..." -ForegroundColor Green

# Install SWA CLI if needed
if (-not (Get-Command swa -ErrorAction SilentlyContinue)) {
    Write-Host "  Installing SWA CLI..." -ForegroundColor Yellow
    npm install -g @azure/static-web-apps-cli
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
swa deploy $scriptDir --deployment-token $token --env production

Write-Host ""
Write-Host "  DEPLOYED!" -ForegroundColor Green
Write-Host "  URL: https://$hostname" -ForegroundColor Green
Write-Host "  Open on phone to install as app." -ForegroundColor White
Write-Host ""

# Save token
$tokenFile = Join-Path $scriptDir ".azure-deploy-token"
$token | Out-File -FilePath $tokenFile -Encoding utf8
Write-Host "  Token saved for REDEPLOY.bat" -ForegroundColor Gray
