
var mobileMenuSvg = document.getElementById("mobileMenuSvg");
var menu = document.getElementById("menu");

console.log(menu);

mobileMenuSvg.onclick = function () {
    //mobileMenuSvg.classList.add("rotate-90");
    mobileMenuSvg.classList.toggle("rotate-90");
    menu.classList.toggle("show");
}