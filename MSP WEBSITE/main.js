let toggleIcon = document.querySelector(".menu-bars");
let navItems = document.querySelector(".nav-items");

toggleIcon.addEventListener("click" , function (params) {
    navItems.classList.toggle(".d-flex");
})