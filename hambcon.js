const navLinkContact = document.querySelector('.navLinkContact');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    navLinkContact.style.display = 'flex';
    navLinkContact.style.top = '0';
}
function close(){
    navLinkContact.style.top = '-100%';
}