document.addEventListener('DOMContentLoaded', () => {
    const checkAll = document.querySelector('#checkAll'); // 전체 동의 체크박스
    const checkboxes = document.querySelectorAll('.term-check'); // 개별 약관 체크박스들
    const termsForm = document.querySelector('#termsForm'); // 폼 태그

    // 1. 전체 동의 클릭 시: 모든 개별 체크박스 상태를 동기화
    checkAll.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    });

    // 2. 개별 체크박스 클릭 시: 전체 동의 상태를 확인하여 업데이트
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // 체크된 개별 박스의 개수 계산
            const checkedCount = document.querySelectorAll('.term-check:checked').length;
            
            // 전체 개수와 체크된 개수가 같으면 '전체 동의' 체크, 아니면 해제
            checkAll.checked = (checkedCount === checkboxes.length);
        });
    });

    // 3. [추가] 필수 항목 미체크 시 회원가입 진행 막기 (선택 사항)
    termsForm.addEventListener('submit', (e) => {
        // 첫 번째와 두 번째 체크박스가 [필수]라고 가정할 때
        const requiredTerms = [checkboxes[0], checkboxes[1]];
        const allRequiredChecked = requiredTerms.every(item => item.checked);

        if (!allRequiredChecked) {
            e.preventDefault(); // 폼 제출 막기
            alert('필수 약관에 모두 동의하셔야 가입이 가능합니다.');
        }
    });
});