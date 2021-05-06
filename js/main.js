const navBtnToggle = document.getElementById('navBtnToggle');
const navMain = document.getElementById('navMain');
const navMenu = document.getElementById('navMenu');

navBtnToggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    navMain.classList.toggle('nav_open');
});


const mainLogo = document.querySelector('.header-logo-main-js');

if (mainLogo) {
    window.onscroll = function () { 
        "use strict";
        if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
            mainLogo.classList.add("header-logo-main_visible");
            navBtnToggle.classList.add("nav__btn-toggle_black");
        } 
        else {
            mainLogo.classList.remove("header-logo-main_visible");
            navBtnToggle.classList.remove("nav__btn-toggle_black");
        }
    };
}