
window.onload = function () {
  const storedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);
  const toggle = document.getElementById("theme-toggle");
  if (toggle) toggle.checked = storedTheme === "dark";
};

function toggleTheme(cb) {
  const theme = cb.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
