// scroll.js
// 915.234375
// 1035.234375
$(() => {
    
    let pb = $(".phoneBox");
    let ab = $(".appBox");

    // 처음에 숨기기
    pb.hide();
    ab.hide();
    console.log("스크롤 JS");
    $(window).scroll(()=>{
        Top = $(this).scrollTop();
        // console.log(Top);
        // 600보다 크거나 같으면 보이기
        if(Top >= 600){
            // console.log("dd");
            pb.fadeIn(1200);
            ab.fadeIn(1200);
        }
        else{
            // 아니면 숨기기
            pb.fadeOut(1200);
            ab.fadeOut(1200);
        }
    })


}); // JQB