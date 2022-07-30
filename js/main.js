const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window : 브라우저 그 자체 창
// 화면 자체에 스크롤 이벤트를 넣을거야 -> 내릴 시 익명함수 실행
// _.throttle로 제어
// _.throttle(함수,시간)
window.addEventListener('scroll',_.throttle(function () {
    console.log(window.scrollY);
    // 스크롤할때마다 너무 많이 실행 -> 화면 버벅거림
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,

            // 찐으로 사라지게 만들기
            display: 'none'
        });
        // 버튼 보이기
        gsap.to(toTopEl,.2,{
            x: 0
        });
    }else{
        // 배지 나타내기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // 버튼 숨기기
        gsap.to(toTopEl,.2,{
            x: 100
        });
    }
},300));

toTopEl.addEventListener('click',function () {
    gsap.to(window, .7,{
        scrollTo: 0

    })
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl,index) {
    // gsap.to(요소, 시간, 옵션)
    gsap.to(fadeEl,1,{
        delay: (index+1) * .7, // 0.7,1.4,2.1,2.7
        opacity:1
    });
});

// 생성자
new Swiper('.notice-line .swiper-container',{
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper-container',{
    slidesPerView:3, // 한 번에 보여지는 슬라이드 수 
    spaceBetween:10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드 가운데 보이기
    autoplay: {
        delay: 3000
    },
    loop: true,
    pagination:{
        el: '.promotion .swiper-pagination',
        clickable : true
    },
    navigation: {
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30,
    slidesPerView: 5,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function () {
   isHidePromotion = !isHidePromotion; 
   if (isHidePromotion) {
        // 숨김 처리
        promotionEl.classList.add('hide');
   }else{
        // 보임 처리
        promotionEl.classList.remove('hide');
   }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector,delay,size) {
    // gsap.to(요소, 시간, 옵션)
    gsap.to(
        selector, 
        random(1.5,2.5), 
        {
        y: size,
        repeat: -1,
        yoyo:true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
        }
    );
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
    new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
});

