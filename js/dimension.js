$(document).ready(function(){
    // DIMENSIONS
    var window_width = $(window).width();
    var window_height = $(window).height();
    
    var height_container = window_height - 60;
    
    $('.container-fluid').height(height_container);
    $('.menu-choice-music').height(height_container-200);
    
    // FEATURES    
    $(document).on('click', '#chevron-choice-music', function() {
        $('#menu-music').slideUp(700);
        $('.fa-chevron-up').css('transform','rotate(180deg)');
    });
});

