// URL 정보 js - url.js
const currentUrl = window.location.href;
const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/") + 1).replace("/page", "");

// 1. 현재 페이지 url 이름 가져오기
const getUrl = () => {
  // 1.2 URL에서 파일명 부분만 추출하여 반환
  return currentUrl.substring(currentUrl.lastIndexOf("/") + 1).split(".")[0];
};

// 2. url 라우팅 처리 함수
function urlRouting(id, submenu) {
  // 2-1. 파라미터 데이터 확인
  //   console.log("id", id, "\n", "sVal", submenu);

  // 2-2. 페이지별 url 라우팅 처리
  if (id == "1" && submenu == "전체") {
    return `${baseUrl}` + "page/subpage1.html";
  } else {
    return "#";
  }
}

export { getUrl, urlRouting };
