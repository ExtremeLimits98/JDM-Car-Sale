const navLinkParts = document.querySelector('.navLinkParts');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    navLinkParts.style.display = 'flex';
    navLinkParts.style.top = '0';
}
function close(){
    navLinkParts.style.top = '-100%';
}