const btn = document.querySelector("#btn")
const menu = document.querySelector("#menu")
const toggle = document.querySelector("#toggle")
btn.addEventListener("click",()=>{
    toggle.setAttribute("src",(toggle.getAttribute("src") == "img/toggle.png") ? "img/close.png" : "img/toggle.png")
    menu.classList.toggle("flex")
    menu.classList.toggle("hidden")
})