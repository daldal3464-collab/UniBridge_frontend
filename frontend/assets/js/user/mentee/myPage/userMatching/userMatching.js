const modal = document.getElementById("matchingModal");
const openBtn = document.getElementById("openModalBtn");
const xBtn = document.querySelector(".closeBtn");    // 상단 X 버튼
const closeBtn = document.getElementById("closeModalBtn");
const submitBtn = document.getElementById("sumbitBtn"); //작성완료
const reportBtn = document.getElementById("reportBtn"); //작성완료

// 모달 열기
openBtn.onclick = () => {
    modal.style.display = "block";
}

// 모달 닫기 (취소 버튼 또는 X 버튼)
[closeBtn, xBtn].forEach(btn => {
    btn.onclick = () => {
        modal.style.display = "none";
    }
});

// 모달 바깥쪽 어두운 배경 클릭 시 닫기
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

submitBtn.onclick = (event) => {
    // 1. 폼 전송으로 인한 새로고침 방지
    event.preventDefault();

    // 2. 원하는 경로를 직접 지정하여 이동합니다.
    // 예: "userModify.html" 또는 "../../main.html" 등
    const targetPath = "/frontend/html/user/mentee/myPage/myPage.html"; 
    window.location.href = targetPath;
};

reportBtn.onclick = (event) => {
    // 1. 폼 전송으로 인한 새로고침 방지
    event.preventDefault();

    // 2. 원하는 경로를 직접 지정하여 이동합니다.
    // 예: "userModify.html" 또는 "../../main.html" 등
    const targetPath = "/frontend/html/user/notice/report.html"; 
    window.location.href = targetPath;
}
