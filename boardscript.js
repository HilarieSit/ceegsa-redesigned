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
