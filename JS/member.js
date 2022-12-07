// member.js

$(() => {
    const icwar = $(".icwar");
    const ictxt = $(".ictxt");
    const none = $(".none");

    icwar.click(() => ictxt.fadeIn(500));

    none.click(() => ictxt.fadeOut(500));


}); //JQB