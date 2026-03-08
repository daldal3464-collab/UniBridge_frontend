document.addEventListener('DOMContentLoaded', () => {
    // 목록으로 버튼 클릭
    const backBtn = document.getElementById('announceDetailBackBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = './announceBoard.html';
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // 1. 헤더 가져오기
    fetch('./header/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerContainer').innerHTML = data;
        })
        .catch(error => console.error('헤더를 불러오는 중 오류 발생:', error));

    // 2. 푸터 가져오기
    fetch('./footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerContainer').innerHTML = data;
        })
        .catch(error => console.error('푸터를 불러오는 중 오류 발생:', error));
});