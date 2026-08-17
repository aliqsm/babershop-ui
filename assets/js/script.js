document.addEventListener("DOMContentLoaded", () => {
    const swiper1 = new Swiper('.slider1', {
        loop: true,
        initialSlide: 3, //اولین تصویر نمایشی کدوم باشه
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper1-prev',
            prevEl: '.swiper1-next',
        },
    });

    function changeBannerImage() {
        if (window.innerWidth < 768) {
            const img_src = [
                "/assets/img/home/slider/mobile_img1.webp",
                "/assets/img/home/slider/mobile_img2.webp",
                "/assets/img/home/slider/mobile_img3.webp"
            ];

            document.querySelectorAll(".baner-images").forEach((el, index) => {
                el.src = img_src[index];
            });
        }
    }
    changeBannerImage();
    window.addEventListener("resize", changeBannerImage);


    if (window.innerWidth < 768) {
        document.querySelector(".banner1").src = "/assets/img/home/mobile_banner1.jpg";
    }
});