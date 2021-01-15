var nav = document.getElementsByClassName("nav")[0];
var navMenu = document.getElementsByClassName("nav-ul")[0];
var navDropdown = document.getElementsByClassName("nav__icon")[0];
var mobileNavOverlay = document.getElementsByClassName("bg-overlay")[0];
var header = document.getElementById("header");



//Open mobile nav menu on hamburger click
navDropdown.addEventListener("click", function () {
    //hide menu
    if (nav.classList.contains("nav-active")) {
        nav.classList.remove("nav-active");
    } else {
        //show menu
        nav.classList.add("nav-active");
    }
});

//Close mobile nav menu when user clicks outside of it
mobileNavOverlay.addEventListener("click", function () {
    if (nav.classList.contains("nav-active")) {
        navDropdown.click();
    }
});

//When user scrolls
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    //if scrolling up
    if (prevScrollpos > currentScrollPos) {
        //show header
        header.classList.remove("header--hide");
    } else {
        //else hide header
        header.classList.add("header--hide");
        nav.classList.remove("nav-active");
    }

    //if not at top
    if (window.pageYOffset > 100) {
        //make header small
        header.classList.add("header--small");
    }
    //if at top
    else {
        //make header normal size
        header.classList.remove("header--small");
    }
    prevScrollpos = currentScrollPos;
}