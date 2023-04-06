// window onload
$(function() {

    // lazyload
    var lazyAll = new LazyLoad();
    // IE 이미지 objectfit
    objectFitImages(document.querySelector('.objectFit'));

    // Nav 토글버튼
    navToggle();

    // news popup - 뉴스 이미지팝업닫기
    newsMobalCLose();

    // notice popup - 공지팝업닫기
    noticeMobalCLose();

    // intro popup
    if(document.querySelector('.intro')){
        // 레트로 텍스트 애니메이션
        var introTxt = document.querySelector('.intro-txt p');
        ratroAni(introTxt);
        // 인트로팝업닫기
        introMobalCLose();
    }

    /* 

    // go top btn - 상단이동버튼
    goToTop();

    // 상단 Top Visual Swiper
    mainvisualSwipe();

    */  


});	

// nav toggle
function navToggle(){
    $("#hamberger").on("click", function(){
    //   $("nav").slideToggle();
    $("nav").toggleClass("open");
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

// 레트로 텍스트 애니메이션
var ratroAni = function textDisplay(ele) {
    
    const textArray = ele.innerText.split('');
    // const special = ['T', 'E', 'O', 'U', 'N', 'I', 'V', 'E', 'R', 'S', 'E', '에', '오', '신', '걸', '환', '영', '합', '니', '다'];
    // const special = ['T', 'E', 'O', 'U', 'N', 'I', 'V', 'E', 'R', 'S', 'E'];
    // const special = ['구', '독', '좋', '아', '요', '알', '림', '설', '정', '필', '수'];
    const special = ['~', '@', '!', '#', '$', '%', '^', '&', '*']
    const exception = [' ', '\n', '.', ',', ':', ')'];
    const randomIntBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min )
    }
    
    const numArray = []
    textArray.forEach(_ => {
        const num = randomIntBetween(5, 40)
        numArray.push(num)
    });

    let newText
    let completeCount
    const timer = setInterval(() => {
        completeCount = 0
        newText = ''
        numArray.forEach((num, i) => {
            if(exception.includes(textArray[i]) || numArray[i] === 0) {
                newText += textArray[i]
                completeCount += 1
            } else {
                newText += special[numArray[i] % special.length]
                numArray[i] = --num
            }
        })
        console.log(completeCount, numArray.length)
        ele.innerText = newText
        if (completeCount === numArray.length) clearInterval(timer);
        
    }, 100)
    setInterval(() => {
        document.querySelector('.intro-close').classList.add('show');
    }, 3500)
} 

// 인트로팝업닫기
var introMobalCLose = function () {
            
    var introMobal = document.querySelector('.intro');
    var eventCloseBtn = document.querySelector('.intro-close');
    eventCloseBtn.addEventListener('click', function(e){
        e.preventDefault();
        introMobal.classList.add('hide');
    });
  }
