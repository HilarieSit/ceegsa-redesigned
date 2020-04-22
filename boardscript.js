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
