$(document).ready(function() {
    $('#header').load('header.html');
    var alldates = '';
    var counter = 0;
    $('#prev_board button').each(function() {
        alldates += $(this)[0].outerHTML;
        counter++;
    });
    $("#year_nav").append(alldates);
    $('#year_nav .2019').addClass('active');
    var starttext = $('#2019 .member_container').html();
    $("#window").append(starttext);
    $("#about").delay(1000).slideDown('slow');
});

$(document).on('click', 'button', function(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    if (!$(this).hasClass('active')){
      $('#window').empty();
      var yearstr = $(this).attr("class");
      var starttext = $('.'+yearstr).siblings('.member_container')[0].outerHTML;
      $("#window").append(starttext);
      $('.active').removeClass('active');
      $(this).addClass('active');
    }
});

var index = -1;

function showImg() {
    var images = document.getElementsByClassName("slide_img");
    if (index != -1) {
        images[index].style.display = "none";
    }
    index++;
    if (index >= images.length) {
        index = 0
    }
    images[index].style.display = "block";
    setTimeout(showImg, 4000);
}

$(document).on('click', '#threeline', function(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    $('#modal').fadeIn();
    $('.gal_modal').hide();
    $(this).hide();
});

$(document).on('click', '#close', function(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    $('#modal').fadeOut();
    $('#threeline').show();
});

$(document).on('click', '#aboutclose', function(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    $('#about').fadeOut();
});

if ($(window).height() < 420) {
    $('#modal a').css('font-size', '30px');
}

$(window).on('resize', function() {
    if ($(window).width() > 768) {
        $('#modal').hide();
        $('#threeline').hide();
        $("#about").delay(1000).slideDown('slow');
    } else {
        $('#threeline').show();
    }
    if ($(window).height() < 420) {
        $('#modal a').css('font-size', '30px');
    } else {
        $('#modal a').css('font-size', '50px');
    }
});

// $('.gal_text').click(function() {
//     $(this).siblings('.gal_modal').fadeIn();
    // $("#nav").css('position','fixed');
    // $("#banner").css('position','fixed');
    // $(".gal_img").css("opacity", "0.5");
// });
