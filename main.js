const NAV = document.querySelector('.navigation');
window.addEventListener('scroll', navChangeColor)

function navChangeColor() {
    if (window.scrollY > NAV.offsetHeight + 250) {
        NAV.classList.add('current')
    } else {
        NAV.classList.remove('current')
    }
}

console.log(NAV)

