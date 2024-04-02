const toggle = document.getElementById("toggle")
const navBar = document.querySelector(".nav-bar")
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active")
    navBar.classList.toggle("active")
})