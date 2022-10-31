$(() => {
    /* 넘기기 버튼 */
    const lb = $(".lb");
    const rb = $(".rb");
    /* 배너 */
    const mbi = $(".mbi");

    // 광클금지 상태변수
    let prot = 0; // 0-허용, 1-불허용

    rb.click(function () {
            if (prot) return; // 나가!
            prot = 1; // 잠금!
            setTimeout(() => (prot = 0), 800);
            ///////////// if ///////////////

            mbi.css({
                left: "-100%",
                transition: ".8s ease-in-out"
            }) // css
            
            // 0.8초후 맨앞li 잘라서 맨뒤로 이동!
            setTimeout(() => {
                // 1. 맨앞li 잘라서 맨뒤로 이동!
                mbi.appendChild();
                // 2. left값 0으로 초기화!
                mbi.css({
                    left: "0",
                    /* 3. 트랜지션 없애기 */
                    transition: "none"
                }); // css
            }, 800); //setTimeout
            // 블릿변경함수 호출!
            // -> 오른쪽버튼은 두번째 슬라이드가 주인공!
            chgIndic(1);

            // 자동넘김지우기 함수 호출!
            clearAuto();
    }); //click

lb.click(function () {

});
}); //JQB