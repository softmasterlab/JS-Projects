"use strict";

$(document).ready(function() {
    
    $('aside').css('left', '-280px');
    
    let toggle_flag = 1;
    $('#menu').click(function() {
       //$('aside').toggle(600);
       //$('aside').slideToggle(600);
        if (toggle_flag == 1) {
            $('aside').animate({left: '0px'}, 600);
            toggle_flag = 2;
        } else {
            $('aside').animate({left: '-280px'}, 600);
            toggle_flag = 1;
        }
    });
    
    $('aside ul li a').hover(
        function() {
            $(this).animate({paddingLeft: '20px', opacity: 0.5, color: 'yellow'}, 400);
        },
        function() {
            $(this).animate({paddingLeft: '0px', opacity: 1.0, color: 'beige'}, 400);
        }
    );
    
    $('#p1').css('left', '0px');
    $('#p2').css('left', '600px');
    $('#p3').css('left', '600px');
    
    let slide_flag = 1;
    function rotate_left() {
        if (slide_flag == 1) {
            $('#p1').animate({left: '-600px'}, 600);
            $('#p2').animate({left: '0px'}, 600);
            $('#p3').css('left', '600px');
            slide_flag = 2;
        } else if (slide_flag == 2) {
            $('#p2').animate({left: '-600px'}, 600);
            $('#p3').animate({left: '0px'}, 600);
            $('#p1').css('left', '600px');
            slide_flag = 3;
        } else if (slide_flag == 3) {
            $('#p3').animate({left: '-600px'}, 600);
            $('#p1').animate({left: '0px'}, 600);
            $('#p2').css('left', '600px');
            slide_flag = 1;
        }
    }
    
    $('#left').click(function() {
        rotate_left();
    });
    
    let timer = {};
    $('#start').click(function() {
        timer = setInterval(rotate_left, 2000);
        $('#start').prop('disabled', true);
    });
    
    $('#stop').click(function() {
        clearInterval(timer);
    });
    
    $("#accordion").accordion();
    
});