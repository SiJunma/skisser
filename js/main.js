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

        tabContentShow(evt.currentTarget.getAttribute('data-target'));
    });

    // case-artickle show onclick link

    $('.tab-card__title-link').click((evt) => {
        evt.preventDefault();

        if(evt.currentTarget.getAttribute('href') && evt.currentTarget.getAttribute('href') !== '#') {
            caseArticleShow(evt.currentTarget.getAttribute('href'));
        }
    })

    // dots-active onclick dots (dots for pages in tab-content)

    $('#contentDotsContainer .dot-btn').click((evt) => {
        evt.preventDefault();
        let target = evt.currentTarget;
        $('#contentDotsContainer .dot-btn').removeClass('dot-active');
        target.classList.add('dot-active');

        // target page visible onclick dot
        let pageNumber = target.getAttribute('data-page').toString();
        $('.tabs-content-section__list').removeClass('tabs-content-page_visible');
        $(pageNumber).addClass('tabs-content-page_visible');
        topFunction();
    });

    //close article btn in article

    $('.article-section__toback').click((evt) => {
        evt.preventDefault();
        tabContentShow($('.tab-active').attr('data-target'));
        topFunction();
    });

    //tab-content show onclick tab

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    function tabContentShow(id) {
        tabContentNone();
        caseArticleNone()
        $(id).addClass('tabs-content-section_visible');
        topFunction();
    };

    function caseArticleShow(id) {
        caseArticleNone();
        tabContentNone();

        $('.header-work-bg').removeClass('header-headline_ghost-bg');

        $(id).addClass('article-section_visible');
        topFunction();
    };

    function tabContentNone() {
        $('.tabs-content-section').removeClass('tabs-content-section_visible');
        topFunction();
    }

    function caseArticleNone() {
        $('.article-section').removeClass('article-section_visible');
        $('.header-work-bg').addClass('header-headline_ghost-bg');
        topFunction();
    }

});




