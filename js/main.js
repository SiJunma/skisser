// Open menu onclick burger-btn

const navBtnToggle = document.getElementById('navBtnToggle');
const navMain = document.getElementById('navMain');
const navMenu = document.getElementById('navMenu');

navBtnToggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    navMain.classList.toggle('nav_open');
});

// For Logo in nav on index.html wich appear when scrolling, burger-btn change color on scrolling

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

$( document ).ready(function() {

    // tab-active onclick tabs

    $('#tabsSlider .tab-btn').click((evt) => {
        evt.preventDefault();
        $('#tabsSlider .tab-btn').removeClass('tab-active');
        evt.currentTarget.classList.add('tab-active');
    })

    // dots-active onclick dots

    $('#contentDotsContainer .dot-btn').click((evt) => {
        let target = evt.currentTarget;
        $('#contentDotsContainer .dot-btn').removeClass('dot-active');
        target.classList.add('dot-active');

        // target page visible onclick dot
        let pageNumber = target.getAttribute('data-page').toString()
        $('.tabs-content-section__list').removeClass('tabs-content-page_visible');
        $(pageNumber).addClass('tabs-content-page_visible');
    })

});

