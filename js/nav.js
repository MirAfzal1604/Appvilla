"use static"

window.onscroll = function() {
    scrolldown();
};

const mybutton = document.getElementById("myBtn");
const nav = document.querySelector("header");
const logo = document.querySelector('.logo')

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrolldown() {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        nav.className = "navScroll";
        logo.src = './images/logo/logo-svg.png';
        mybutton.style.display = "block";
    } else {
        nav.className = "";
        logo.src = './images/logo/white-logo-svg.png';
        mybutton.style.display = "none";
    }
}