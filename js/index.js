// techno tab
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.techno__tab');
    const tabContents = document.querySelectorAll('.techno__content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('techno__tab--active'));
            tab.classList.add('techno__tab--active');
            tabContents.forEach(content => content.classList.remove('active'));
            const activeContent = document.getElementById(tab.dataset.tab);
            activeContent.classList.add('active');
        });
    });
});

// faq
$(document).ready(function () {
    $(".faq__question").click(function () {
        var parentItem = $(this).parent(".faq__item");
        var answer = $(this).next(".faq__answer");

        if (!parentItem.hasClass("active")) {
            $(".faq__item.active .faq__answer").slideUp("slow");
            $(".faq__item.active").removeClass("active");
        }

        parentItem.toggleClass("active");
        answer.slideToggle("slow");
    });
});

// swiper whatwedo__swiper

const swiper1 = new Swiper(".whatwedo__swiper", {

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 30,

    speed: 1500,
    //   breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       slidesPerView: 3,
    //       spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
    //   }
});

// swiper blog

const swiper2 = new Swiper(".blog__swiper", {

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,

    speed: 1500,
    //   breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       slidesPerView: 3,
    //       spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
    //   }
});

// swiper review

const swiper3 = new Swiper(".review__swiper", {

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,

    speed: 1500,
    //   breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       slidesPerView: 3,
    //       spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
    //   }
});