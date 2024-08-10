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
    breakpoints: {

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        450: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        560: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        960: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        },

    }
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
    breakpoints: {

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        650: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },

    }
});

// validation form 

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const agreement = document.getElementById('agreement');

    let isValid = true;

    const isNameValid = (name) => /^[a-zA-Zа-яА-ЯїЇєЄіІ]+(\s[a-zA-Zа-яА-ЯїЇєЄіІ]+)?$/.test(name.value.trim());

    if (name.value.trim() === '' || !isNameValid(name)) {
        isValid = false;
        name.classList.add('error');
        name.classList.remove('valid');
    } else {
        name.classList.remove('error');
        name.classList.add('valid');
    }

    const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

    if (email.value.trim() === '' || !isEmailValid(email)) {
        isValid = false;
        email.classList.add('error');
        email.classList.remove('valid');
    } else {
        email.classList.remove('error');
        email.classList.add('valid');
    }

    if (phone.value.trim() === '') {
        isValid = false;
        phone.classList.add('error');
        phone.classList.remove('valid');
    } else {
        phone.classList.remove('error');
        phone.classList.add('valid');
    }

    if (message.value.trim() === '') {
        isValid = false;
        message.classList.add('error');
        message.classList.remove('valid');
    } else {
        message.classList.remove('error');
        message.classList.add('valid');
    }

    if (!agreement.checked) {
        isValid = false;
        document.querySelector('.checkbox').classList.add('error');
    } else {
        document.querySelector('.checkbox').classList.remove('error');
    }

    if (isValid) {
        alert('The form has been sent successfully!');
        name.value = '';
        email.value = '';
        phone.value = '';
        message.value = '';
        agreement.checked = false;

        name.classList.remove('valid');
        email.classList.remove('valid');
        phone.classList.remove('valid');
        message.classList.remove('valid');
        document.querySelector('.checkbox').classList.remove('error');
    }
});

['input', 'change'].forEach(eventType => {
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener(eventType, () => {
            if (input.value.trim() !== '') {
                input.classList.remove('error');
                input.classList.add('valid');
            } else {
                input.classList.remove('valid');
                input.classList.add('error');
            }
        });
    });
});

// pop up local

document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    document.body.appendChild(overlay);

    const popupAccepted = localStorage.getItem('popupAccepted');

    if (!popupAccepted) {
        showPopup();
    }

    document.querySelector('.active__btn').addEventListener('click', function () {
        closePopup();
    });

    function showPopup() {
        popup.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    function closePopup() {
        popup.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
        localStorage.setItem('popupAccepted', 'true');
    }
});

//search

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');
    const overlay = document.getElementById('overlay');

    searchIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleSearch();
    });

    overlay.addEventListener('click', closeSearch);

    document.addEventListener('click', function (event) {
        if (!searchContainer.contains(event.target)) {
            closeSearch();
        }
    });

    function toggleSearch() {
        const isActive = searchContainer.classList.contains('active');
        if (!isActive) {
            showSearch();
        } else {
            closeSearch();
        }
    }

    function showSearch() {
        searchContainer.classList.add('active');
        overlay.classList.add('active');
    }

    function closeSearch() {
        searchContainer.classList.remove('active');
        overlay.classList.remove('active');
    }
});

// burger 
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger__icon');
    const burgerMenu = document.querySelector('.burger__menu');

    if (burgerIcon && burgerMenu) {
        burgerIcon.addEventListener('click', () => {
            burgerIcon.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            document.body.style.overflow = burgerMenu.classList.contains('active') ? 'hidden' : '';
        });

        document.addEventListener('click', (event) => {
            if (!burgerMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
                burgerIcon.classList.remove('active');
                burgerMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});