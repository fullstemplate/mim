const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
const menuItems = menuList.querySelectorAll("a");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
})

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuList.classList.add("hidden"); // Menutup menu setelah klik item
    });
});

window.addEventListener("scroll", () => {
    menuList.classList.add("hidden"); // Menutup menu saat di-scroll
});
