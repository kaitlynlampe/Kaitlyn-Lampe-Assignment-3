const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
  const savedTheme = localStorage.getItem("portfolio-theme");
  const startsDark = savedTheme === "dark";

  document.body.classList.toggle("dark-theme", startsDark);
  themeToggle.setAttribute("aria-pressed", String(startsDark));
  themeToggle.textContent = startsDark
    ? "Switch to light mode"
    : "Switch to dark mode";

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");

    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark
      ? "Switch to light mode"
      : "Switch to dark mode";
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  });
}
