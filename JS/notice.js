// 공지사항 JS
$(() => {
    const notice = $(".notice");
    const nota = $(".notice li");

    nota.each((idx, ele) => {
        setTimeout(() => {
            if (idx === 0) {
                nota.first().delay(800).fadeOut(400).delay(800).fadeIn(400);

                notice.append(nota.eq(0));
            } // if 
            else{
                hide()
            }

                // nota.eq(1).hide()

            
        }, 800); // setTimeout
        console.log(idx);
        console.log(ele);
    })












}); // JQB