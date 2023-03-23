// window onload
$(function() {

  // lazyload
  var lazyAll = new LazyLoad();
  // IE 이미지 objectfit
  objectFitImages(document.querySelector('.objectFit'));

  // nav toggle
  navToggle();

  /* 

  // go top btn - 상단이동버튼
  goToTop();

  // notice popup - 공지팝업닫기
  noticeMobalCLose();

  // news popup - 뉴스 이미지팝업닫기
  newsMobalCLose();

  // 상단 Top Visual Swiper
  mainvisualSwipe();

  */  


});	

// nav toggle
function navToggle(){
    $("#hamberger").on("click", function(){
      $("nav").slideToggle();
      $(this).toggleClass("active");
  });
}


// go top btn - 상단이동버튼
var goToTop = function () {
  var TopBtn = document.querySelector('.page-top-btn');
  window.addEventListener('scroll', function(e) {
      if ($(window).scrollTop() > 300) {
          TopBtn.classList.add('show');
      } else {
          TopBtn.classList.remove('show');
      }
  });
  if(TopBtn){
      TopBtn.addEventListener('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
      });
  }
}

// notice popup - 공지팝업닫기
var noticeMobalCLose = function () {
  var eventMobal = document.querySelector('.event-popup');
  if(eventMobal) {
      var eventCloseBtn = eventMobal.querySelector('.event-close');
      if(eventCloseBtn) {
          eventCloseBtn.addEventListener('click', function(e){
              e.preventDefault();
              eventMobal.classList.add('hide');
          });
      }
  }
}

// news popup - 뉴스이미지팝업닫기
var newsMobalCLose = function () {
  var newsMobal = document.querySelector('.news-popup-wrap');
  if(newsMobal) {
      var newsCloseBtn = newsMobal.querySelector('.news-close');
      if(newsCloseBtn) {
          newsCloseBtn.addEventListener('click', function(e){
              e.preventDefault();
              newsMobal.classList.add('hide');
          });
      }
  }
}

// 상단 Top Visual Swiper
var mainvisualSwipe = function(){
  if($(".swiper1 .swiper-slide").length > 1) {
      var swiper1 = new Swiper('.slideshow .swiper1', {
          loop: true,
          watchSlidesProgress: true,
          // speed: 1200,
          // autoplay: {
          //     delay: 2500,
          // },
      });
  }
  if($(".swiper2 .swiper-slide").length > 1) {
      var skewEl = document.querySelector('.slideshow-content');
      var swiper2 = new Swiper('.slideshow .swiper2', {
          loop: true,
          thumbs: {
              swiper: swiper1
          },
          speed: 1250,
          autoplay: {
              delay: 2500,
          },
          on: {
              slideChangeTransitionStart: function() {
                  skewEl.classList.remove('slide-end')
              },
              slideChangeTransitionEnd: function() {
                  skewEl.classList.add('slide-end')
              }
          },
          pagination: {
              el: ".swiper2 .swiper-pagination",
              clickable: true,
          },
      });
      swiper2.controller.control = swiper1;
  }
  
}