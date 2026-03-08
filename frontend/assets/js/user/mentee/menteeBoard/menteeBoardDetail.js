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



document.addEventListener('DOMContentLoaded', () => {
  // 글목록 버튼
  const backBtn = document.getElementById('menteeBoardDetailBackBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.href = './menteeBoardList.html';
    });
  }

  // 수정 버튼
  const editBtn = document.getElementById('menteeBoardDetailEditBtn');
  if (editBtn) {
    editBtn.addEventListener('click', () => {
      const boardId = new URLSearchParams(window.location.search).get('boardId');
      // 현재 제목/내용을 sessionStorage에 저장
      const subject = document.querySelector('.menteeBoardDetailTitle')?.textContent || '';
      const content = document.querySelector('.menteeBoardDetailBody')?.textContent.trim() || '';
      sessionStorage.setItem('menteeBoardModifyData', JSON.stringify({ subject, content }));
      window.location.href = `./menteeBoardModify.html?boardId=${boardId}`;
    });
  }

  // 삭제 버튼
  const deleteBtn = document.getElementById('menteeBoardDetailDeleteBtn');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      if (confirm('게시글을 삭제하시겠습니까?')) {
        window.location.href = './menteeBoardList.html';
      }
    });
  }

  // 댓글 등록 버튼
  const commentSubmitBtn = document.getElementById('menteeBoardDetailCommentSubmitBtn');
  if (commentSubmitBtn) {
    commentSubmitBtn.addEventListener('click', () => {
      const input = document.getElementById('menteeBoardDetailCommentInput');
      const content = input.value.trim();
      if (!content) {
        alert('댓글 내용을 입력해주세요.');
        return;
      }
      input.value = '';
    });
  }

  // 댓글 수정 버튼
  document.querySelectorAll('.menteeBoardDetailCommentEditBtn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const commentId = e.target.closest('.menteeBoardDetailCommentItem').dataset.commentId;
      // 댓글 수정 로직
    });
  });

  // 댓글 삭제 버튼
  document.querySelectorAll('.menteeBoardDetailCommentDeleteBtn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (confirm('댓글을 삭제하시겠습니까?')) {
        const item = e.target.closest('.menteeBoardDetailCommentItem');
        item.remove();
      }
    });
  });
});