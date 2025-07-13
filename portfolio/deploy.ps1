# Custom deploy script to avoid gh-pages ENAMETOOLONG issues

Write-Host "Building portfolio..." -ForegroundColor Green
npm run build

Write-Host "Switching to parent directory..." -ForegroundColor Green
Set-Location ..

Write-Host "Copying build files..." -ForegroundColor Green
Copy-Item -Path "portfolio/build/*" -Destination "." -Recurse -Force

Write-Host "Adding changes to git..." -ForegroundColor Green
git add .

Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Deploy portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin main

Write-Host "Portfolio deployed successfully!" -ForegroundColor Green
Write-Host "Check https://qayumxd.github.io in a few minutes." -ForegroundColor Yellow
