// link.js
$(()=>{
const ham = $("#ham");
const idtop = $("#top");
const ct = $(".ct");

ham.click(()=>{
    idtop.css({
        opacity:"0.3",
    }),
    ct.css({
        opacity:"0.3",
    }),
    $(".mgnbBox").css({
        display:"block"
    })
});


}); // JQB