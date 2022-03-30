// preloader
$(".preloader").css("opacity", 1);
$('body, html').addClass('no-scroll');
setTimeout(function () {

    $(".text-load").css("opacity", 0);
    $(".text-load2, .load-line2").fadeIn('show');
}, 3000);


setTimeout(function () {
    $(".preloader").fadeOut('show');
    $('body, html').removeClass('no-scroll');
}, 7000);

// preloader end

$('.family-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    fade: true,
    appendArrows: '.family-slider__nav',
    appendDots: '.family-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                appendArrows: '.family-slider',
                dots: true,
            }
        }

    ]
});

$('.about-complex-slider').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.about-complex-text-slider',
    variableWidth: true,
});

$('.about-complex-text-slider').slick({
    asNavFor: '.about-complex-slider',
    appendArrows: '.about-complex-slider__nav',
    prevArrow: '<button type="button" class="slick-prev slick-border"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-border"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.about-complex-nav').slick({
    slidesToShow: 4,
    variableWidth: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.about-complex-slider, .about-complex-text-slider',
});

$('.planes-gallery').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev slick-border"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-border"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slick-slider').slick('setPosition');
});

$('.months-slider').slick({
    slidesToShow: 12,
    asNavFor: '.stages-work-slider',
    arrows: false,
    variableWidth: true,
    focusOnSelect: true,
    infinite: false
});

$('.stages-work-slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev slick-border"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-border"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    appendArrows: '.stages-work-slider__nav',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});


//плавный скролл
$(document).ready(function () { //плавный скролл
    $(".go_to").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top,
            heightHeader = $('header').height();
        $('body,html').animate({scrollTop: top - heightHeader}, 1500);
    });
});
//плавный скролл end

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

let homeSlider = $('.stages-work-slider');

$('.counter-slide__default').text("из " + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('[name="phone"]').mask('+7(999) 999-99-99');

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 768) {
        $('.documents-slider:not(.slick-initialized)').slick({
            dots: false,
            infinite: true,
            slidesToShow: 2,
            arrows: false,
            variableWidth: true,
        });
    } else {
        $(".documents-slider.slick-initialized").slick("unslick");
    }
    if ($(window).width() < 576) {
        $('.advantages-slider:not(.slick-initialized)').slick({
            dots: false,
            infinite: true,
            slidesToShow: 2,
            arrows: false,
            variableWidth: true,
        });
    } else {
        $(".advantages-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.btn-burger').click(function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').click(function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

