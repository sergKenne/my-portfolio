import jquery from 'jquery';

const $= jquery;

export const getActions = () => {
    var windowWidth = $(window).width();
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 140) {
            $('#mainnav').addClass('navbar-fixed-top');
            $('.color-js').addClass('narbar-color-fixed');
            $('.barBtn-js').addClass('narbar-color-fixed');
            $('.navbar-brand img').attr('src', 'img/logo-dark.png');
            $('.nav-icon').addClass('btn-fixed');

            // $('.color-js').click(function () {
            //     $('.color-js').removeClass('activeLink-js');
            //     $(this).addClass('activeLink-js');
            //     $('.navbar-collapse').removeClass('show');
            //     $('.nav-icon_1').removeClass('nav-icon--first');
            //     $('.nav-icon_2').removeClass('nav-icon--middle');
            //     $('.nav-icon_3').removeClass('nav-icon--last');
            // });
        } else {
            $('#mainnav').removeClass('navbar-fixed-top');
            $('.color-js').removeClass('narbar-color-fixed');
            $('.barBtn-js').removeClass('narbar-color-fixed');
            $('.navbar-brand img').attr('src', 'img/logo-transparent.png');
            $('.nav-icon').removeClass('btn-fixed');
            // $('.color-js').removeClass('activeLink-js');
        }
    });


    
     $('.color-js').click(function () {
        //  $('.color-js').removeClass('activeLink-js');
        //  $(this).addClass('activeLink-js');
         $('.navbar-collapse').removeClass('show');
         $('.nav-icon_1').removeClass('nav-icon--first');
         $('.nav-icon_2').removeClass('nav-icon--middle');
         $('.nav-icon_3').removeClass('nav-icon--last');
     });





    if (windowWidth < 769) {
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 140) {
                $('.home-link').addClass('currentNavLink-js');
                $('.color-js').click(function () {
                    $('.home-link').removeClass('currentNavLink-js');
                    $('.color-js').removeClass('currentNavLink-js');
                    $(this).addClass('currentNavLink-js');
                });
            } else {
                $('.home-link').removeClass('currentNavLink-js');
            }
        });
    }

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 1000) {
            $('.linkToHome').css({
                right: '30px',
            });
        } else {
            $('.linkToHome').css({
                right: '-40px',
            });
        }
    });

    $('.navbar-toggler').click(function () {
        if ($('.navbar-collapse').is(':visible')) {
            $('.nav-icon_1').removeClass('nav-icon--first');
            $('.nav-icon_2').removeClass('nav-icon--middle');
            $('.nav-icon_3').removeClass('nav-icon--last');
        } else {
            $('.nav-icon_1').addClass('nav-icon--first');
            $('.nav-icon_2').addClass('nav-icon--middle');
            $('.nav-icon_3').addClass('nav-icon--last');
            $('.color-js').removeClass('currentNavLink-js');
        }
    });

    $('#open-js').click(function () {
        $('#slideMenu-js').addClass('toggleLeft-js');
    });

    $('#close-js').click(function () {
        $('#slideMenu-js').removeClass('toggleLeft-js');
    });

    $('.slide-menu__link').click(function () {
        $('#slideMenu-js').removeClass('toggleLeft-js');
    });

    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    500,//1000,
                );
                return false;
            }
        }
    });
};


export function setSmoothScrool() {
  window.addEventListener('scroll', function () {
    const elt = document.querySelector('.linkToHome') ;
    if (window.scrollY > 500) {
      elt.style.right = '30px';
    } else {
      elt.style.right = '-47px';
    }
  });
}
