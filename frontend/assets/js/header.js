// header.js

(function () {
  const getBase = () => {
    const { origin, pathname } = window.location;
    if (pathname.includes('/frontend')) {
      const parts = pathname.split('/');
      const frontendPos = parts.indexOf('frontend');
      const projectPath = parts.slice(0, frontendPos + 1).join('/');
      return origin + projectPath;
    }
    return origin;
  };

  const base = getBase();
  console.log("UniBridge Base Path:", base);

  const roleMap = {
    mentor: { label: '멘토', cls: 'mentoRoleBadge' },
    mentee: { label: '멘티', cls: 'mentiRoleBadge' },
    pending: { label: '미정', cls: 'pending' },
  };

  let authState = {
    loggedIn: true,
    role: 'mentee',
    userName: '홍길동'
  };

  const getHeaderTemplate = () => {
    const commonNav = `
      <a href="${base}/main.html" class="headerLogo">
        <img src="${base}/assets/img/UniBridge.png" alt="UniBridge" />
      </a>
      <nav class="headerNav">
        <a href="${base}/html/user/mentorSearch/mentorSearch.html">멘토 검색</a>
        <a href="${base}/html/user/mentee/menteeBoard/menteeBoardList.html">게시판</a>
        <a href="${base}/html/user/notice/report.html">학습보고서</a>
        <a href="${base}/announceBoard.html">공지사항</a>
      </nav>
    `;

    const authSection = !authState.loggedIn ? `
      <div class="headerAuthGroup">
        <a href="${base}/html/user/siginUp/terms.html" class="headerBtnText">회원가입</a>
        <div class="headerDivider"></div>
        <a href="${base}/html/user/siginIn/login.html" class="headerBtnSignIn">로그인</a>
      </div>` : `
      <div class="headerAuthGroup">
        <div class="userInfoWrap">
          <span class="userName">${authState.userName}</span>
          <span class="userRoleDivider">/</span>
          <span class="userRoleBadge ${roleMap[authState.role].cls}">${roleMap[authState.role].label}</span>
        </div>
        <div class="headerDivider"></div>
        <a href="${base}/html/user/mentor/myPage/myPage.html" class="headerBtnText">마이페이지</a>
        <div class="headerDivider"></div>
        <a href="#" class="headerBtnText logout" id="headerBtnLogout">로그아웃</a>
      </div>`;

    return `
      <header class="headerWrap">
        <div class="headerInner">
          ${commonNav}
          ${authSection}
        </div>
      </header>
    `;
  };

  // 3. 렌더링 함수
  function renderHeader() {
    const mount = document.getElementById('headerContainer');
    if (mount) {
      mount.innerHTML = getHeaderTemplate();

      // 로그아웃 버튼 이벤트 리스너
      const logoutBtn = document.getElementById('headerBtnLogout');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          
          // --- 수정 부분 시작 ---
          authState.loggedIn = false; // 상태 변경
          alert('로그아웃 되었습니다.');
          
          renderHeader(); // 변경된 상태로 화면 다시 그리기
          // --- 수정 부분 끝 ---
        });
      }
    }
  }

  // 초기 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHeader);
  } else {
    renderHeader();
  }
})();