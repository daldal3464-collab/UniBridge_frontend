document.addEventListener('DOMContentLoaded', () => {
    const checkAll = document.querySelector('#checkAll'); 
    const checkboxes = document.querySelectorAll('.term-check'); 
    const termsForm = document.querySelector('#termsForm'); 
    const termsBtn = document.querySelector('.termsBtn');

    // 필수 약관 (1번, 2번)
    const requiredTerms = [checkboxes[0], checkboxes[1]];

    // 버튼 활성화 상태 업데이트
    function updateButtonState() {
        const allRequiredChecked = requiredTerms.every(item => item.checked);
        termsBtn.disabled = !allRequiredChecked;
    }

    // 1 전체 동의 클릭
    checkAll.addEventListener('change', (e) => {
        const isChecked = e.target.checked;

        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });

        updateButtonState();
    });

    // 2 개별 체크 클릭
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {

            const checkedCount = document.querySelectorAll('.term-check:checked').length;

            checkAll.checked = (checkedCount === checkboxes.length);

            updateButtonState();
        });
    });

    // 3 회원가입 진행
    termsForm.addEventListener('submit', (e) => {

        const allRequiredChecked = requiredTerms.every(item => item.checked);

        if (!allRequiredChecked) {
            e.preventDefault();
            alert('필수 약관에 모두 동의하셔야 가입이 가능합니다.');
            return;
        }

        // 특정 경로로 이동
        e.preventDefault();
        window.location.href = "/frontend/html/user/siginUp/signUp.html";
    });

    // 초기 버튼 상태
    updateButtonState();
});