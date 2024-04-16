// 배너 슬라이드 기능 JS - slide.js

export default function slideEvent() {
  // DOM 선택함수
  const banner = document.querySelector(".banner");
  const images = banner.querySelectorAll(".banner-image");
  const prevBtn = banner.querySelector(".prev");
  const nextBtn = banner.querySelector(".next");

  let imageIndex = 0;
  let timer; // 타이머 저장변수

  // 최초 로드 시 이미지 표시 및 타이머 시작
  showImageAndStartTimer();

  function showImageAndStartTimer() {
    images[imageIndex].classList.add("active");

    // 3초마다 이미지 변경
    timer = setTimeout(() => {
      changeImage();
    }, 3000);
  }

  function changeImage() {
    images[imageIndex].classList.remove("active");
    imageIndex = (imageIndex + 1) % images.length;
    images[imageIndex].classList.add("active");
    timer = setTimeout(() => {
      changeImage();
    }, 3000);
  }

  prevBtn.onclick = () => {
    images[imageIndex].classList.remove("active");
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    images[imageIndex].classList.add("active");
    clearTimeout(timer); // 기존 타이머를 일시 중지
    timer = setTimeout(() => {
      changeImage();
    }, 7000); // 7초 후에 타이머 재개
  };

  nextBtn.onclick = () => {
    images[imageIndex].classList.remove("active");
    imageIndex = (imageIndex + 1) % images.length;
    images[imageIndex].classList.add("active");
    clearTimeout(timer); // 기존 타이머를 일시 중지
    timer = setTimeout(() => {
      changeImage();
    }, 7000); // 7초 후에 타이머 재개
  };
}
