$(function() {
  $('.left-login-capsule').hover(function() {
    $('.header-image-left').css('transform', 'scale(1.3)');
  }, function() {
    // on mouseout, reset the background colour
    $('.header-image-left').css('transform', '');
  });
});
$(function() {
  $('.right-login-capsule').hover(function() {
    $('.header-image-right').css('transform', 'scale(1.3)');
  }, function() {
    // on mouseout, reset the background colour
    $('.header-image-right').css('transform', '');
  });
});

$(function() {
  $('.left-login-capsule').click(function() {
    $('.top.left').toggleClass("fullscreen");
    $('.top.right').toggleClass("reverted-fullscreen");
    $('.login-area').toggleClass("show-login");
  });
});
$(function() {
  $('.right-login-capsule').click(function() {
    $('.top.right').toggleClass("fullscreen");
    $('.top.left').toggleClass("reverted-fullscreen");
    $('.login-area').toggleClass("show-login");
  });
});
