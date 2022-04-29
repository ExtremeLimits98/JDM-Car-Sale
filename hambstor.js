const navStories = document.querySelector('.navStories');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    navStories.style.display = 'flex';
    navStories.style.top = '0';
}
function close(){
    navStories.style.top = '-100%';
}
