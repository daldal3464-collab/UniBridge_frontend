document.addEventListener("DOMContentLoaded", () => {

  let currentPage = 1;
  let currentType = "전체";

  /* ========================
     목록 렌더
  ======================== */
  const noticeTableBody = document.getElementById("noticeTableBody");

  function renderTable(page) {
    if (!noticeTableBody) return;
    const notices = NoticeStore.getPage(page, currentType);
    noticeTableBody.innerHTML = notices.map(n => `
      <div class="notice-table-row" data-id="${n.id}" style="cursor:pointer;">
        <div class="col col-no">${n.id}</div>
        <div class="col col-title">[${n.type}] ${n.title}</div>
        <div class="col col-date text-muted">${n.date} ${n.time}</div>
        <div class="col col-views text-muted">조회수 ${n.views}</div>
      </div>
    `).join("");

    noticeTableBody.querySelectorAll(".notice-table-row").forEach(row => {
      row.addEventListener("click", () => {
        sessionStorage.setItem("currentNoticeId", row.dataset.id);
        location.href = "noticeDetail.html";
      });
    });
  }

  /* ========================
     페이지네이션
  ======================== */
  const pagination = document.getElementById("pagination");

  function renderPagination() {
    if (!pagination) return;
    const TOTAL_PAGES = NoticeStore.totalPages(currentType);
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
      const TOTAL_PAGES = NoticeStore.totalPages(currentType);
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

  /* ========================
     종류 드롭다운
  ======================== */
  const btnType = document.getElementById("btnType");
  const typeDropdown = document.getElementById("typeDropdown");
  if (btnType && typeDropdown) {
    btnType.addEventListener("click", () => {
      typeDropdown.style.display = typeDropdown.style.display === "block" ? "none" : "block";
    });
    document.addEventListener("click", e => {
      if (!btnType.contains(e.target)) typeDropdown.style.display = "none";
    });
  }

  window.selectType = function(type) {
    currentType = type;
    currentPage = 1;
    document.getElementById("btnType").textContent = type + " ▼";
    document.getElementById("typeDropdown").style.display = "none";
    renderTable(currentPage);
    renderPagination();
  };

  /* ========================
     등록 버튼
  ======================== */
  const btnWrite = document.getElementById("btnWrite");
  if (btnWrite) {
    btnWrite.addEventListener("click", () => {
      location.href = "noticeWrite.html";
    });
  }

  /* ========================
     조회 버튼
  ======================== */
  const btnSearch = document.getElementById("btnSearch");
  if (btnSearch) {
    btnSearch.addEventListener("click", () => {
      alert("날짜 조회 기능은 백엔드 연동 후 동작합니다.");
    });
  }

  renderTable(currentPage);
  renderPagination();

});
