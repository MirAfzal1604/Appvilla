"use static"

window.onscroll = function() {
    scrolldown();
};

const nav = document.querySelector("header");
const logo = document.querySelector('.logo')

function scrolldown() {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        nav.className = "navScroll";
        logo.src = './images/logo/logo-svg.png';
    } else {
        nav.className = "";
        logo.src = './images/logo/white-logo-svg.png';
    }
}