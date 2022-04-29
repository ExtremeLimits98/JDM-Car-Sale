const navGallery = document.querySelector('.navGallery');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    navGallery.style.display = 'flex';
    navGallery.style.top = '0';
}
function close(){
    navGallery.style.top = '-100%';
}
