const toggleButton = document.getElementsByClassName("nav-toggle")[0]
const navbarLinks = document.getElementsByClassName("responsive-toggle a")[0]

toggleButton.addEventListener("click", () =>{
    navbarLinks.classList.toggle("active")
})