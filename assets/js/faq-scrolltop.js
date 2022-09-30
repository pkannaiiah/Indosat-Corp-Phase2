//scroll bal fixed
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll >= 350) {
        //console.log('a');
        $(".single-page-scroll-sec").addClass("fixed-to-header");
    } else {
        //console.log('a');
        $(".single-page-scroll-sec").removeClass("fixed-to-header");
    }
});



//Page Link Scroll Smooth Animation
$('.page-scroll-content a[href*="#"]')
// Remove links that don't actually link to anything
.click(function(event) {
    // On-page links    
    if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
    ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
        scrollTop: target.offset().top - 200
        }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
        });
    }
    }
});









//multi_row_swp-01 Starts
(function() {
    'use strict';
    const breakpoint = window.matchMedia( '(min-width:1199px)' );
    // keep track of swiper instances to destroy later
    let mySwiper;

    const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

        // clean up old instances and inline styles when available
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

        // or/and do nothing
        return;

        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();
        }
    };
    const enableSwiper = function() {
    mySwiper = new Swiper ('.multi-rows-swp-01-container', {
        // slidesPerView: 1.2,
        slidesPerView: 'auto',
        // centeredSlides: true,
        spaceBetween: 20,
        // freeMode: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // breakpoints: {
        // 376: {
        //     centeredSlides: false,
        // },
        // }
    });
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();
})();
//multi_row_swp-01 Ends

//heading-swp-swiper Starts
var headingSwp = new Swiper('.heading-swp-swiper-container', {
    // slidesPerView: 6,
    // centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.heading-swp-btn-next',
        prevEl: '.heading-swp-btn-prev ',
    },
    breakpoints: {
        576: {
            spaceBetween: 20,
        },
    }
});
//heading-swp-swiper Ends

//product-right-swp-01 Starts
var homeswiper03 = new Swiper('.product-right-swp-01-swiper', {    
    spaceBetween: 20,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }
});
//product-right-swp-01 Ends

//card-list-swp-01-swiper-container Starts
var homeswiper03 = new Swiper('.card-list-swp-01-swiper-container', {
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.p-home-swp-03-btn-next ',
        prevEl: '.p-home-swp-03-btn-prev ',
    },
    breakpoints: {
        576: {
            slidesPerView: 2.25,
            spaceBetween: 0,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: false,
        },
    }
});

if ($('.card-list-swp-01-swiper-container .swiper-slide').length == 1) {    
    $('.card-list-swp-01-swiper-container').addClass('slides-count1-start');
} else if ($('.card-list-swp-01-swiper-container .swiper-slide').length == 2) {
    $('.card-list-swp-01-swiper-container').addClass('slides-count2-start');
} else if ($('.card-list-swp-01-swiper-container .swiper-slide').length == 3) {
    $('.card-list-swp-01-swiper-container').addClass('slides-count3-start');
}
//card-list-swp-01-swiper-container Ends

//text-desc-swp-compo-swiper Starts
var textDesc01 = new Swiper('.text-desc-swp-compo-swiper', {
    slidesPerView: 1.2,
    // centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2.2,
            spaceBetween: 30,
            freeMode: false,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
            freeMode: false,
        },
        992: {
            slidesPerView: 3, 
            spaceBetween: 100,
            freeMode: false,
        },
    }
});
// var slideCount = textDesc01.slides.length;
// if (slideCount <= 3) {
//     $('.text-desc-swp-compo-swiper').addClass('max-slide-3');
// }



$('.card .collapse').on('shown.bs.collapse', function(e) {
    var $card = $(this).closest('.card');
    $('html,body').animate({
      scrollTop: $card.offset().top - 100
    }, 500);
});

$('.faqs-read-more > div').each(function(){
    var LiN = $(this).find('.card').length;
    if( LiN > 3){    
      $('.card', this).eq(3).nextAll().hide().addClass('none'); 
    }  
});

$(".faq-seemore-btn").click(function() {
    var elem = $(".faq-seemore-btn").text();
    if (elem == "SEE ALL QUESTION") {
      //Stuff to do when btn is in the read more state
      $(".faq-seemore-btn").text("HIDE QUESTION");
      $(".faqs-read-more").addClass('fixed');
    } else {
      //Stuff to do when btn is in the read less state
      $(".faq-seemore-btn").text("SEE ALL QUESTION");
      $(".faqs-read-more").removeClass('fixed');
    }
    $('.card').siblings('.card.none').slideToggle(); 
});



//Tab to Dropdown 1
$('.menu-navigationDropdown')
.on("click", "li a:not('.active')", function(event) { $(this).closest('ul').removeClass("open");
})
.on("click", "li a.active", function(event) { $(this).closest('ul').toggleClass("open");
});


//Tab to Dropdown 2
$('.wizard-links .nav')
.on("click", "li a:not('.active')", function(event) { $(this).closest('ul').removeClass("open");
})
.on("click", "li a.active", function(event) { $(this).closest('ul').toggleClass("open");
});


// $(window).on("load resize",function(e){
//     var intro_height = $(".map-card-top").outerHeight();
//     var final_height = intro_height + 160;
//     $(".map-on-card-compo iframe").height(final_height);
// });

$(window).on("load resize",function(e){
    var intro_height = $(".map-card-top-img").outerHeight();
    var final_height = intro_height + 140;
   
    $(".map-card-top-img").parent().height(final_height);
    
});

$(window).on("load resize",function(e){
    var intro_height = $(".map-card-top-input1").outerHeight();
    var final_height = intro_height + 140;
    $(".map-card-top-input1").parent().height(final_height);
});

$(window).on("load resize",function(e){
    var intro_height = $(".map-card-top-input2").outerHeight();
    var final_height = intro_height + 140;
    $(".map-card-top-input2").parent().height(final_height);
});
$(window).on("load resize",function(e){
    var intro_height = $(".map-card-top-input3").outerHeight();
    var final_height = intro_height + 140;
    $(".map-card-top-input3").parent().height(final_height);
});


//imgs-swp-compo-swiper Starts
// var homeswiper03 = new Swiper('.imgs-swp-compo-swiper', {
//     // slidesPerView: 1.1,
//     // centeredSlides: true,
//     spaceBetween: 30,
//     slidesPerView: 'auto',
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     // breakpoints: {
//     //     1200: {
//     //         slidesPerView: 3,
//     //         spaceBetween: 0,
//     //     },
//     // }
// });
//imgs-swp-compo-swiper Ends


//multi_row_swp-01 Starts
(function() {
    'use strict';
    const breakpoint = window.matchMedia( '(max-width:991.98px)' );
    // keep track of swiper instances to destroy later
    let mySwiper;

    const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

        // clean up old instances and inline styles when available
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

        // or/and do nothing
        return;

        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();
        }
    };
    const enableSwiper = function() {
    mySwiper = new Swiper ('.imgs-swp-compo-swiper', {
        spaceBetween: 30,
        slidesPerView: 6,        
        centeredSlides: false,
        
    });
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();
})();
//multi_row_swp-01 Ends

var dynaicIconInfo = new Swiper('.dynamic-iconsInfo-swp-01,.dynamic-iconsInfo-swp-02,.dynamic-iconsInfo-swp-03', {
    slidesPerView: 1,
    // centeredSlides: true,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
            freeMode: false,
        },
        992: {
            slidesPerView: 3, 
            spaceBetween: 20,
            freeMode: false,
        },
        1199: {
            slidesPerView: 4, 
            spaceBetween: 20,
            freeMode: false,
        },
    }
});

// $('.dynamic-iconsInfo-swp-01').each(function(){
//     var slideLength = $('.dynamic-iconsInfo-swp-01 .swiper-slide').length;
//     if (slideLength == 1){
//         $('.dynamic-iconsInfo-swp-01').addClass( "max-slide-1" );
//     }
//     else if (slideLength == 2){
//         $('.dynamic-iconsInfo-swp-01').addClass( "max-slide-2" );
//     }
//     else if (slideLength == 3){
//         $('.dynamic-iconsInfo-swp-01').addClass( "max-slide-3" );
//     }
//     else if (slideLength == 4){
//         $('.dynamic-iconsInfo-swp-01').addClass( "max-slide-4" );
//     }
//  }); 

if ($('.dynamic-iconsInfo-swp-01 .swiper-slide').length == 1) {
    $('.dynamic-iconsInfo-swp-01').addClass( "max-slide-1" );
}
if ($('.dynamic-iconsInfo-swp-01 .swiper-slide').length == 2) {
    $('.dynamic-iconsInfo-swp-01').addClass( "max-slide-2" );
}
if ($('.dynamic-iconsInfo-swp-01 .swiper-slide').length == 3) {
    $('.dynamic-iconsInfo-swp-01').addClass( "max-slide-3" );
}
if ($('.dynamic-iconsInfo-swp-01 .swiper-slide').length == 4) {
    $('.dynamic-iconsInfo-swp-01').addClass( "max-slide-4" );
}

if ($('.dynamic-iconsInfo-swp-02 .swiper-slide').length == 1) {
    $('.dynamic-iconsInfo-swp-02').addClass( "max-slide-1" );
}
if ($('.dynamic-iconsInfo-swp-02 .swiper-slide').length == 2) {
    $('.dynamic-iconsInfo-swp-02').addClass( "max-slide-2" );
}
if ($('.dynamic-iconsInfo-swp-02 .swiper-slide').length == 3) {
    $('.dynamic-iconsInfo-swp-02').addClass( "max-slide-3" );
}
if ($('.dynamic-iconsInfo-swp-02 .swiper-slide').length == 4) {
    $('.dynamic-iconsInfo-swp-02').addClass( "max-slide-4" );
}

if ($('.dynamic-iconsInfo-swp-03 .swiper-slide').length == 1) {
    $('.dynamic-iconsInfo-swp-03').addClass( "max-slide-1" );
}
if ($('.dynamic-iconsInfo-swp-03 .swiper-slide').length == 2) {
    $('.dynamic-iconsInfo-swp-03').addClass( "max-slide-2" );
}
if ($('.dynamic-iconsInfo-swp-03 .swiper-slide').length == 3) {
    $('.dynamic-iconsInfo-swp-03').addClass( "max-slide-3" );
}
if ($('.dynamic-iconsInfo-swp-03 .swiper-slide').length == 4) {
    $('.dynamic-iconsInfo-swp-03').addClass( "max-slide-4" );
}

