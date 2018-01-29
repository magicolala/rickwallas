$(document).ready(function(){
    // DIMENSIONS
    var window_width = $(window).width();
    var window_height = $(window).height();
    
    var height_container = window_height - 60;
    
    $('.container-fluid').height(height_container);
    $('.menu-choice-music').height(height_container-200);
    
    // FEATURES    
    $(document).on('click', '#chevron-choice-music', function() {
        if ($('#menu-music').hasClass('open-menu'))
        {
            $('#menu-music').slideUp(700);
            $('#menu-music').removeClass('open-menu');
            $('#menu-music').addClass('close-menu');
            $('.fa-chevron-up').css('transform','rotate(180deg)');
        }
        else
        {
            $('#menu-music').slideDown(700);
            $('#menu-music').removeClass('close-menu');
            $('#menu-music').addClass('open-menu');
            $('.fa-chevron-up').css('transform','none');
        }
    });
});

