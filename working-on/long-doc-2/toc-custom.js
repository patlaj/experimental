
// adds stick behaviour based on window location
var $window = $(window),
$stickyEl = $('#toc'),
$footerDiv = $('.pagedetails'),
elTop = $stickyEl.offset().top,
scrollPosition = $(window).height() + $(window).scrollTop();

console.log(elTop);

$window.scroll(function() {
  console.log($(window).scrollTop());
  console.log("Max-height = " + ($footerDiv.offset().top - $(window).scrollTop()));
// $(window).scrollTop() -


$('#toc').css({"maxHeight":($footerDiv.offset().top - $(window).scrollTop())+"px"})
$('#toc').css({"maxWidth":($(window).width() / 3.3)+"px"})


// only adds sticky class if it's in desktop size
$(window).width();
if ($window.width() > 769) {
  $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
  // $stickyEl.css('width', '26%', $window.scrollTop() > elTop);
}


// control width of sticky class
// $(window).width();
// if ($window.width() > 769) {
//   $stickyEl.css('width', '26%');
//   $stickyEl.css('width', '100%;', $window.scrollTop() > elTop);
// }


// reset width when at top of screen

});


// detects when in mobile and adds classes to control the mobile-toc behaviour to hide menu
var $window = $(window);

$(window).width();
console.log($(window).width());
if ($window.width() < 769) {
  $('.longdoc-toc-link').addClass('mobile-toc');
  $('#toc').css('width', '100%');

} else {
  $('.longdoc-toc-link').removeClass('mobile-toc');
}
  $('.mobile-toc').click(function(){
  $( '#toc').hide();
});


$(window).resize(function(){
  if ($window.width() < 769) {
    $('.longdoc-toc-link').addClass('mobile-toc');
  } else {
    $('.longdoc-toc-link').removeClass('mobile-toc');
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

// shows the menu on mobile when clicked
$('.show-menu').click(function(){
 $( '#toc').toggle();

});
