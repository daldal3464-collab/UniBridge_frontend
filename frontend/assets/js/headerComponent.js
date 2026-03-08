// headerComponent.js
// 헤더 상태별 HTML을 직접 주입 — fetch 없이 동작

const headerTemplates = {

    loggedOut: `
      <header class="headerWrap">
        <div class="headerInner">
          <a href="#" class="headerLogo">UniBridge</a>
          <nav class="headerNav">
            <a href="#">멘토 검색</a>
            <a href="#">게시판</a>
            <a href="#">학습보고서</a>
            <a href="#">공지사항</a>
          </nav>
          <div class="headerAuthGroup">
            <a href="#" class="headerBtnText" id="headerBtnSignUp">회원가입</a>
            <div class="headerDivider"></div>
            <a href="#" class="headerBtnSignIn" id="headerBtnSignIn">로그인</a>
          </div>
        </div>
      </header>`,
  
    mento: `
      <header class="headerWrap">
        <div class="headerInner">
          <a href="#" class="headerLogo">UniBridge</a>
          <nav class="headerNav">
            <a href="#">멘토 검색</a>
            <a href="#">게시판</a>
            <a href="#">학습보고서</a>
            <a href="#">공지사항</a>
          </nav>
          <div class="headerAuthGroup">
            <div class="userInfoWrap">
              <span class="userName">홍길동</span>
              <span class="userRoleBadge mentoRoleBadge">멘토</span>
            </div>
            <div class="headerDivider"></div>
            <a href="#" class="headerBtnText" id="headerBtnMypage">마이페이지</a>
            <div class="headerDivider"></div>
            <a href="#" class="headerBtnText logout" id="headerBtnLogout">로그아웃</a>
          </div>
        </div>
      </header>`,
  
    menti: `
      <header class="headerWrap">
        <div class="headerInner">
          <a href="#" class="headerLogo">UniBridge</a>
          <nav class="headerNav">
            <a href="#">멘토 검색</a>
            <a href="#">게시판</a>
            <a href="#">학습보고서</a>
            <a href="#">공지사항</a>
          </nav>
          <div class="headerAuthGroup">
            <div class="userInfoWrap">
              <span class="userName">홍길동</span>
              <span class="userRoleBadge mentiRoleBadge">멘티</span>
            </div>
            <div class="headerDivider"></div>
            <a href="#" class="headerBtnText" id="headerBtnMypage">마이페이지</a>
            <div class="headerDivider"></div>
            <a href="#" class="headerBtnText logout" id="headerBtnLogout">로그아웃</a>
          </div>
        </div>
      </header>`,
  
    user: `
      <header class="headerWrap">
        <div class="headerInner">
          <a href="#" class="headerLogo">UniBridge</a>
          <nav class="headerNav">
            <a href="#">멘토 검색</a>
            <a href="#">게시판</a>
            <a href="#">학습보고서</a>
            <a href="#">공지사항</a>
          </nav>
          <div class="headerAuthGroup">
            <div class="userInfoWrap">
              <span class="userName">홍길동</span>
              <span class="userRoleBadge pending">미정</span>
            </div>
            <div class="headerDivider"></div>
            <a href="#" class="headerBtnText" id="headerBtnMypage">마이페이지</a>
            <div class="headerDivider"></div>
            <a href="#" class="headerBtnText logout" id="headerBtnLogout">로그아웃</a>
          </div>
        </div>
      </header>`,
  };
  
  // 헤더 주입 함수
  // state: 'loggedOut' | 'mento' | 'menti' | 'user'
  function loadHeader(state = 'loggedOut') {
    const mount = document.getElementById('headerMount');
    if (mount) mount.innerHTML = headerTemplates[state] || headerTemplates.loggedOut;
  }