document.addEventListener("DOMContentLoaded", () => {

  const path = window.location.pathname;
  const isMentor = path.includes("mentorBoard");
  const boardType = isMentor ? "mentor" : "mentee";

  /* ========================
     탭 링크
  ======================== */
  const tabMentee = document.getElementById("tab-mentee");
  const tabMentor = document.getElementById("tab-mentor");

  if (tabMentee) {
    tabMentee.href = "../menteeBoard/menteeBoardList.html";
    if (!isMentor) tabMentee.classList.add("is-active");
  }
  if (tabMentor) {
    tabMentor.href = "../mentorBoard/mentorBoardList.html";
    if (isMentor) tabMentor.classList.add("is-active");
  }

  /* ========================
     목록 렌더
  ======================== */
  let currentPage = 1;
  const boardTableBody = document.getElementById("boardTableBody");

  function renderTable(page) {
    if (!boardTableBody) return;
    const posts = BoardStore.getPage(boardType, page);
    boardTableBody.innerHTML = posts.map(p => `
      <div class="board-table-row" data-id="${p.id}" style="cursor:pointer;">
        <div class="col col-no">${p.id}</div>
        <div class="col col-title">${p.title}</div>
        <div class="col col-author text-muted">${p.author}</div>
        <div class="col col-date text-muted">${p.date} ${p.time}</div>
        <div class="col col-views text-muted">조회수 ${p.views}</div>
      </div>
    `).join("");

    boardTableBody.querySelectorAll(".board-table-row").forEach(row => {
      row.addEventListener("click", () => {
        const id = parseInt(row.dataset.id);
        sessionStorage.setItem("currentPostId", id);
        sessionStorage.setItem("currentBoardType", boardType);
        location.href = `${boardType}BoardDetail.html`;
      });
    });
  }

  /* ========================
     페이지네이션
  ======================== */
  const pagination = document.getElementById("pagination");

  function renderPagination() {
    if (!pagination) return;
    const TOTAL_PAGES = BoardStore.totalPages(boardType);
    const GROUP_SIZE = 5;
    const groupStart = Math.floor((currentPage - 1) / GROUP_SIZE) * GROUP_SIZE + 1;
    const groupEnd = Math.min(groupStart + GROUP_SIZE - 1, TOTAL_PAGES);

    const showPrev = currentPage > 1;
    const showNext = groupEnd < TOTAL_PAGES;

    let html = "";
    if (showPrev) html += `<button class="page-btn" data-action="prev">&lt;</button>`;
    for (let i = groupStart; i <= groupEnd; i++) {
      html += `<button class="page-btn ${i === currentPage ? "is-active" : ""}" data-page="${i}">${i}</button>`;
    }
    if (showNext) html += `<button class="page-btn" data-action="next">&gt;</button>`;
    pagination.innerHTML = html;
  }

  if (pagination) {
    pagination.addEventListener("click", e => {
      const btn = e.target.closest(".page-btn");
      if (!btn) return;
      const TOTAL_PAGES = BoardStore.totalPages(boardType);
      const GROUP_SIZE = 5;
      const groupStart = Math.floor((currentPage - 1) / GROUP_SIZE) * GROUP_SIZE + 1;
      const groupEnd = Math.min(groupStart + GROUP_SIZE - 1, TOTAL_PAGES);

      if (btn.dataset.action === "prev") currentPage = groupStart - 1;
      else if (btn.dataset.action === "next") currentPage = groupEnd + 1;
      else if (btn.dataset.page) currentPage = parseInt(btn.dataset.page);

      renderTable(currentPage);
      renderPagination();
    });
  }

  renderTable(currentPage);
  renderPagination();

  /* ========================
     작성 버튼
  ======================== */
  const btnWrite = document.getElementById("btnWrite");
  if (btnWrite) {
    btnWrite.addEventListener("click", () => {
      location.href = `${boardType}BoardWrite.html`;
    });
  }

  /* ========================
     조회 버튼
  ======================== */
  const btnSearch = document.getElementById("btnSearch");
  if (btnSearch) {
    btnSearch.addEventListener("click", () => {
      alert("조회 기능은 백엔드 연동 후 동작합니다.");
    });
  }

});
