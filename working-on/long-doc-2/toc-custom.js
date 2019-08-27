// shows the menu on mobile when clicked
$('.show-menu').click(function(){
 $( '#toc').toggle();
});

// adds stick behaviour based on window location
var $window = $(window),
$stickyEl = $('#toc'),
$footerDiv = $('.pagedetails'),
elTop = $stickyEl.offset().top,
elMenuTop = $('#btn-toc').offset().top,
scrollPosition = $(window).height() + $(window).scrollTop();

console.log(elTop);

$window.scroll(function() {
  console.log($(window).scrollTop());
  console.log("Max-height = " + ($footerDiv.offset().top - $(window).scrollTop()));
// $(window).scrollTop() -

$('#toc').css({"maxHeight":($footerDiv.offset().top - $(window).scrollTop())+"px"})
// $('#toc').css({"maxWidth":($(window).width() / 3.3)+"px"})
// dont know if there's an easier way to write this, but this works for now //

if ($window.width() < 992) {
  $('#toc').css({"width":(100)+"%"})
}

if ($window.width() > 992) {
  $('#toc').css({"maxWidth":($(window).width() / 3)+"px"})
}

if ($window.width() > 1024) {
  $('#toc').css({"maxWidth":($(window).width() / 3.55)+"px"})
}

if ($window.width() > 1225) {
  $('#toc').css({"maxWidth":($(window).width() / 3.15)+"px"})
}

if ($window.width() > 1325) {
  $('#toc').css({"maxWidth":($(window).width() / 3.6)+"px"})
}

if ($window.width() > 1425) {
  $('#toc').css({"maxWidth":($(window).width() / 3.75)+"px"})
}

if ($window.width() > 1525) {
  $('#toc').css({"maxWidth":($(window).width() / 3.95)+"px"})
}

if ($window.width() > 1625) {
  $('#toc').css({"maxWidth":($(window).width() / 4.2)+"px"})
}

if ($window.width() > 1725) {
  $('#toc').css({"maxWidth":($(window).width() / 4.4)+"px"})
}

if ($window.width() > 1825) {
  $('#toc').css({"maxWidth":($(window).width() / 4.7)+"px"})
}

if ($window.width() > 1925) {
  $('#toc').css({"maxWidth":($(window).width() / 5)+"px"})
}

// only adds sticky class if it's in desktop size
$(window).width();
if ($window.width() > 992) {
  $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
  $('#btn-toc').toggleClass('btn-toc-style', $window.scrollTop() > elTop);
  // $stickyEl.css('width', '26%', $window.scrollTop() > elTop);
}

// adds sticky
$(window).width();
if ($window.width() < 992) {
  $('#btn-toc').toggleClass('btn-toc-style', $window.scrollTop() > elMenuTop);
  // $stickyEl.css('width', '26%', $window.scrollTop() > elTop);
}


// control width of sticky class
// $(window).width();
// if ($window.width() > 769) {
//   $stickyEl.css('width', '26%');
//   $stickyEl.css('width', '100%;', $window.scrollTop() > elTop);
// }


});


// detects when in mobile and adds classes to control the mobile-toc behaviour to hide menu
var $window = $(window);

$(window).width();
console.log($(window).width());
// if ($window.width() < 992) {
//   $('.longdoc-toc-link').addClass('mobile-toc');
//   // $('#toc').css('width', '100%');
//
// } else {
//   $('.longdoc-toc-link').removeClass('mobile-toc');
// }
//   $('.mobile-toc').click(function(){
//   $( '#toc').hide();
// });


$(window).resize(function(){
  if ($window.width() < 992) {
    $('.longdoc-toc-link').addClass('mobile-toc');
    // $('#toc').addClass('mobile-toc-scroll');
  } else {
    $('.longdoc-toc-link').removeClass('mobile-toc');
    // $('#toc').removeClass('mobile-toc-scroll');

  }
    $('.mobile-toc').click(function(){
    $( '#toc').hide();
 });

});

// expose item as active

$('.menu-drilldown').click(function(){
  $(this).parent().toggleClass('active');
  return false;
});
