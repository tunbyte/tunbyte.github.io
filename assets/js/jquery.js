

$(function () {
    $('.filter-btn').on('click', function () {
        const filter = $(this).data('filter');
        $(filter).addClass('active');
        if (filter === 'all') {
            $('.card-item').fadeIn(300);
        } else {
            $('.card-item').each(function () {
                const card = $(this).find('.card-hover');
                if (card.data('category') === filter) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(300);
                }
            });
        }
    });

    $('.filter-btn').on('click', function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('#scrollTop').fadeIn(300);
        } else {
            $('#scrollTop').fadeOut(300);
        }
    });

    $('#scrollTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 100);
    });

});