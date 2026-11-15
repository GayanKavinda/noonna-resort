# ============================================================
# Noonna Resort - Cloudflare Tunnel Deploy Helper
# Usage: .\deploy-tunnel.ps1 -TunnelUrl "https://xxx.trycloudflare.com"
# ============================================================

param(
    [Parameter(Mandatory=$true)]
    [string]$TunnelUrl
)

Write-Host "Setting NEXT_PUBLIC_SITE_URL=$TunnelUrl" -ForegroundColor Cyan

# Update .env.local
$envContent = Get-Content .env.local -Raw
$envContent = $envContent -replace 'NEXT_PUBLIC_SITE_URL=.*', "NEXT_PUBLIC_SITE_URL=$TunnelUrl"
Set-Content .env.local $envContent -NoNewline

Write-Host "Building..." -ForegroundColor Yellow
npx next build

Write-Host ""
Write-Host "Build done! Now run: npx next start" -ForegroundColor Green
Write-Host "Then in a new terminal run: cloudflared tunnel --url http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "Share this WhatsApp link (append ?v=1 to bust cache):" -ForegroundColor Cyan
Write-Host "$TunnelUrl/?v=1" -ForegroundColor White
