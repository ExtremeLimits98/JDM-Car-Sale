const navLink = document.querySelector('.navLink');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    navLink.style.display = 'flex';
    navLink.style.top = '0';
}
function close(){
    navLink.style.top = '-100%';
}
