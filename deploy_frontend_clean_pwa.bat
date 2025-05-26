@echo off
echo --------------------------------------------
echo  CareerLink CLEAN Deploy to GitHub Pages
echo --------------------------------------------

REM Ask for GitHub repository URL
set /p repo_url=Enter your GitHub repo URL (e.g. https://github.com/IamShrade/careerlink-frontend.git): 

REM Move to the folder where this script is
cd /d %~dp0

echo Deleting any previous .git history...
rmdir /s /q .git

echo Initializing new Git repo...
git init
git add .
git commit -m "Clean deploy of CareerLink PWA frontend"
git branch -M main
git remote add origin %repo_url%
git push -u origin main --force

echo.
echo ✅ Clean PWA frontend deployed!
echo 👉 Go to GitHub > Settings > Pages > Source = main / (root)
pause
