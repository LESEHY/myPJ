// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {

  // 광클금지 상태변수
  let prot = 0; // 0-허용, 1-불허용

  const abtn = document.querySelectorAll(".abtn");

  const slide = document.querySelector("#slide");

  

//   const indic = document.querySelectorAll(".indic li");


  // 오른쪽 버튼 클릭시
  abtn[1].onclick = () => {
    // 광클금지 ////////////
    if (prot) return; // 나가!
    prot = 1; // 잠금!
    setTimeout(() => (prot = 0), 800);
    ////////////////////////////

    slide.style.left = "-100%";
    slide.style.transition = ".8s ease-in-out";
    // 0.8초후 맨앞li 잘라서 맨뒤로 이동!
    setTimeout(() => {
      // 1. 맨앞li 잘라서 맨뒤로 이동!
      slide.appendChild(slide.querySelectorAll("li")[0]);
      // 2. left값 0으로 초기화!
      slide.style.left = "0";
      /* 3. 트랜지션 없애기 */
      slide.style.transition = "none";
    }, 800);

    // 블릿변경함수 호출!
    // -> 오른쪽버튼은 두번째 슬라이드가 주인공!
    // chgIndic(1);

    // 자동넘김지우기 함수 호출!
    // clearAuto();
  }; //////////// click ////////////////

  // 3-2. 왼쪽버튼 클릭시 : 왼쪽버튼 abtn변수 0번째
  abtn[0].onclick = () => {
    // 광클금지 ////////////
    if (prot) return; // 나가!
    prot = 1; // 잠금!
    setTimeout(() => (prot = 0), 800);
    ////////////////////////////

    // 1. 맨뒤요소를 잘라서 맨앞으로 이동한다!
    // 대상: slide변수 -> ul#slide
    // 사용메서드: insertBefore(넣을놈,넣을놈전놈)
    // 현재 li자식요소 수집하기!
    let cli = slide.querySelectorAll("li");
    slide.insertBefore(cli[cli.length - 1], cli[0]);

    console.log(cli);

    // 2. 왼쪽 바깥에 -100% left값 주기!
    slide.style.left = "-100%";
    // 첫번째 실행후 생긴 트랜지션 없애기!
    slide.style.transition = "none";

    // 2번과 3번 코드 사이에 시차필요!!!
    // setTimeout()사용!
    // -> 시간을 0으로 해도 코드실행구역을 분리하므로
    // 코드가 별도로 실행된다!(순서를 지킴!)
    setTimeout(() => {
      // 3. left값을 0으로 트랜지션 애니메이션하기
      slide.style.left = "0";
      slide.style.transition = ".8s ease-in-out";
    }, 0);

    // 블릿변경함수 호출!
    // -> 왼쪽버튼은 첫번째 슬라이드가 주인공!
    // chgIndic(0);

    // 자동넘김지우기 함수 호출!
    // clearAuto();
  }; ///////////// click //////////////

} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
