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
//  console.log("X: ", this.window.scrollX);
//  console.log("Y: ", this.window.scrollY);
}, 500));

// visual section을 나타나게 하기
 const fadeElementArr = document.querySelectorAll('.visual .fade-in');
 fadeElementArr.forEach(function (element, idx) {
   gsap.to(element, 1, {
     delay: (idx + 1) * 0.7,
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
  autoplay: true, //  prev, next 버튼을 누르면 autoplay가 false로 바뀜. 밑의 것으로 대체.
/*  autoplay: {
    delay: 1000,
    disableOnInteraction: false,//  이 옵션이 있어샤 prev, next 버튼을 눌러도
                                  //  다시 활성화 됨.
  },*/
  loop: true,
//  direction: "vertical",
//  speed: 300,
//  autoplay: true,
//  loop: true,

// 조심해야 함. e1(숫자일이 아닌 소문자 엘)
pagination:{
  el: ".promotion .swiper-pagination",
  clickable: true,
},
navigation:{
  prevEl: ".promotion .swiper-prev",
  nextEl: ".promotion .swiper-next",
}
});

// 프로모션 슬라이드
const promotionElement = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false; // 처음에는 프로모션 보이게 하기
promotionToggleBtn.addEventListener("click", function() {
  isHidePromotion = !isHidePromotion;
  console.log(isHidePromotion);
  if (isHidePromotion) {  // 숨김 처리
    promotionElement.classList.add("hide");
  } else {                // 보이게 하기
    promotionElement.classList.remove("hide");    
  }
});

/**
 * 주어진 최소값과 최대값 사이의 랜덤 숫자를 소수점 두 자리까지 반환합니다.
 *
 * @param {number} min - 최소값.
 * @param {number} max - 최대값.
 * @returns {number} 소수점 두 자리까지의 랜덤 숫자.
 */
function getRandomNumber(min, max) {
    // 입력 값이 숫자인지 확인하고, 유효하지 않으면 오류 메시지 출력 후 0 반환
    if (typeof min !== 'number' || typeof max !== 'number') {
        console.error("getRandomNumber: min과 max는 숫자여야 합니다.");
        return 0;
    }

    // 최소값이 최대값보다 크면 두 값을 교환
    if (min > max) {
        [min, max] = [max, min]; // ES6 구조 분해 할당을 이용한 값 교환
    }

    // 랜덤 숫자 생성 (min 포함, max 포함)
    // Math.random()은 0 (포함)에서 1 (제외) 사이의 부동소수점 의사 난수를 반환합니다.
    // (max - min)을 곱하여 범위의 크기를 조절하고, min을 더하여 시작점을 조정합니다.
    let randomNumber = Math.random() * (max - min) + min;

    // 소수점 둘째 자리까지 반올림
    // 숫자에 100을 곱하여 소수점 두 자리를 정수 부분으로 이동
    // Math.round()로 반올림하여 정확도를 높임
    // 다시 100으로 나누어 소수점 두 자리로 되돌림
    return Math.round(randomNumber * 100) / 100;
}

// 유투부 floating 이미지 애니메이션
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    1,  // 애니메이션 동작 시간
    { // 옵션
      y: size, // 최고높이 size
      repeat: -1, // 계속 반복
      yoyo: true, // 반복이 되면서 원래 처음으로도 돌아갈 수 있도록 하는 옵션
      delay: getRandomNumber(0, delay), // 지연 시간
    }
  );
}
floatingObject('.floating1', 1, 15);    
floatingObject('.floating2', .5, 15);    
floatingObject('.floating3', 1.5, 20);