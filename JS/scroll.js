// scroll.js
// 915.234375
// 1035.234375
$(() => {
    let prot = 0;
    let pb = $(".phoneBox");
    let ab = $(".appBox");

    // 처음에 숨기기
    pb.hide();
    ab.hide();
    console.log("스크롤 JS");
    $(window).scroll(() => {
        Top = $(this).scrollTop();


        // 600보다 크거나 같으면 보이기
        if (Top > 550) {
            // console.log("dd");
            pb.stop().fadeIn(1200);
            ab.stop().fadeIn(1200);
            if (prot) return; // 나가!
            prot = 1; // 잠금!
            setTimeout(() => (prot = 0), 1200);
        } else {
            // 아니면 숨기기
            pb.stop().fadeOut(600);
            ab.stop().fadeOut(600);
            if (prot) return; // 나가!
            prot = 1; // 잠금!
            setTimeout(() => (prot = 0), 1200);
        }
    })


}); // JQB