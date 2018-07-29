// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(function(){

    /* Fullpage js */
    $("#fullpage").fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
        navigationTooltips: ['Home', 'About Me', 'Projects', 'Contact'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 1025,
        verticalCentered: true
    });

    /* Mobile menu */
    $(".sidenav-toggle > div").click(function () {
        $(this).toggleClass("is-active");
        $(".modal").slideToggle(200);
        $(".sidenav li").each(function (i) {
            $(this).delay(40 * i).toggle({ direction: 'left' });
        });
    });

    $(".sidenav > li").on("click", function () {
        $(".sidenav > li").toggle();
        $(".modal").slideToggle(200);
        $(".sidenav-toggle > div").toggleClass("is-active");
    });

    /* Slick js */
    $('.mySlick').slick({
        nextArrow: '<i class="slick-next fa fa-chevron-right"></i>',
        prevArrow: '<i class="slick-prev fa fa-chevron-left"></i>',
        autoplay: false,
        dots: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });   


});


/* Tingle js  */
(function(){
    var myModalContent = new tingle.modal();
    var myBtn = document.querySelectorAll("button.project__btn");
    function myHandler() {
        return function () {
            myModalContent.open();
            if (this.hasAttribute("data-btn")) {
                myModalContent.setContent(document.querySelector(".project" + this.getAttribute("data-btn") + "-modal").innerHTML);
            } else {
                myModalContent.setContent(document.querySelector(".project1-modal").innerHTML);
            }
        };
    }
    for (var i = 0; i < myBtn.length; i++) {
        myBtn[i].addEventListener("click", myHandler());
    }
})();
