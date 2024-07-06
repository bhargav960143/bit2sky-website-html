$(document).ready(function() {
    $("#bannerSlider").owlCarousel({
        items: 1,
        loop: true,
        // autoplay: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 2000,
       
    }); 
    $("#clientLogoSlider").owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive : {
            0:{items:1},
            520:{items:2},
            768:{items:3},
            1200:{items:3},
            1366:{items:4},
            1600:{items:5}
        }
    }); 
    
})