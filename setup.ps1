# React + Vite Portfolio Setup Script
# Run this in PowerShell in the qayumXD.github.io directory

Write-Host "Setting up React + Vite Portfolio..." -ForegroundColor Cyan

# Clean up old files
Write-Host "Cleaning up legacy files..." -ForegroundColor Yellow
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force sass -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force static -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force css -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force calculator -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force odin-recipes -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force rock-paper-scissors -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force landing-page -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force portfolio -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force assets -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force esketch -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
Remove-Item asset-manifest.json -ErrorAction SilentlyContinue
Remove-Item manifest.json -ErrorAction SilentlyContinue
Remove-Item robots.txt -ErrorAction SilentlyContinue
Remove-Item map.docx -ErrorAction SilentlyContinue
Remove-Item logo192.png -ErrorAction SilentlyContinue
Remove-Item logo512.png -ErrorAction SilentlyContinue

# Create src directory structure
Write-Host "Creating directory structure..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "src" | Out-Null
New-Item -ItemType Directory -Force -Path "src\pages" | Out-Null
New-Item -ItemType Directory -Force -Path "src\components" | Out-Null

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host "Setup complete! Now run: npm run dev" -ForegroundColor Green
