// announceBoardDetail.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. 목록으로 버튼 클릭 이벤트
    const backBtn = document.getElementById('announceDetailBackBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // 현재 폴더 위치를 고려하여 공지사항 목록으로 이동
            window.location.href = './announceBoard.html';
        });
    }

    // 2. URL 파라미터 읽기 (필요 시 상세 데이터 로드 로직 추가 공간)
    const urlParams = new URLSearchParams(window.location.search);
    const announceId = urlParams.get('announceId');
    
    if (announceId) {
        console.log(`현재 조회 중인 게시글 ID: ${announceId}`);
        // 여기서 서버로부터 데이터를 받아와 화면을 채우는 로직을 작성할 수 있습니다.
    }
});