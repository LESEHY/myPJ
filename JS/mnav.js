// mnav.js
$(() => {
    const map = $("#map");
    const ham = $("#ham");
    const mbox = $(".mbox");
    const mgnbBox = $(".mgnbBox");
    const close = $(".close");

    let prot = 0; // 0-허용, 1-불허용

    map.click(()=>{
        alert("준비 중입니다");
    });

    ham.click(() => {
        mbox.css({
            opacity: "0.7",
        }); // css
        mbox.show(300);
        mgnbBox.show(300);
        close.show(300);
    }); // click

    close.click(() => {
        mbox.hide(300);
        mgnbBox.hide(300);
        close.hide(100);
    });//click

    /* MENU 클릭하면 하위 나옴 */
    $(".msm a:contains('MENU')").click(() => {
        // toggle() 보이면 안보이게, 안보이면 보이게
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 200);
        $(".li1").slideToggle(300);
        $("ol .li1 ~li").hide();
    });

    $(".msmenu>ol>li:first-child").click(function(){
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 200);        
        $(this).nextAll().slideToggle(200)
        .parent().siblings()
        .find("li:first-child~li").slideUp(200);
        // console.log(this);
    });

    /* STORE 클릭하면 하위 나옴 */
    $(".msm a:contains('STORE')").click(() => {
        // toggle() 보이면 안보이게, 안보이면 보이게
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 200);
        $(".li2").slideToggle(300);
        $(".li2 ~li").hide()
    });

    /* RESPONSIBILITY 클릭하면 하위 나옴 */
    $(".msm a:contains('RESPONSIBILITY')").click(() => {
        // toggle() 보이면 안보이게, 안보이면 보이게
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 200);
        $(".li3").slideToggle(300);
        $(".li3 ~li").hide()
    });

    /* STARBUCKS REWARDS 클릭하면 하위 나옴 */
    $(".msm a:contains('Starbucks Rewards')").click(() => {
        // toggle() 보이면 안보이게, 안보이면 보이게
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 200);
        $(".li4").slideToggle(300);
        $(".li4 ~li").hide()
    });

    /* WHAT'S NEW 클릭하면 하위 나옴 */
    $(`.msm a:contains("WHAT'S NEW")`).click(() => {
        // toggle() 보이면 안보이게, 안보이면 보이게
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 200);
        $(".li5").slideToggle(350);
        $(".li5 ~li").hide()
    });

  


    
    /* 모바일용 배너 마우스 오버 후 2초 뒤 실행 */
    $(window).scroll(() => {
        setTimeout(() => {
            $(".cb2Box").addClass("on");
            $(".Box").addClass("on");
            $(".cb2640").addClass("on");

        }, 2000);
    });
}); // JQB