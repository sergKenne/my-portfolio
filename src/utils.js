import jquery from 'jquery';
const $ = jquery;

export const getActions = () => {
    $('#barIcon').on('click', () => {
      $('.page__slide-menu').addClass('showMenu');
    });

    $('#closeIcon').on('click', () => {
      $('.page__slide-menu').removeClass('showMenu');
    });

    $('.slide-menu__link').on('click', () => {
      $('.page__slide-menu').removeClass('showMenu');
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
}



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
