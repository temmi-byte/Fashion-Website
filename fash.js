// JavaScript for toggling the mobile menu smoothly
document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarMenu = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");
    });
});
