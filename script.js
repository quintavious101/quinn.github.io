<script>
    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.getElementById("menu-toggle");
        const navMenu = document.getElementById("nav-menu");

        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    });
</script>

<script>
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
</script>

<button id="dark-mode-toggle">Toggle Dark Mode</button>

<script>
    const toggle = document.getElementById("dark-mode-toggle");
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
</script>

<style>
    .dark-mode {
        background-color: black;
        color: white;
    }
</style>
