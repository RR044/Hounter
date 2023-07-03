import Swiper from "../vendor/swiper";
import vars from "../_vars";
import { throttle } from "../functions/throttle";
import { even } from "../functions/customFunctions";
import { auto } from "@popperjs/core";

const { mainSlider, villaSlider, apartmentSlider, secondSlider, programBox, newsInner } = vars;

if (mainSlider) {
  const newsSlider = mainSlider.querySelector('.swiper-container');
  const newsSliderPrev = mainSlider.querySelector('.mainSliderPrev');
  const newsSliderNext = mainSlider.querySelector('.mainSliderNext');


new Swiper(mainSlider, {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  speed: 3000,
  parallax: true,
  autoplay: {
    delay: 1000,
  },
      navigation: {
      nextEl: '.mainSliderNext',
      prevEl: '.mainSliderPrev',
    }
});
}

new Swiper(villaSlider, {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  speed: 3000,
  parallax: true,
  autoplay: {
    delay: 1000,
  },
      navigation: {
      nextEl: '.mainSliderNext',
      prevEl: '.mainSliderPrev',
    }
});

new Swiper(apartmentSlider, {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  speed: 3000,
  parallax: true,
  autoplay: {
    delay: 1000,
  },
      navigation: {
      nextEl: '.mainSliderNext',
      prevEl: '.mainSliderPrev',
    }
});






new Swiper(secondSlider, {
  slidesPerView: 1.6,
  centeredSlides: true,
  spaceBetween: 56,
  loop: true,
  observer: true,
  observeParents: true,
  speed: 4000,
  parallax: true,
  autoplay: {
    delay: 4000,
  },
});


// const navigationContent = [
//   {
//     name: 'Bonus 1',
//     descr: 'Connect Wallet',
//     class:'orange',
//     iconSrc: 'img/program-slider/icon.svg'
//   },
//   {
//     name: 'level 1',
//     descr: 'Bring your friends',
//     class:'purpure',
//     iconSrc: 'img/program-slider/icon2.svg'
//   },
//   {
//     name: 'level 2',
//     descr: "Get 5% from your friend's referral",
//     class:'red',
//     iconSrc: 'img/program-slider/icon3.svg'
//   },

// ]

// if (programBox) {
//   const mySwiper = new Swiper(programBox.querySelector('.program-slider'), {
//     slidesPerView: 'auto',
//     spaceBetween: 40,
//     loop: true,
//     observer: true,
//     watchOverflow: true,
//     observeParents: true,
//     allowTouchMove: true,
//     speed: 2500,
//     autoplay: {
//       delay: 3000,
//     },

//     pagination: {
//       el: '.program-slider__nav',
//       clickable: 'true',
//       type: 'bullets',
//       renderBullet: function (index, className) {
//           return `
//             <li class="${className}">
//               <button class="program-button ${navigationContent[index].class}">
//                 ${navigationContent[index].name}
//                 <img class="program-button__icon" src="${navigationContent[index].iconSrc}" alt="icon">
//                 <span class="program-button__descr">
//                   ${navigationContent[index].descr}
//                 </span>
//                 <i class="custom-icon custom-icon--nav program-button__stars"></i>
//               </button>
//             </li>
//           `;
//         },

//     },

//   });
// }




