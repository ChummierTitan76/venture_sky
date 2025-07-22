# PowerShell script for running development server
Write-Host "Starting Venture Sky Co. Development Server..." -ForegroundColor Green
Write-Host ""
$env:NODE_ENV = "development"
npx tsx server/index.ts