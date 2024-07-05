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
        // autoplay: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 2000,
       
    }); 
    
})