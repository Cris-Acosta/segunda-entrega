const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const currentitem = document.querySelector('.active');
        currentitem.classList.remove('active');
        e.target.classList.add('active');
    })    
});