
window.onload = function () {
  if (!localStorage.getItem("seenIntro")) {
    const overlay = document.createElement("div");
    overlay.id = "intro";
    overlay.style = "position:fixed;inset:0;background:#111827cc;z-index:9999;color:white;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;font-family:'Segoe UI',sans-serif;";
    overlay.innerHTML = `
      <h1 style='font-size:32px;margin-bottom:10px;'>👋 Welcome to CareerLink</h1>
      <p style='max-width:480px;margin:0 auto 20px;'>CareerLink helps you build optimized resumes, track your applications, and get hired faster with AI support.</p>
      <button onclick="dismissIntro()" style='padding:12px 24px;border:none;background:#10b981;color:white;font-weight:bold;border-radius:8px;cursor:pointer;'>Let’s Go!</button>
    `;
    document.body.appendChild(overlay);
  }
};

function dismissIntro() {
  localStorage.setItem("seenIntro", "true");
  const intro = document.getElementById("intro");
  if (intro) intro.remove();
}
