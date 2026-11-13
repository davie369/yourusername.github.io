
// 1. Automatically update the copyright year

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// 2. Select the mobile menu elements

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


// 3. Open and close the navigation menu

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // 4. Close menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}

console.log("Portfolio JavaScript loaded successfully!");
