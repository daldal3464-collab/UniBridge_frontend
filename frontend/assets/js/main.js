// main.js

// ── 슬라이더 ──
function initSlider(sliderId, prevBtnId, nextBtnId, visibleCount) {
  const track = document.getElementById(sliderId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  if (!track || !prevBtn || !nextBtn) return;

  const cards = track.children;
  let currentIdx = 0;

  function getCardWidth() {
    if (cards.length === 0) return 0;
    return cards[0].getBoundingClientRect().width + 16;
  }

  function updateSlider() {
    track.style.transform = `translateX(-${currentIdx * getCardWidth()}px)`;
    prevBtn.disabled = currentIdx === 0;
    nextBtn.disabled = currentIdx >= cards.length - visibleCount;
    prevBtn.style.opacity = prevBtn.disabled ? '0.35' : '1';
    nextBtn.style.opacity = nextBtn.disabled ? '0.35' : '1';
  }

  prevBtn.addEventListener('click', () => { if (currentIdx > 0) { currentIdx--; updateSlider(); } });
  nextBtn.addEventListener('click', () => { if (currentIdx < cards.length - visibleCount) { currentIdx++; updateSlider(); } });

  updateSlider();
}


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

// 진행중인 대회 슬라이더 로직

document.addEventListener('DOMContentLoaded', () => {
  initContestSlider();
});

function initContestSlider() {
  const track = document.getElementById('contestSliderTrack');
  const prevBtn = document.getElementById('contestPrevBtn');
  const nextBtn = document.getElementById('contestNextBtn');
  if (!track || !prevBtn || !nextBtn) return;

  const visibleCount = 5;
  const cards = track.children;
  let currentIdx = 0;

  function getCardWidth() {
    if (cards.length === 0) return 0;
    return cards[0].getBoundingClientRect().width + 16; // 카드 너비 + gap
  }

  function updateSlider() {
    track.style.transform = `translateX(-${currentIdx * getCardWidth()}px)`;
    prevBtn.disabled = currentIdx === 0;
    nextBtn.disabled = currentIdx >= cards.length - visibleCount;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIdx > 0) { currentIdx--; updateSlider(); }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIdx < cards.length - visibleCount) { currentIdx++; updateSlider(); }
  });

  updateSlider();
}

// 추천 멘토 섹션 클릭 이벤트

document.addEventListener('DOMContentLoaded', () => {
  const mentoCards = document.querySelectorAll('.mentoRecommendCard');

  mentoCards.forEach((card) => {
    card.addEventListener('click', () => {
      const mentoId = card.dataset.mentoId;
      // 멘토 상세 페이지 이동 로직 추가 가능
      // window.location.href = `/mento/detail?mentoId=${mentoId}`;
    });

    // 호버 효과
    card.addEventListener('mouseenter', () => {
      card.querySelector('.mentoRecommendAvatar').style.borderColor = '#2c5f8a';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.mentoRecommendAvatar').style.borderColor = '#e8eef5';
    });
  });
});


// 취업 슬라이더 좌우 버튼 로직

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('jobBannerTrack');
  const prevBtn = document.getElementById('jobBannerPrev');
  const nextBtn = document.getElementById('jobBannerNext');
  const visibleCount = 5;

  if (!track || !prevBtn || !nextBtn) return;

  const cards = track.children;
  let currentIdx = 0;

  function getCardWidth() {
    if (cards.length === 0) return 0;
    return cards[0].getBoundingClientRect().width + 16; // 카드 너비 + gap
  }

  function updateSlider() {
    track.style.transform = `translateX(-${currentIdx * getCardWidth()}px)`;
    prevBtn.disabled = currentIdx === 0;
    nextBtn.disabled = currentIdx >= cards.length - visibleCount;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIdx > 0) { currentIdx--; updateSlider(); }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIdx < cards.length - visibleCount) { currentIdx++; updateSlider(); }
  });

  // 카드 클릭 이벤트
  Array.from(cards).forEach((card) => {
    card.addEventListener('click', () => {
      const jobId = card.dataset.jobId;
      // 취업 상세 페이지 이동 로직 추가 가능
      // window.location.href = `/job/detail?jobId=${jobId}`;
    });
  });

  updateSlider();
});