const loginForm = document.getElementById("login");
const userId = document.getElementById("userId");
const userPw = document.getElementById("userPw");
const errorMsg = document.getElementById("errorMsg");

loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    const id = userId.value.trim();
    const pw = userPw.value.trim();

    if(id === "" || pw === ""){
        errorMsg.textContent = "아이디와 비밀번호를 입력해주세요.";
        return;
    }

    if(id !== "test" || pw !== "1234"){
        errorMsg.textContent = "아이디와 비밀번호가 맞지 않습니다. 다시 확인해주세요.";
        return;
    }

    errorMsg.textContent = "";
    alert("로그인 성공!");
    window.location.href = '/frontend/main.html';
});