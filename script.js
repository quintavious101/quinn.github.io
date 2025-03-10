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
