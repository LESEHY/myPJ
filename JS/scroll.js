// scroll.js
// 915.234375
// 1035.234375
$(() => {
    let pb = $(".phoneBox");
    let ab = $(".appBox");
    pb.hide();
    ab.hide();
    console.log("스크롤 JS");
    $(window).scroll(()=>{
        Top = $(this).scrollTop();
        // console.log(Top);

        if(Top >= 600){
            console.log("dd");
            pb.fadeIn(1200);
            ab.fadeIn(1200);
        }
        else{
            pb.fadeOut(1200);
            ab.fadeOut(1200);
        }
    })


}); // JQB