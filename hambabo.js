const navAbout = document.querySelector('.navAbout');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    navAbout.style.display = 'flex';
    navAbout.style.top = '0';
}
function close(){
    navAbout.style.top = '-100%';
}