var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".right_arrow",
    prevEl: ".left_arrow",
  },
});

var faqs = document.querySelectorAll(".faq");

faqs.forEach(function (faq, index) {
  var plus_icon = faq.querySelector(".plus_icon");
  var flag = 1;

  plus_icon.addEventListener("click", function () {
    if (flag === 1) {
      faq.style.height = "10rem";
      plus_icon.style.rotate = "45deg";
      flag = 0;
    } else {
      faq.style.height = "4rem";
      plus_icon.style.rotate = "0deg";
      flag = 1;
    }
  });
});
