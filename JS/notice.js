// 공지사항 JS
$(() => {
    const notice = $("#notice");


    function noticeAuto() {
        
            $("#notice li").eq(0).fadeOut(500,()=>{
                notice.append($("#notice li").eq(0));
                $("#notice li").eq(0).fadeIn(500);
            });
    } // noticeAuto 함수


    setInterval(noticeAuto,3000);
}); // JQB