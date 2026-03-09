const DUPLICATE_NICKNAMES = ["test"];

// 상태 플래그
let nicknameChanged = false;
let passwordChanged = false;
let photoAttached   = false;

// ── input-group 안의 .error-msg에 텍스트 세팅 ──
function showError(inputEl, message) {
  const group = inputEl.closest(".input-group");
  const errorEl = group ? group.querySelector(".error-msg") : null;
  if (errorEl) errorEl.textContent = message;
  updateCompleteBtn();
}

function clearError(inputEl) {
  const group = inputEl.closest(".input-group");
  const errorEl = group ? group.querySelector(".error-msg") : null;
  if (errorEl) errorEl.textContent = "";
  updateCompleteBtn();
}

// ── 완료 버튼 활성/비활성 ──
function updateCompleteBtn() {
  const btn = document.querySelector(".userModify");
  if (!btn) return;

  const hasError = Array.from(document.querySelectorAll(".error-msg"))
    .some(el => el.textContent.trim() !== "");

  const canSubmit = !hasError && nicknameChanged && passwordChanged && photoAttached;

  btn.disabled      = !canSubmit;
  btn.style.opacity = canSubmit ? "1" : "0.5";
  btn.style.cursor  = canSubmit ? "pointer" : "not-allowed";
}

// ── 버튼 활성/비활성 헬퍼 ──
function setBtn(btn, enabled) {
  if (!btn) return;
  btn.disabled      = !enabled;
  btn.style.opacity = enabled ? "1" : "0.5";
  btn.style.cursor  = enabled ? "pointer" : "not-allowed";
}

document.addEventListener("DOMContentLoaded", () => {

  // ── 요소 참조 ──
  const completeBtn    = document.querySelector(".userModify");

  // 닉네임 input-group
  const nicknameGroup  = document.querySelectorAll(".input-group")[2]; // 세 번째 .input-group
  const nicknameInput  = nicknameGroup.querySelector("input");
  const nickBtns       = nicknameGroup.querySelectorAll("button");
  const nickDupBtn     = nickBtns[0]; // 중복확인
  const nickChangeBtn  = nickBtns[1]; // 변경

  // 비밀번호 input-group들
  const pwGroup        = document.querySelectorAll(".input-group")[3]; // 변경할 비밀번호
  const pwInput        = pwGroup.querySelector("input");

  const pwConfirmGroup = document.querySelectorAll(".input-group")[4]; // 비밀번호 확인
  const pwConfirmInput = pwConfirmGroup.querySelector("input");
  const pwBtns         = pwConfirmGroup.querySelectorAll("button");
  const pwCheckBtn     = pwBtns[0]; // 확인
  const pwChangeBtn    = pwBtns[1]; // 변경

  // 초기 버튼 비활성화
  if (completeBtn) {
    completeBtn.disabled      = true;
    completeBtn.style.opacity = "0.5";
    completeBtn.style.cursor  = "not-allowed";
  }
  setBtn(nickChangeBtn, false);
  setBtn(pwChangeBtn,   false);

  let nickDupPassed = false;
  let pwCheckPassed = false;

  // ──────────────────────────────────────
  // 사진 변경
  // ──────────────────────────────────────
  const photoBtn   = document.querySelector(".userImg > button");
  const profileImg = document.querySelector(".userImg > img");
  const photoErrorEl = document.querySelector(".photo-error-msg");

  const fileInput = document.createElement("input");
  fileInput.type   = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";
  document.body.appendChild(fileInput);

  if (photoBtn) {
    photoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      fileInput.click();
    });
  }

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (profileImg) profileImg.src = e.target.result;
      photoAttached = true;
      if (photoErrorEl) photoErrorEl.textContent = "";
      updateCompleteBtn();
    };
    reader.readAsDataURL(file);
  });

  // ──────────────────────────────────────
  // 닉네임 중복확인
  // ──────────────────────────────────────
  nickDupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const val = nicknameInput.value.trim();
    if (!val) {
      showError(nicknameInput, "닉네임을 입력해주세요.");
      nickDupPassed = false;
    } else if (DUPLICATE_NICKNAMES.includes(val)) {
      showError(nicknameInput, "중복 닉네임이 있습니다. / 중복 닉네임 확인이 필요합니다.  ");
      nickDupPassed = false;
    } else {
      clearError(nicknameInput);
      nickDupPassed = true;
    }
    setBtn(nickChangeBtn, nickDupPassed);
  });

  nicknameInput.addEventListener("input", () => {
    nickDupPassed   = false;
    nicknameChanged = false;
    clearError(nicknameInput);
    setBtn(nickChangeBtn, false);
    updateCompleteBtn();
  });

  // 닉네임 변경 버튼
  nickChangeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!nickDupPassed) return;
    nicknameChanged = true;
    updateCompleteBtn();
  });

  // ──────────────────────────────────────
  // 비밀번호 확인
  // ──────────────────────────────────────
  pwCheckBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!pwInput.value) {
      showError(pwConfirmInput, "변경할 비밀번호를 먼저 입력해주세요.");
      pwCheckPassed = false;
    } else if (pwInput.value !== pwConfirmInput.value) {
      showError(pwConfirmInput, "비밀번호가 일치하지 않습니다./ 비밀번호 확인이 필요합니다.");
      pwCheckPassed = false;
    } else {
      clearError(pwConfirmInput);
      pwCheckPassed = true;
    }
    setBtn(pwChangeBtn, pwCheckPassed);
  });

  pwInput.addEventListener("input", () => {
    pwCheckPassed   = false;
    passwordChanged = false;
    if (pwConfirmInput.value) {
      if (pwInput.value !== pwConfirmInput.value) showError(pwConfirmInput, "비밀번호가 일치하지 않습니다./ 비밀번호 확인이 필요합니다.");
      else clearError(pwConfirmInput);
    }
    setBtn(pwChangeBtn, false);
    updateCompleteBtn();
  });

  pwConfirmInput.addEventListener("input", () => {
    pwCheckPassed   = false;
    passwordChanged = false;
    if (!pwConfirmInput.value) clearError(pwConfirmInput);
    else if (pwInput.value !== pwConfirmInput.value) showError(pwConfirmInput, "비밀번호가 일치하지 않습니다.");
    else clearError(pwConfirmInput);
    setBtn(pwChangeBtn, false);
  });

  // 비밀번호 변경 버튼
  pwChangeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!pwCheckPassed) return;
    passwordChanged = true;
    updateCompleteBtn();
  });

  // ──────────────────────────────────────
  // 완료 버튼
  // ──────────────────────────────────────
  if (completeBtn) {
    completeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!photoAttached) {
        if (photoErrorEl) photoErrorEl.textContent = "사진 첨부가 필요합니다.";
        updateCompleteBtn();
        return;
      }
      if (!completeBtn.disabled) {
        // form.submit();
        window.location.href = '/frontend/html/user/mentor/myPage/myPage.html';
      }
    });
  }

});