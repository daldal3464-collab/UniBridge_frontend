// 공지사항 페이지네이션

document.addEventListener('DOMContentLoaded', () => {
    const pageBtns = document.querySelectorAll('.announcePageBtn');

    pageBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            // active 상태 이동 (숫자 버튼만)
            if (btn.classList.contains('announcePageNext')) return;

            pageBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            const pageNum = btn.dataset.page;
            // 페이지 데이터 로드 로직 추가 가능
            // loadAnnouncePage(pageNum);
        });
    });

    // 행 클릭 이벤트
    const announceRows = document.querySelectorAll('.announceList tbody tr');
    announceRows.forEach((row) => {
        row.addEventListener('click', () => {
            const announceId = row.dataset.announceId;
            // 공지사항 상세 페이지 이동
            // window.location.href = `/announce/detail?announceId=${announceId}`;
        });
    });
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

document.addEventListener('DOMContentLoaded', () => {
    const pageBtns = document.querySelectorAll('.announcePageBtn');
  
    pageBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // active 상태 이동 (숫자 버튼만)
        if (btn.classList.contains('announcePageNext')) return;
  
        pageBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
  
        const pageNum = btn.dataset.page;
        // 페이지 데이터 로드 로직 추가 가능
        // loadAnnouncePage(pageNum);
      });
    });
  
    // 행 클릭 이벤트
    const announceRows = document.querySelectorAll('.announceList tbody tr');
    announceRows.forEach((row) => {
      row.addEventListener('click', () => {
        const announceId = row.dataset.announceId;
        window.location.href = `./announceBoardDetail.html?announceId=${announceId}`;
      });
    });
  });