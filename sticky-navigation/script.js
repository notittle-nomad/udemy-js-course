const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);
function fixNav() {
    //compare scrolling coordinates with toggle point
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}