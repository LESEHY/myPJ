// member.js

$(() => {
    // 남 | 여 클릭
    const male = $(".male");
    const female = $(".female");

    male.click(()=>{
        female.removeClass("on");
        male.addClass("on");
    }); // click

    female.click(()=>{
        male.removeClass("on");
        female.addClass("on");
    }); // click







    // 안내창 
    const icwar = $(".icwar");
    const ictxt = $(".ictxt");
    const none = $(".none");

    icwar.click(() => ictxt.fadeIn(500));

    none.click(() => ictxt.fadeOut(500));


}); //JQB