$(document).ready(function() {

  // jQuery methods go here...
  $('#box').mouseenter(function() {
    $(this).hide();
  });
  $('#box').mouseleave(function() {
    $(this).show();
  });
});
