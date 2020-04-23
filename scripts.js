$(document).ready(function() {
    $('#header').load('header.html');
    $("#about").delay(500).slideDown('slow');
    const observer = lozad();
    observer.observe();
});

// HOMEPAGE SLIDESHOW
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

// CLOSE THINGS
$('button').css('cursor','pointer');
$(window).on('click', 'button', function() {
  $('#about').hide();         // close about on homepage
  $('#gal_window').hide();    // close gal window on gallery
  $("#gal_close").hide();
  $('#leftarrow').hide();
  $('#rightarrow').hide();
});

// NAVBAR
$('#threeline').css('cursor','pointer');
$(document).on('click', '#threeline', function(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    $('#modal').fadeIn();
    $('.gal_modal').hide();
    $(this).hide();
});

$('#close').css('cursor','pointer');
$(document).on('click', '#close', function(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    $('#modal').fadeOut();
    $('#threeline').show();
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

// GALLERY
// LAZY LOAD
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

$('#rightarrow').css('cursor','pointer');
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
