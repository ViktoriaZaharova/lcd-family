$('.family-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    fade: true,
    appendArrows: '.family-slider__nav',
    appendDots: '.family-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
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