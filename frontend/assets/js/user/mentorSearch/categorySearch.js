document.addEventListener('DOMContentLoaded', () => {
  const categoryLinks = document.querySelectorAll('nav ul li a');

  categoryLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // 활성 카테고리 스타일 변경
      categoryLinks.forEach(l => l.removeAttribute('id'));
      link.id = 'nowCategory';

      const selected = link.textContent.trim();

      // '전체'면 필터 없이 전체 데이터, 아니면 해당 과목만
      const filtered = selected === '전체'
        ? DUMMY_MENTORS
        : DUMMY_MENTORS.filter(m => m.subject === selected);

      // 페이지네이션 인스턴스에 필터된 데이터 반영
      pagination.update(filtered.length, filtered);
    });
  });
});