// link.js
$(() => {
    const ham = $("#ham");
    const idtop = $("#top");
    const ct = $(".ct");
    let prot = 0; // 0-허용, 1-불허용
    
    function fastclick (){

        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 200);
    }

    ham.click(() => {
        idtop.css({
                opacity: "0.3",
            }),
            ct.css({
                opacity: "0.3",
            }),
            $(".mgnbBox").show(300)
        });
        
        /* MENU 클릭하면 하위 나옴 */
        $(".msm a:contains('MENU')").click(() => {
            fastclick();
        // toggle() 보이면 안보이게, 안보이면 보이게
        $(".li1").toggle(300);
        $(".mlif1 .li1 ~li").hide()
    });

    $(".mlif1>li").click(() => {
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 200);
        $(".mlif1 .li1 ~li").toggle(200)
    });

    $(".mlif2>li").click(() => {
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 200);
        $(".mlif2 .li1 ~li").toggle(200)
    });

    $(".mlif3>li").click(() => {
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 200);
        $(".mlif2 .li1 ~li").toggle(200)
    });

}); // JQB