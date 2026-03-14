const signUp = document.querySelector("button[type='submit']");

signUp.addEventListener("click", (e) => {

  e.preventDefault();

  const subject = document.getElementById("mentoringSubject");
  const subjectError = document.querySelector("#mentoringSubject ~ .error")

  subjectError.style.display = "none";
  if(subject.value === "none"){
    subjectError.style.display = "block";
  }

  const title = document.getElementById("mentoringTitle");
  const titleError = document.querySelector("#mentoringTitle ~ .error");

  titleError.style.display = "none";
  if(title.value.trim() === ""){
    titleError.style.display = "block";
  }

  const purpose = document.getElementById("mentoringPurpose");
  const purposeError = purpose.parentElement.querySelector(".error");

  purposeError.style.display = "none";
  if(purpose.value.trim() === ""){
    purposeError.style.display = "block";
  }    

  const curriculum = document.getElementById("mentoringCurriculum");
  const curriculumError = curriculum.parentElement.querySelector(".error");

  curriculumError.style.display = "none";
  if(curriculum.value.trim() === ""){
    curriculumError.style.display = "block";
  }
  
})
