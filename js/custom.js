window.addEventListener('scroll' ,function(){
    var scroll = document.querySelector(".header");
    scroll.classList.toggle("sticky",window.scrollY > 0);
});

document.querySelector('.mobile-bar').addEventListener('click',function(){
    document.querySelector('.menu').classList.toggle("mystyle");
});



// Owel carousel code

$(document).ready(function(){
    // welcome slider
    $('.owl-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeOut:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    // testimonials carousel.
    $('.owl-testimonial').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});