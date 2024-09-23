$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        margin: 25,
        loop: true,
        nav: true,
        dots: false,
        stagePadding: 40,
        responsive: {
            576: { items: 1 },
            768: { items: 1 },
            992: { items: 2 },
            1200: { items: 2 }
        }
    });
});
