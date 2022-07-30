const searchEl = document.querySelector('.search');
// 클래스 명이 search인 요소를 찾아서 searchEl이라는 변수에 담는다.
// document : html 그 자체를 의미한다.
// <!DOCTYPE html>에 보이듯이 DOCTYPE이기 때문에 
const searchInputEl = searchEl.querySelector('input');
// const searchInputEl = document.querySelector('.search input');
// 요소를 효율적으로 찾기 위해 document 대신 searchEl를 작성하고, 클래스 명을 생략함.

// searchEl에 click 이벤트를 추가할 것임! 클릭시 익명함수를 실행할 예정 = 헨들러
searchEl.addEventListener('click',function () {
    searchInputEl.focus();
    // searchInputEl 포커스 강제 적용
    // 아무곳이나 클릭해도 포커스 됨
});

searchInputEl.addEventListener('focus',function () {
    // 특정 요소에 클래스(=focused) 정보를 가지고 있는 객체에서 어떤 클래스 내용을 추가 하겠다.
    searchEl.classList.add('focused');
    // searchInputEl에 어떤 속성(=placeholder)을 추가 할 것이다. 
    searchInputEl.setAttribute('placeholder',"통합검색");
});

searchInputEl.addEventListener('blur',function () {
    // 다 사용을 했으니 지우겠다. (=필요할 때만 클래스를 만들고 지울거임)
    searchEl.classList.remove('focused');
    // searchInputEl에 어떤 속성('')을 추가 할 것이다. 
    searchInputEl.setAttribute('placeholder','');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();