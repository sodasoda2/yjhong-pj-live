// 상단메뉴 스크롤이벤트 JS - scroll.js

window.addEventListener("scroll", headerScrollFn);

function headerScrollFn() {
  // window의 scroll 이벤트를 감지하여 헤더를 fixed로 변경하는 스크립트

  const header = document.querySelector("header"); // 헤더 요소 선택
  const gnb = document.querySelector(".gnb-menu"); // GNB 메뉴 요소 선택
  const top = document.querySelector(".top-menu"); // LNB 메뉴 요소 선택
  const hInfo = document.querySelector(".header-info"); // 인트로 영역 요소 선택
  const divider = document.querySelectorAll(".divider"); // 디바이더 요소 선택

  if (window.scrollY > 140) {
    // 스크롤이 일정 이상 내려갔을 때
    header.classList.add("header-fixed"); // 헤더에 fixed 클래스 추가
    gnb.style.display = "block"; // GNB 메뉴를 보이게 함
    // 다른 부분은 숨김 처리
    top.style.display = "none";
    hInfo.style.display = "none";
    divider.forEach(function (div) {
      div.style.display = "none";
    });

    // 홈 아이콘 추가
    if (!gnb.querySelector(".fa-solid.fa-house.homeIcon")) {
      const homeIcon = document.createElement("i");
      homeIcon.classList.add("fa-solid", "fa-house", "homeIcon");
      gnb.insertBefore(homeIcon, gnb.firstChild); // gnb의 첫 번째 자식으로 아이콘 추가
    }
  } else {
    // 스크롤이 맨 위로 올라왔을 때
    header.classList.remove("header-fixed"); // 헤더의 fixed 클래스 제거
    gnb.style.display = "none"; // GNB 메뉴를 숨김

    // 다른 부분은 보이게 처리
    top.style.display = "flex";
    hInfo.style.display = "block";
    divider.forEach(function (div) {
      div.style.display = "block";
    });

    // 홈 아이콘 제거
    const homeIcon = gnb.querySelector(".fa-solid.fa-house.homeIcon");
    if (homeIcon) {
      homeIcon.remove();
    }
  }
}

export { headerScrollFn };
