@echo off
echo --------------------------------------------
echo   CareerLink PWA Frontend Deployment
echo --------------------------------------------

REM Ask for GitHub repository URL
set /p repo_url=Enter your GitHub repo URL (e.g. https://github.com/IamShrade/careerlink-frontend.git): 

REM Move to the folder where this script is
cd /d %~dp0

REM Initialize Git, commit, and push
git init
git add .
git commit -m "Deploy PWA-ready frontend"
git branch -M main
git remote add origin %repo_url%
git push -u origin main --force

echo.
echo ✅ PWA-ready frontend pushed to GitHub!
echo 👉 Enable GitHub Pages: Settings → Pages → Source = 'main' /root
pause
