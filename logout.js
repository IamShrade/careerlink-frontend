window.onload = function() {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    alert("You're not logged in. Redirecting to login.");
    window.location.href = "login.html";
  } else {
    document.getElementById("user-status").innerText = "User ID: " + userId;
  }
};

function logoutUser() {
  localStorage.removeItem("userId");
  alert("You have been logged out.");
  window.location.href = "login.html";
}
