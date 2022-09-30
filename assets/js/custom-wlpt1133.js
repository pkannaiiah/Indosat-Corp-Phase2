$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('.global_hero_carousal, .global_mini_carousal').addClass('top');
    } else {
        $('.global_hero_carousal, .global_mini_carousal').removeClass('top');
    }
});

// Menu Search Fixed on Scroll Startshere
$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('.cd-primary-nav').addClass('movemenu');
        $('#cd-search').addClass("fixed-search");
        $('#cd-search').addClass("fixed-search-mobile-1");
        $('#cd-search').removeClass("fixed-search-mobile-2");
        $('.cd-main-header').css("box-shadow", "none");

    } else {
        $('.cd-primary-nav').removeClass('movemenu');
        $('#cd-search').removeClass("fixed-search");
        $('#cd-search').addClass(" fixed-search-bottom");
        $('#cd-search').addClass("fixed-search-mobile-2");
        $('#cd-search').removeClass("fixed-search-mobile-1");
        $('.cd-main-header').css("box-shadow", "none");

    }
});

$(".cd-search-trigger").click(function () {
    $('.is-fixed').toggleClass("bg-search");
});

//Menu Search Fixed on Scroll Ends here
//$(window).scroll(function () { 10 < $(window).scrollTop() ? $(".topbar").slideUp() : $(".topbar").slideDown() }),

//Tosters Starts
function myToaster1() {
    $("#panel1").slideToggle("slow");
    $(".footer-fixed-icons").toggleClass("icon-adjust1");
}
function myToaster2() {
    $("#panel2").slideToggle("slow");
    $(".footer-fixed-icons").toggleClass("icon-adjust2");
}
function myToaster3() {
    $("#panel3").slideToggle("slow");
    $(".footer-fixed-icons").toggleClass("icon-adjust3");
}
function myToaster4() {
    $("#panel4").slideToggle("slow");
    $(".footer-fixed-icons").toggleClass("icon-adjust4");
}
//Tosters Ends

//Drill Down On click st
$(document).ready(function () {
    $("#maybeLate").click(function () {
        $("#panel1").slideToggle("slow");
        $(".footer-fixed-icons").toggleClass("icon-adjust1")
    });
    $("#NoThanks").click(function () {
        $("#panel2").slideToggle("slow");
        $(".footer-fixed-icons").toggleClass("icon-adjust2")
    });
    $("#cookiesTost").click(function () {
        $("#panel3").slideToggle("slow");
        $(".footer-fixed-icons").toggleClass("icon-adjust3")
    });
    $("#closeicon").click(function () {
        $("#panel4").slideToggle("slow");
        $(".footer-fixed-icons").toggleClass("icon-adjust4")
    });

    // Back TO TOP Start Here
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});
 
//Mega menu
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        //$(".cd-main-header").addClass("fixed-me");
    } else {
        //$(".cd-main-header").removeClass("fixed-me");
    }
});

//p-home-swp-03-swiper Starts
var homeswiper03 = new Swiper('.p-home-sub-swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.p-home-swp-03-btn-next',
        prevEl: '.p-home-swp-03-btn-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
        },
    }
});

 if ($('.p-home-sub-swiper-container .swiper-slide').length == 1) {    
    $('.p-home-sub-swiper-container').addClass('slides-count1-start');
} else if ($('.p-home-sub-swiper-container .swiper-slide').length == 1) {
    $('.p-home-sub-swiper-container').addClass('slides-count2-start');
} else if ($('.p-home-sub-swiper-container .swiper-slide').length == 2) {
    $('.p-home-sub-swiper-container').addClass('slides-count3-start');
}
//subbanner-new18-10-2021

//p-home-swp-01-swiper Starts
var homeswiper01 = new Swiper('.p-home-swp-01-swiper-container', {
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.p-home-swp-01-btn-next ',
        prevEl: '.p-home-swp-01-btn-prev ',
    },

    breakpoints: {
        576: {
            slidesPerView: 2.25,
            spaceBetween: 0,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2.25,
            spaceBetween: 10,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 2.25,
            spaceBetween: 10,
            centeredSlides: false,
        },
    }
});
//p-home-swp-01-swiper Ends

//p-home-swp-02-swiper Starts
var homeswiper02 = new Swiper('.p-home-swp-02-swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
   
    breakpoints: {
        576: {
            slidesPerView: 2.25,
            spaceBetween: 0,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2.25,
            spaceBetween: 0,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
        },
    }
});
//p-home-swp-02-swiper Ends

//p-home-swp-03-swiper Starts
var homeswiper03 = new Swiper('.p-home-swp-03-swiper-container', {
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

 if ($('.p-home-swp-03-swiper-container .swiper-slide').length == 1) {    
    $('.p-home-swp-03-swiper-container').addClass('slides-count1-start');
} else if ($('.p-home-swp-03-swiper-container .swiper-slide').length == 2) {
    $('.p-home-swp-03-swiper-container').addClass('slides-count2-start');
} else if ($('.p-home-swp-03-swiper-container .swiper-slide').length == 3) {
    $('.p-home-swp-03-swiper-container').addClass('slides-count3-start');
}

/* var slideCount = $('.p-home-swp-03-swiper-container .swiper-slide');
slideCount.each(function() {
    if ($(this).length <= 3) {
        $('.p-home-swp-03-swiper-container').addClass('max-slide-3');
    }
});
if ($(window).width() <= 768) {
    alert(768)
    slideCount.each(function() {
    if ($(this).length <= 2) {
        $('.p-home-swp-03-swiper-container .swiper-pagination').addClass('d-none');
    }
}); 
}
if ($(window).width() <= 576) {
    alert(576)
    slideCount.each(function() {
    if ($(this).length <= 1) {
        $('.p-home-swp-03-swiper-container .swiper-pagination').addClass('d-none');
    }
}); 
} */
//p-home-swp-03-swiper Ends

//p-home-list-02-swiper Starts
var homelist02 = new Swiper('.p-home-list-02-swiper-container', {
    slidesPerView: 2.6,
    spaceBetween: 0,
    breakpoints: {
        576: {
            slidesPerView: 3.8,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    }
});
//p-home-swp-02-swiper Ends

//p-home-list-03-swiper Starts
var homelist03 = new Swiper('.p-home-list-03-swiper-container', {
    slidesPerView: 2.6,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.p-home-list-03-btn-next ',
        prevEl: '.p-home-list-03-btn-prev ',
    },
    breakpoints: {
        576: {
            slidesPerView: 3.8,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    }
});
//p-home-swp-02-swiper Ends

//Global Hero Carousel Start
var heroCarousel = new Swiper('.global_hero_carousal', {
    autoplay: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Hide the pagination if only one slide
if ($('.global_hero_carousal .swiper-slide').length == 1) {
    $('.global_hero_carousal .swiper-pagination').addClass('d-none');
}
//Global Hero Carousel End

/* DIF - temp4-swp-04-card-4 - Cards 4 Image and Description Script Starts */
var cards4_imgbtn = new Swiper('.temp4-swp-04-card-4', {
    slidesPerView: 1,
    spaceBetween: 20,  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        575.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        991.98: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1199.98: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    }
});

if ($('.temp4-swp-04-card-4 .swiper-slide').length == 1) {
    $('.temp4-swp-04-card-4').addClass('slides-count1');
} else if ($('.temp4-swp-04-card-4 .swiper-slide').length == 2) {
    $('.temp4-swp-04-card-4').addClass('slides-count2');
} else if ($('.temp4-swp-04-card-4 .swiper-slide').length == 3) {
    $('.temp4-swp-04-card-4').addClass('slides-count3');
} else if ($('.temp4-swp-04-card-4 .swiper-slide').length == 4) {
    $('.temp4-swp-04-card-4').addClass('slides-count4');
}
/* DIF - temp4-swp-04-card-4 - Cards 4 Image and Description Script Ends */

/* DIF - Cards 3 Image and Description Script Starts */
var cards4_imgbtn = new Swiper('.temp4-swp-04-card-3', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        575.98: {           
            slidesPerView: 2,
            spaceBetween: 10,
        },        
        767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        991.98: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }
});

if ($('.temp4-swp-04-card-3 .swiper-slide').length == 1) {
    $('.temp4-swp-04-card-3').addClass('slides-count1 slides3-count1');
} else if ($('.temp4-swp-04-card-3 .swiper-slide').length == 2) {
    $('.temp4-swp-04-card-3').addClass('slides-count2 slides3-count2');
} else if ($('.temp4-swp-04-card-3 .swiper-slide').length == 3) {
    $('.temp4-swp-04-card-3').addClass('slides-count3 slides3-count3');
}
/* DIF - Cards 3 Image and Description Script Ends */

/* DIF - Cards 2 Image and Description Script Starts */
var cards4_imgbtn = new Swiper('.temp4-swp-04-card-2', {
    slidesPerView: 1,
    spaceBetween: 20,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        575.98: {           
            slidesPerView: 2,
            spaceBetween: 10,
        },        
        767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        991.98: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        
    }
});

if ($('.temp4-swp-04-card-2 .swiper-slide').length == 1) {
    $('.temp4-swp-04-card-2').addClass('slides-count1');
} else if ($('.temp4-swp-04-card-2 .swiper-slide').length == 2) {
    $('.temp4-swp-04-card-2').addClass('slides-count2');
} else if ($('.temp4-swp-04-card-2 .swiper-slide').length == 3) {
    $('.temp4-swp-04-card-2').addClass('slides-count3');
} else if ($('.temp4-swp-04-card-2 .swiper-slide').length == 4) {
    $('.temp4-swp-04-card-2').addClass('slides-count4');
}
/* DIF - Cards 2 Image and Description Script Ends */

//p-gallery-swp-01-swiper-container Starts
var galleryswiper01 = new Swiper('.p-gallery-swp-01-swiper-container', {
    slidesPerView: 1.25,
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.p-gallery-swp-01-btn-next ',
        prevEl: '.p-gallery-swp-01-btn-prev ',
    },

    breakpoints: {
        576: {
            slidesPerView: 2.25,
            spaceBetween: 0,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2.25,
            spaceBetween: 10,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            centeredSlides: false,
        },
    }
});
//p-gallery-swp-01-swiper-container Ends

//p-mob-gallery-swp-01-swiper-container Starts
var modalswiper = new Swiper('.p-mob-gallery-swp-01-swiper-container', {
    slidesPerView: 1,
    //centeredSlides: true,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.p-modal-gallery-swp-01-btn-next ',
        prevEl: '.p-modal-gallery-swp-01-btn-prev ',
    },

    autoplay: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides:false,
        },
        769: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
        },
    }
});
//p-mob-gallery-swp-01-swiper-container Ends

//card-list-swp-01-swiper Starts
var homeswiper03 = new Swiper('.blog-swiper-container', {
    // slidesPerView: 1.1,
    // centeredSlides: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    freeMode: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.card-list-swp-01-btn-next ',
        prevEl: '.card-list-swp-01-btn-prev ',
    },
    breakpoints: {
        576: {
            slidesPerView: 1.0,
            spaceBetween: 0,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 2.9,
            spaceBetween: 0,
            freeMode: false,
        },

    }
});
//card-list-swp-01-swiper Ends

var cards4_imgbtn = new Swiper('.personal-swp-01-card-1', {
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    /*
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },*/
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        991.98: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        575.98: {
            centeredSlides: true,
            slidesPerView: 1.25,
            spaceBetween: 10,
        }
    }
});


if ($('.personal-swp-01-card-1 .swiper-slide').length == 1) {
    $('.personal-swp-01-card-1').addClass('slides-count1');
} else if ($('.personal-swp-01-card-1 .swiper-slide').length == 2) {
    $('.personal-swp-01-card-1').addClass('slides-count2');
} else if ($('.personal-swp-01-card-1 .swiper-slide').length == 3) {
    $('.personal-swp-01-card-1').addClass('slides-count3');
} else if ($('.personal-swp-01-card-1 .swiper-slide').length == 4) {
    $('.personal-swp-01-card-1').addClass('slides-count4');
}

var cards4_imgbtn = new Swiper('.personal-swp-02-card-2', {
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    /*
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },*/
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        991.98: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        575.98: {
            centeredSlides: true,
            slidesPerView: 1.25,
            spaceBetween: 10,
        }
    }
});

if ($('.personal-swp-02-card-2 .swiper-slide').length == 1) {
    $('.personal-swp-02-card-2').addClass('slides-count1');
} else if ($('.personal-swp-02-card-2 .swiper-slide').length == 2) {
    $('.personal-swp-02-card-2').addClass('slides-count2');
} else if ($('.personal-swp-02-card-2 .swiper-slide').length == 3) {
    $('.personal-swp-02-card-2').addClass('slides-count3');
} else if ($('.personal-swp-02-card-2 .swiper-slide').length == 4) {
    $('.personal-swp-02-card-2').addClass('slides-count4');
}

var cards4_imgbtn = new Swiper('.personal-swp-03-card-3', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    observer: true,
    observeParents: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        991.98: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        575.98: {
            centeredSlides: true,
            slidesPerView: 1.25,
            spaceBetween: 10,
        }
    }
});

if ($('.personal-swp-03-card-3 .swiper-slide').length == 1) {
    $('.personal-swp-03-card-3').addClass('slides-count1');
} else if ($('.personal-swp-03-card-3 .swiper-slide').length == 2) {
    $('.personal-swp-03-card-3').addClass('slides-count2');
} else if ($('.personal-swp-03-card-3 .swiper-slide').length == 3) {
    $('.personal-swp-03-card-3').addClass('slides-count3');
} else if ($('.personal-swp-03-card-3 .swiper-slide').length == 4) {
    $('.personal-swp-03-card-3').addClass('slides-count4');
}

var cards4_imgbtn = new Swiper('.personal-swp-04-card-4', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    /*
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },*/
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        575.98: {
            centeredSlides: true,
            slidesPerView: 1.25,
            spaceBetween: 10,
        },
        767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        991.98: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }
});

if ($('.personal-swp-04-card-4 .swiper-slide').length == 1) {
    $('.personal-swp-04-card-4').addClass('slides-count1 slides3-count1');
} else if ($('.personal-swp-04-card-4 .swiper-slide').length == 2) {
    $('.personal-swp-04-card-4').addClass('slides-count2 slides3-count2');
} else if ($('.personal-swp-04-card-4 .swiper-slide').length == 3) {
    $('.personal-swp-04-card-4').addClass('slides-count3 slides3-count3');
}
//Personal Blog Category Carousal 

var swiper = new Swiper('.personal-blog-carousal', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    observer: true,
    observeParents: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        991.98: {
            slidesPerView: 2.8,
            spaceBetween: 30,
        },

        575.98: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,

        },
    }

});


var galleryThumbs = new Swiper('.tabs-thumbs', {
    spaceBetween: 0,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    breakpoints: {

        1024: {
            slidesPerView: 6,
            spaceBetween: 0,

        },
    }

});
var galleryTop = new Swiper('.tabs-top-swiper', {
    spaceBetween: 5,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swipertabs-button-next',
        prevEl: '.swipertabs-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    },
});

$(document).ready(function () {
    $('.shaded-left:has(.swiper-button-disabled)').addClass("disabledarrow");
    $('.shaded-right :has(.swiper-button-disabled)').addClass("disabledarrow");
});

$('#swipertabs-button-next ').click(function () {

    if ($('.swipertabs-button-next').hasClass('swiper-button-disabled')) {
        $('.shaded-right').addClass('disabledarrow');  /* missing . before removeClass */
        // alert('hello');
    }
    else (
        $('.shaded-right').removeClass('disabledarrow')  /* missing . before removeClass */

    )
    if ($('.swipertabs-button-prev').hasClass('swiper-button-disabled')) {
        $('.shaded-left').addClass('disabledarrow');  /* missing . before removeClass */
        // alert('hello');
    }
    else (
        $('.shaded-left').removeClass('disabledarrow')  /* missing . before removeClass */
    )
});

$('#swipertabs-button-prev ').click(function () {

    if ($('.swipertabs-button-prev').hasClass('swiper-button-disabled')) {
        $('.shaded-left').addClass('disabledarrow');  /* missing . before removeClass */
        // alert('hello');    transform: translate3d(0, 0px, 0px);
        $('.swiper-wrapper').css("transform", "translate3d(0, 0px, 0px)")

    }
    else (
        $('.shaded-left').removeClass('disabledarrow')  /* missing . before removeClass */
    )
    if ($('.swipertabs-button-next').hasClass('swiper-button-disabled')) {
        $('.shaded-right').addClass('disabledarrow');  /* missing . before removeClass */
        // alert('hello');
    }
    else (
        $('.shaded-right').removeClass('disabledarrow')  /* missing . before removeClass */

    )
});

/* Dev Note : On focus input page should move to TOP Starts */
$(".b-partnarship-rect input, .b-partnarship-rect select, .b-partnarship-rect textarea").focus(function () {
    var $formgrp = $(this).closest('.form-group');
    $('html,body').animate({
        scrollTop: $formgrp.offset().top - 100
    }, 500);
});
/* Dev Note : On focus input page should move to TOP Ends */

/* Dev Note : c_ourcomp_other_director Starts */
  var homeswiper01 = new Swiper('.c_ourcomp_other_director', {
    slidesPerView: 1.1,
    centeredSlides: false,
    spaceBetween:10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.other_director-swp-01-btn-next ',
        prevEl: '.other_director-swp-01-btn-prev ',
    },
    breakpoints: {
        576: {
            slidesPerView: 2.25,
            spaceBetween: 0,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2.25,
            spaceBetween: 10,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: false,
        },
    }
});
/* Dev Note : c_ourcomp_other_director Ends */

/* Dev Note : crop-ourc-brand-strategy Starts */
var cards4_imgbtn = new Swiper('.crop-ourc-brand-strategy', {
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        991.98: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        575.98: {
            centeredSlides: true,
            slidesPerView: 1.25,
            spaceBetween: 10,
        }
    }
});
if ($('.crop-ourc-brand-strategy .swiper-slide').length == 1) {
    $('.crop-ourc-brand-strategy').addClass('slides-count1');
} else if ($('.crop-ourc-brand-strategy .swiper-slide').length == 2) {
    $('.crop-ourc-brand-strategy').addClass('slides-count2');
} else if ($('.crop-ourc-brand-strategy .swiper-slide').length == 3) {
    $('.crop-ourc-brand-strategy').addClass('slides-count3');
} else if ($('.crop-ourc-brand-strategy .swiper-slide').length == 4) {
    $('.crop-ourc-brand-strategy').addClass('slides-count4');
}
/* Dev Note : crop-ourc-brand-strategy Ends */

//p-home-swp-01-swiper Starts
var homeswiper01 = new Swiper('.dc-promo-swiper-01', {
    slidesPerView:1.3,
    centeredSlides: true,
    spaceBetween:10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.b-home-swp-01-btn-next ',
        prevEl: '.b-home-swp-01-btn-prev ',
    },
    breakpoints: {
        576: {
            slidesPerView: 1.3,
            spaceBetween: 0,
            centeredSlides: false,
        },
        769: {
            slidesPerView: 1.3,
            spaceBetween: 10,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
        },
    }
});
//p-home-swp-01-swiper Ends


///
///////////////////////////////////////fourg Pro js st
if ( $(".fourg-pro--swiper .swiper-slide").length == 1 ) {
	options = {
	slidesPerView: 1.5,
	spaceBetween: 0,
	breakpoints: {
	480: {
	slidesPerView: 1,
	spaceBetween: 0,
	},
	}
	}
   } else {
	options = {
	slidesPerView: 3,
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// init: false,
	breakpoints: {
		991: {
			slidesPerView: 2.5,
			centeredSlides: false,
		},
		768: {
			slidesPerView: 1.5,
			centeredSlides: false,
		},
		425: {
			slidesPerView: 1.5,
			centeredSlides: false,
		},
	}
	}
   }
   var swiper1 = new Swiper('.fourg-pro--swiper', options);
    var sw_length = swiper1.slides.length;
    if(sw_length <= 3){
    $('.fourg-pro--swiper .swiper-pagination').addClass('pagenav4g');
}

/////////////home page banner st
