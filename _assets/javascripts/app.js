//= require jquery-3.1.1.min
//= require bootstrap-sprockets
//= require scripts

$(window).on('load', function() {
  $($('.item.primary')[0]).addClass('active')
  $($('.item.certs')[0]).addClass('active')
  $('#primary-slider').removeClass('hide')
  $('#certs-slider').removeClass('hide')
})
