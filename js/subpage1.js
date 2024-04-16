// 서브페이지1 JS - subpage1.js

// 공통처리 함수 js 불러오기 //
import * as com from "./common.js";

/* 레슨 데이터 불러오기 */
import * as lesson from "../data/lesson_data.js";

/****************************************************
 * 1. 채용 요약 정보
 *****************************************************/
// 1-0 데이터 출력확인
// console.log(lesson.jobSummaryInfoData);

// 1-1 jobSummaryInfoData 배열 데이터 불러오기
const data = lesson.jobSummaryInfoData;

// 1-2 jobSummaryInfoData 삽입할 태그 불러오기
const dlElements = com.myFn.qsa(".job-info-summary-tc dl");

// 1-3 html code 삽입 변수 초기화
let hcode = "";

// 1-4 데이터를 개별적으로 처리하여 각 dl에 추가
// 첫 번째 dl에 첫 번째 데이터 추가
hcode = `
    <dt>
        <span class="job-info-summary-title">${data[0].alljob}</span>
    </dt>
    <dd>
        <span class="job-info-summary-count">${data[0].count}</span>
    </dd>
`;

dlElements[0].innerHTML += hcode;

// 두 번째 dl에 두 번째 데이터 추가
hcode = `
    <dt>
        <span class="job-info-summary-title">${data[1].alljob}</span>
    </dt>
    <dd>
        <span class="job-info-summary-count">${data[1].count}</span>
    </dd>
`;

dlElements[1].innerHTML += hcode;
