
// Adding dark mode functionality
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";

console.log("Dark mode enabled? ", darkModeEnabled);

  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
  }

   toggle.addEventListener("click", function () {
    console.log("Button clicked");

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      console.log("Dark mode enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
      console.log("Dark mode disabled");
    }
  });
});

