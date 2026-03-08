const rightBtn = document.querySelector(
    ".main-container " +
    ".title-container " +
    ".date-selector-container " +
    ".right-button"
);

rightBtn.addEventListener('click', () => {
    const selectedYearEl = document.querySelector(
        ".main-container " +
        ".title-container " +
        ".date-selector-container " +
        ".selected-year"
    );

    const currentYear = Number(selectedYearEl.innerText)
    selectedYearEl.innerText = currentYear + 1;
});

const leftBtn = document.querySelector(
    ".main-container " +
    ".title-container " +
    ".date-selector-container " +
    ".left-button"
);

leftBtn.addEventListener('click', () => {
    const selectedYearEl = document.querySelector(
        ".main-container " +
        ".title-container " +
        ".date-selector-container " +
        ".selected-year"
    );

    const currentYear = Number(selectedYearEl.innerText)
    selectedYearEl.innerText = currentYear - 1;
});