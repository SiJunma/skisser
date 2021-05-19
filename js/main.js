$( document ).ready(function() {

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

    
    // if dots-pagination exist
    pagesInit();


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

        // target page visible onclick dot
        let pageNumber = target.getAttribute('data-page').toString();
        $('.tabs-content-section__list').removeClass('tabs-content-page_visible');
        $(pageNumber).addClass('tabs-content-page_visible');
        
        topFunction();
        pagesUpdate();
        dotActive();
    });


    //close article btn in article-case
    $('.article-section__toback').click((evt) => {
        evt.preventDefault();
        tabContentShow($('.tab-active').attr('data-target'));
        topFunction();
    });


    // look up dot-pages value and generate "Sidan n av n"
    function pagesInit() {
        $('.tabs-content-section__page .tabs-content-section__page_total').text($('.tabs-content-section__list').length);

        $('#contentDotsContainer').empty();

        $('.tabs-content-section__list').each((index, el) => {
            let currentPage = index + 1;

            $('#contentDotsContainer').append('<a data-page="#' + el.getAttribute('id') + '"class="dot-btn">' + currentPage + '</a>');
        });

        dotContentActive();
        pagesUpdate();
    }


    //dot-page visible if dot is active, or make first page and dot visible if active nothing
    function dotContentActive() {
        if ($('.tabs-content-section__list').length > 0) {
            if ($('.tabs-content-page_visible').length > 0) {
                dotActive();
            } else if ($('.tabs-content-page_visible').length == 0) {
                let first = $('.tabs-content-section__list')[0];
                first.classList.add('tabs-content-page_visible');
                dotActive();
            }
        }
    }


    //if dots exist find id of active dot-page and make dot-active
    function dotActive() {
        if ($('#contentDotsContainer .dot-btn').length > 0) {
            $('#contentDotsContainer .dot-btn').removeClass('dot-active');
            let id = '#' + $('.tabs-content-page_visible').attr('id');
            $('#contentDotsContainer .dot-btn').each((index, el) => {
                if (el.getAttribute('data-page') == id) {
                    el.classList.add('dot-active');
                } 
            });
            topFunction();
        }
    }

    
    //check current page for sidan pagination text
    function pagesUpdate() {
        $('.tabs-content-section__page .tabs-content-section__page_current').text($('.tabs-content-page_visible').index() + 1);
    }


    //tab-content show onclick tab
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    //tab-content visible
    function tabContentShow(id) {
        tabContentNone();
        caseArticleNone()
        $(id).addClass('tabs-content-section_visible');
        dotActive()
        topFunction();
    };


    //article-case visible
    function caseArticleShow(id) {
        caseArticleNone();
        tabContentNone();

        if ($('.header-work-bg')) {
            $('.header-work-bg').removeClass('header-headline_ghost-bg');
        }

        $(id).addClass('article-section_visible');
        topFunction();
    };


    //hide tab-content
    function tabContentNone() {
        $('.tabs-content-section').removeClass('tabs-content-section_visible');
        topFunction();
    }


    //hide article-case
    function caseArticleNone() {
        $('.article-section').removeClass('article-section_visible');
        $('.header-work-bg').addClass('header-headline_ghost-bg');
        topFunction();
    }

});




