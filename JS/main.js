// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {

  // 광클금지 상태변수
  let prot = 0; // 0-허용, 1-불허용

  const abtn = document.querySelectorAll(".abtn");

  const slide = document.querySelector("#slide");

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

    // 자동넘김지우기 함수 호출!
    clearAuto();
  }; //////////// click ////////////////

  // 3-2. 왼쪽버튼 클릭시 : 왼쪽버튼 abtn변수 0번째
  abtn[0].onclick = () => {
    // 광클금지 ////////////
    if (prot) return; // 나가!
    prot = 1; // 잠금!
    setTimeout(() => (prot = 0), 800);
    ////////////////////////////

    let cli = slide.querySelectorAll("li");
    slide.insertBefore(cli[cli.length - 1], cli[0]);

    console.log(cli);

    // 2. 왼쪽 바깥에 -100% left값 주기!
    slide.style.left = "-100%";
    // 첫번째 실행후 생긴 트랜지션 없애기!
    slide.style.transition = "none";

    setTimeout(() => {
      // 3. left값을 0으로 트랜지션 애니메이션하기
      slide.style.left = "0";
      slide.style.transition = ".8s ease-in-out";
    }, 0);

    // 자동넘김지우기 함수 호출!
    clearAuto();
  }; ///////////// click //////////////
  slide.querySelectorAll("li").forEach((ele, idx) => {
    ele.setAttribute("data-seq", idx);
  }); /////// forEach ////////////////

  /***************************************** 
        자동넘기기 기능구현
    *****************************************/
  // 인터발용변수
  let autoI;
  // 타임아웃용 변수
  let autoT;

  // 자동넘기기 /////
  function slideAuto() {
    autoI = setInterval(() => {
      // 오른쪽버튼 클릭시 이동코드와 동일함!!!
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
      }, 800); // setTime
    }, 5000); // setInter
  } //////// slideAuto 함수 //////////

  // 인터발함수 최초호출!
  slideAuto();

  /*********************************** 
        함수명: clearAuto
        기능: 인터발지우기,타임아웃셋팅
    ***********************************/
  function clearAuto() {
    // 1. 인터발 지우기
    clearInterval(autoI);
    // 2. 타임아웃 지우기(실행쓰나미 방지!)
    clearTimeout(autoT);
    // 3. 일정시간 후 다시 인터발 호출!
    autoT = setTimeout(slideAuto, 5000);
  } /////// clearAuto함수 ////////

} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////