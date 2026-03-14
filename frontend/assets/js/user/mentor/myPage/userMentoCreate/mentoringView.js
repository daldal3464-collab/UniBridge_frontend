const modifyBtn = document.querySelector("#modBtn");
const deleteBtn = document.querySelector("#delBtn");

modifyBtn.addEventListener("click", () => {
  location.href = "/frontend/html/user/mentor/myPage/userMentoCreate/mentoringModify.html";
});

deleteBtn.addEventListener("click", () => {
  const result = confirm("정말 삭제하시겠습니까?");

  if(result){
    location.href = "/frontend/html/user/mentor/myPage/userMentoCreate/mentoringCreate.html";
  }
});
