// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }

// Hero section slider

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: "true",
  fade: "true",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Swiper Testimonial
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// Navbar Toggle
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("header").addClass("black");
  } else {
    $("header").removeClass("black");
  }
});

// Form

// tailwind.config = {
//   plugins: [require("@tailwindcss/forms")],
// };

document.addEventListener("DOMContentLoaded", function () {
  var navItem1 = document.querySelector(".nav-item1");
  var navItem2 = document.querySelector(".nav-item2");
  var navItem3 = document.querySelector(".nav-item3");
  var nav = document.querySelector(".nav");

  navItem1.addEventListener("mouseenter", function (e) {
    nav.classList.add("nav-bg-white");
  });
  navItem2.addEventListener("mouseenter", function (e) {
    nav.classList.add("nav-bg-white");
  });
  navItem3.addEventListener("mouseenter", function (e) {
    nav.classList.add("nav-bg-white");
  });
  navItem1.addEventListener("mouseleave", function () {
    nav.classList.remove("nav-bg-white");
  });
  navItem2.addEventListener("mouseleave", function () {
    nav.classList.remove("nav-bg-white");
  });
  navItem3.addEventListener("mouseleave", function () {
    nav.classList.remove("nav-bg-white");
  });
  
});
