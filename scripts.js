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
    $("#about").delay(500).slideDown('slow');
    const observer = lozad();
    observer.observe();
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

$(window).on('click', '.lozad', function() {
  $('#gal_window').empty();
  $('#gal_window').show();
  $("#gal_close").show();
  $('#leftarrow').show();
  $('#rightarrow').show();
  $(".lozad").removeClass('current');
  var image = $(this)[0].outerHTML;
  $('#gal_window').append(image);
  $(this).addClass('current');
});

$(window).on('click', '#gal_close', function() {
  $('#gal_window').hide();
  $("#gal_close").hide();
  $('#leftarrow').hide();
  $('#rightarrow').hide();
});

$("body").keydown(function(event) {
  if(event.keyCode == 37) { // left
      var prev = $(".current").prevAll('.lozad:first');
      if ( $(prev).length ){
        $(".current").removeClass('current');
        $(prev).addClass('current');
        $('#gal_window').empty();
        var image = $(prev)[0].outerHTML;
        $(prev).trigger('load');
        $("#gal_window").append(image);
      }
    }else if(event.keyCode == 39){
      var next = $(".current").nextAll('.lozad:first');
      if ( $(next).length ){
        $(".current").removeClass('current');
        $(next).addClass('current');
        $('#gal_window').empty();
        var image = $(next)[0].outerHTML;
        $("#gal_window").append(image);
      }
    }
    const observer = lozad();
    observer.observe();
  });

$(window).on('click', '#leftarrow', function() {
  var prev = $(".current").prevAll('.lozad:first');
  if ( $(prev).length ){
    $(".current").removeClass('current');
    $(prev).addClass('current');
    $('#gal_window').empty();
    var image = $(prev)[0].outerHTML;
    $(prev).trigger('load');
    $("#gal_window").append(image);
  }
    const observer = lozad();
    observer.observe();
});

$(window).on('click', '#rightarrow', function() {
  var next = $(".current").nextAll('.lozad:first');
  if ( $(next).length ){
    $(".current").removeClass('current');
    $(next).addClass('current');
    $('#gal_window').empty();
    var image = $(next)[0].outerHTML;
    $("#gal_window").append(image);
  }
  const observer = lozad();
  observer.observe();
});
