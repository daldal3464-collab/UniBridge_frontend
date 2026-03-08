document.addEventListener("DOMContentLoaded", function () {
  // 1. 헤더 가져오기 (절대 경로로 수정)
  fetch('/frontend/header/menteeHeader.html') // 경로 수정
    .then(response => {
      if (!response.ok) throw new Error('헤더를 찾을 수 없습니다.');
      return response.text();
    })
    .then(data => {
      document.getElementById('headerContainer').innerHTML = data;
    })
    .catch(error => console.error('헤더 오류:', error));

  // 2. 푸터 가져오기 (절대 경로로 수정)
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


// menteeBoardCreate.js

document.addEventListener('DOMContentLoaded', () => {
  // 글목록 버튼
  const backBtn = document.getElementById('menteeBoardCreateBackBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.href = './menteeBoardList.html'; 
    });
  }

  // 게시글 등록 버튼
  const submitBtn = document.getElementById('menteeBoardCreateSubmitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const subject = document.getElementById('menteeBoardCreateSubject').value.trim();
      const content = document.getElementById('menteeBoardCreateContent').value.trim();

      if (!subject) {
        alert('제목을 입력해주세요.');
        return;
      }
      if (!content) {
        alert('내용을 입력해주세요.');
        return;
      }

      // 등록 성공 가정 후 목록으로 이동
      alert('게시글이 등록되었습니다.');
      window.location.href = 'menteeBoardList.html';
    });
  }

  // 제목 최대 50자 제한
  const subjectInput = document.getElementById('menteeBoardCreateSubject');
  if (subjectInput) {
    subjectInput.addEventListener('input', () => {
      if (subjectInput.value.length > 50) {
        subjectInput.value = subjectInput.value.slice(0, 50);
      }
    });
  }
});