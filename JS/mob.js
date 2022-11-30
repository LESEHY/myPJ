$(() => {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        // 사이즈별 슬라이드 개수, 간격 동적변경셋팅
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 200px
            200: { // 200픽셀보다 클 경우
                slidesPerView: 2, // 나오는 이미지 수
                
            },
            // when window width is >= 700px
            600: {
                slidesPerView: 3,
            },
        
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // 클릭가능여부

        },
        loop: true,
        autoplay: { // 자동넘김
            delay: 2000, // 시간간격 5초 (1/1000초)
            disableOnInteraction: false,
            // 상호작용(건드리는 것!)이 없으면 다시 재시작(fasle일 때)
        },
    });
}); // JQB