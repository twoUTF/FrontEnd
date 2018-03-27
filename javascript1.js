function(e) {
    if ($(this).parent().hasClass('mega')) {
        if ($(this).parent().hasClass('open')) {
            $(this).parents('.container').removeClass('clip-mega-menu');
        } else {
            $(this).parents('.container').addClass('clip-mega-menu');
        }

    } else {
        $(this).parents('.container').removeClass('clip-mega-menu');


    }
    $(this).parent().toggleClass('open').siblings().removeClass('open');

}

function(e) {
    if ($(this).parent().hasClass('mega')) {
        if ($(this).parent().hasClass('open')) {
            $(this).parents('.container').removeClass('clip-mega-menu');
        } else {
            $(this).parents('.container').addClass('clip-mega-menu');
        }

    } else {
        $(this).parents('.container').removeClass('clip-mega-menu');


    }
    $(this).parent().toggleClass('open').siblings().removeClass('open');

}