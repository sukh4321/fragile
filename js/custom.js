$('.bottom_nav ul').on('click', '.nav-arrow', function () {
	if($(this).hasClass('active'))
		$(this).removeClass('active');
		
	else{
		$('.nav-arrow').removeClass('active');
		$(this).addClass('active')
	}
    
});

$(document).ready(function () {
//    // Show hide popover
    /*$(".nav-dropdown").click(function () {
       $(this).find(".sub_menu").slideToggle("fast");
   });*/
});
//$(document).on("click", function (event) {
//    var $trigger = $(".nav-dropdown");
//    if ($trigger !== event.target && !$trigger.has(event.target).length) {
//        $(".sub_menu").slideUp("fast");
//    }
//});

$(document).ready(function () {
    $(".toggle-btn").click(function () {
        $(".menu-toggle").toggleClass("toclass");
    });

    $(".cross-btn").click(function () {
        $(".menu-toggle").removeClass("toclass");
    });

    $(window).scroll(function () {
        var top = 74;
        if ($(window).width() < 767) {
            top = 1;
        }
        if ($(window).scrollTop() >= top) {
            $('body').addClass('fixed-header');
        } else {
            $('body').removeClass('fixed-header');
        }
    });

});


$(document).on('ready', function () {

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,

                }
                    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
                    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
                    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                    }
                ]
    });
    $('.regular').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
                    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
                    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                    }
                ]
    });

});
