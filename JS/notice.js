// 공지사항 JS
$(() => {
    const notice = $("#notice");
    const nota = $("#notice li");


    function noticeAuto() {
        
            $("#notice li").eq(0).fadeOut(500);
            setTimeout(() => {
                notice.append($("#notice li").eq(0));
                $("#notice li").eq(0).fadeIn(500);
            }, 400);
    } // noticeAuto 함수


    setInterval(noticeAuto,3000);
}); // JQB