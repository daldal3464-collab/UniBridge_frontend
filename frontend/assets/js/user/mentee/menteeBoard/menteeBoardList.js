document.addEventListener("DOMContentLoaded", function () {
  // 1. 헤더 가져오기 
  fetch('/frontend/header/menteeHeader.html') // 경로 수정
    .then(response => {
      if (!response.ok) throw new Error('헤더를 찾을 수 없습니다.');
      return response.text();
    })
    .then(data => {
      document.getElementById('headerContainer').innerHTML = data;
    })
    .catch(error => console.error('헤더 오류:', error));

  // 2. 푸터 가져오기
  fetch('/frontend/footer/footer.html') // 경로 수정
    .then(response => {
      if (!response.ok) throw new Error('푸터를 찾을 수 없습니다.');
      return response.text();
    })
    .then(data => {
      document.getElementById('footerContainer').innerHTML = data;
    })
    .catch(error => console.error('푸터 오류:', error));
});

// menteeBoardList.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. 페이지네이션
  const pageBtns = document.querySelectorAll('.menteeBoardPageBtn');

  pageBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // 다음 페이지 버튼(>)은 별도 로직이 필요하므로 현재는 리턴
      if (btn.classList.contains('menteeBoardPageNext')) return;

      // 활성 상태 변경
      pageBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const pageNum = btn.dataset.page;
      console.log(`${pageNum} 페이지로 이동 또는 데이터 로드`);
      // loadMenteeBoardPage(pageNum);
    });
  });

  // 2. 행 클릭 → 상세 페이지 이동
  const rows = document.querySelectorAll('.menteeBoardList tbody tr');
  rows.forEach((row) => {
    row.addEventListener('click', () => {
      const boardId = row.dataset.boardId;
      if (boardId) {
        window.location.href = `./menteeBoardDetail.html?boardId=${boardId}`;
      }
    });
  });

  // 3. 글작성 버튼 (요청하신 경로로 수정)
  const writeBtn = document.getElementById('menteeBoardWriteBtn');
  if (writeBtn) {
    writeBtn.addEventListener('click', () => {
      // menteeBoardCreate.html로 이동
      window.location.href = './menteeBoardCreate.html';
    });
  }
});



