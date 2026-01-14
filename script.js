document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");

  if (!toggleBtn) {
    console.error("Theme toggle button not found");
    return;
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
