"strict mode";
const ShopCategory = document.querySelector(".shop-category");
const CategoryDIv = document.querySelector(".category");
const navLinks = document.querySelector(".nav-links");
const slides = document.querySelector(".slides");
const slid1 = document.querySelector(".slide-1");
const slid2 = document.querySelector(".slide-2");
const slid3 = document.querySelector(".slide-3");
const menuBar = document.querySelector(".nav-toggle");
const canselBtn = document.querySelector(".cansel-btn");
const navigation = document.querySelector(".navigation");
const container = document.querySelector(".container");
// const btnRight = document.querySelector(".btn-right");
// const btnLeft = document.querySelector(".btn-left");
const btn = document.querySelectorAll(".btn");

// console.log([...slides]);
// const [a, b, c] = [...slides];
// console.log(a);

menuBar.addEventListener("click", function () {
  container.classList.toggle("container-none");
  navigation.style.transition = "all 1s";
  navigation.classList.toggle("translate");
  navigation.classList.toggle("none-nav");
});
canselBtn.addEventListener("click", function () {
  container.classList.toggle("container-none");
  navigation.style.transition = "all 1s";
  navigation.classList.toggle("translate");
  navigation.classList.toggle("none-nav");
});
// //////////
ShopCategory.addEventListener("click", function () {
  CategoryDIv.classList.toggle("none");
});

let timeout;
let mouse;
////////////////////
// [...navLinks.children].forEach((element) => {
//   element.addEventListener("mouseover", function (e) {
//     if (!this.classList.contains("s")) {
//       let [, dd] = this.children;

//       if (timeout) {
//         return;
//       } else {
//         var timeout = setTimeout(() => {
//           dd.classList.remove("na");
//         }, 1000);
//       }
//     }
//   });

//   element.addEventListener("mouseout", function (e) {
//     if (e.target.classList.contains("nav-dropdown")) {
//       return;
//     } else {
//       setTimeout(() => {
//         if (!this.classList.contains("s")) {
//           let [, dd] = this.children;
//           dd.classList.add("na");
//         }
//       }, 1000);
//     }
//   });
// });

let one = 0;
[...navLinks.children].forEach((element) => {
  //
  element.addEventListener("mouseover", function (e) {
    if (!this.classList.contains("s")) {
      let [, dd] = this.children;

      dd.classList.remove("na");
    }
  });
  element.addEventListener("mouseout", function (e) {
    ////

    if (!this.classList.contains("s")) {
      let [, dd] = this.children;

      dd.classList.add("na");
    }
  });

  ////
});

// ///////slide
let time = 1;
let timeInt;

let timer = setInterval(() => {
  if (time === 1) {
    slid1.style.transform = `translateX(-100%)`;
    slid2.style.transform = `translateX(000%)`;
    slid3.style.transform = `translateX(100%)`;
  } else if (time === 2) {
    slid1.style.transform = `translateX(-200%)`;
    slid2.style.transform = `translateX(-100%)`;
    slid3.style.transform = `translateX(0%)`;
  } else if (time === 3) {
    slid1.style.transform = `translateX(-100%)`;
    slid2.style.transform = `translateX(000%)`;
    slid3.style.transform = `translateX(100%)`;
  } else if (time === 4) {
    slid1.style.transform = `translateX(00%)`;
    slid2.style.transform = `translateX(100%)`;
    slid3.style.transform = `translateX(200%)`;
  } else if (time === 5) {
    time = 0;
  }

  time++;
}, 10000);

// btn.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     if (el.classList.contains("btn-right")) {
//       if (timer) {
//         clearInterval(timer);

//       }
//       console.log("right");
//     }
//     //  else if(el.classList.contains("btn-left"));
//   });
// });
// [...navLinks.children].forEach((element) => {
//   element.addEventListener("mouseover", function (e) {
//     if (!this.classList.contains("s")) {
//       let [, dd] = this.children;

//       dd.classList.remove("na");
//     }

//     // if (timer) clearTimeout(timer);

//     // timer();
//   });

//   element.addEventListener("mouseout", function (e) {
//     if (!this.classList.contains("s")) {
//       let [, dd] = this.children;
//       dd.classList.add("na");
//     }
//   });
// });
