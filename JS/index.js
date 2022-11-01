$(() => {
    /* 넘기기 버튼 */
    const lb = $(".ab1");
    const rb = $(".ab2");
    /* 배너 */
    const slide = $("#slide");

    // 광클금지 상태변수
    let prot = 0; // 0-허용, 1-불허용

    rb.click(function () {
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 800);
        ///////////// if ///////////////

        slide.css({
            left: "-100%",
            transition: ".8s ease-in-out"
        }) // css

        // 0.8초후 맨앞li 잘라서 맨뒤로 이동!
        setTimeout(() => {
            // 1. 맨앞li 잘라서 맨뒤로 이동!
            slide.append($("#slide li").eq(0));
            // 2. left값 0으로 초기화!
            slide.css({
                left: "0",
                /* 3. 트랜지션 없애기 */
                transition: "none"
            }); // css
        }, 800); //setTimeout
    }); //click

    lb.click(function () {
    // 광클금지 ////////////
    if (prot) return; // 나가!
    prot = 1; // 잠금!
    setTimeout(() => (prot = 0), 800)



    // 1. 맨뒤요소를 잘라서 맨앞으로 이동한다!
    // 대상: slide변수 -> ul#slide
    // 사용메서드: insertBefore(넣을놈,넣을놈전놈)
    // 현재 li자식요소 수집하기!
    let cli = $("#slide li");
    slide.insertBefore(cli[cli.length - 1], cli.eq(0));

    // 2. 왼쪽 바깥에 -100% left값 주기!
    slide.css({
        left:"-100%",
        transition: "none"
    }); //css
    // 첫번째 실행후 생긴 트랜지션 없애기!

    // 2번과 3번 코드 사이에 시차필요!!!
    // setTimeout()사용!
    // -> 시간을 0으로 해도 코드실행구역을 분리하므로
    // 코드가 별도로 실행된다!(순서를 지킴!)
    setTimeout(() => {
      // 3. left값을 0으로 트랜지션 애니메이션하기
      slide.css({
        left:"0",
        transition: ".8s ease-in-out"
      }); // css
    }, 0); // setTimeout

}); //////////////click//////////////

  
}); //JQB