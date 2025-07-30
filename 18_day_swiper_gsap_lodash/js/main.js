const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');
const searchIconEl = document.querySelector('.material-icons'); 

// 검색상자를 클릭했을 경우 이벤트 처리
searchEl.addEventListener('click', function() {
  //alert('실행됨');
  searchInputEl.focus();
});

// 통합검색 입력상자가 포커스 될 때 이벤트 처리
searchInputEl.addEventListener('focus', function() {
  searchInputEl.setAttribute('placeholder', '통합검색');
  //searchIconEl.style = 'display:none;';
  searchEl.classList.add('focused');
});

// 통합검색 입력상자가 포커스가 해제될 때(blur) 이벤트 처리
searchInputEl.addEventListener('blur', function() {
  searchInputEl.setAttribute('placeholder', '');
  //searchIconEl.style = 'display:inline;';
  searchEl.classList.remove('focused');
});

//  scroll의 이벤트를 500미리마다 감지
//  main.html에서 추가한 lodash script를 사용
const badgeElement = document.querySelector("header .badges");
window.addEventListener("scroll", _.throttle(function(){
  if(this.window.scrollY > 500){
//    badgeElement.style.display = "none";
    gsap.to(badgeElement, 0.6, {
      opacity: 0,
      display: "none",
    });

  }else{
//    badgeElement.style.display = "block";
    gsap.to(badgeElement, 0.6, {
          opacity: 1,
          display: "block",
        });
  }
  console.log("X: ", this.window.scrollX);
  console.log("Y: ", this.window.scrollY);
}, 500));

const fadeElementArr = document.querySelectorAll(".visual .fade-in");
fadeElementArr.forEach(function (element, idx){
  console.log(idx);
  console.log(element);
  gsap.to(element, 1, {
    delay: (idx + 1)* 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  speed: 300,
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 화면에 보여지는 개수
  spaceBetween: 10, //  슬라이드 간 간격
  centeredSlides: true, //  중앙의 것이 active 상태, pre, next
//  autoplay: true, //  prev, next 버튼을 누르면 autoplay가 false로 바뀜. 밑의 것으로 대체.
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,//  이 옵션이 있어샤 prev, next 버튼을 눌러도
                                  //  다시 활성화 됨.
  },
  loop: true,
//  direction: "vertical",
//  speed: 300,
//  autoplay: true,
//  loop: true,

// 조심해야 함. e1(숫자일이 아닌 소문자 엘)
pagenation:{
  el: ".promotion .swiper-pagination",
  clickable: true,
},
navigation:{
  prevEl: ".promotion .swiper-prev",
  nextEl: ".promotion .swiper-next",
}
});

