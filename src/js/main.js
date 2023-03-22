// window onload
$(function() {

    // lazyload
    var lazyAll = new LazyLoad();
    // IE 이미지 objectfit
    objectFitImages(document.querySelector('.objectFit'));

    // nav toggle
    navToggle();

});	

// nav toggle
function navToggle(){
    $("#hamberger").on("click", function(){
      $("nav").slideToggle();
      $(this).toggleClass("active");
  });
}