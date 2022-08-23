const pass1 = document.querySelector('.pass1');
const pass2 = document.querySelector('.pass2');
const button = document.querySelector('.create-btn');
const errorPass = document.querySelectorAll('.error');
const errorNoti = document.querySelector('.match-error');

button.addEventListener('click', () => {
  let pass1V = pass1.value
  let pass2V = pass2.value
  
  if (pass1V !== pass2V) {
    for (let i = 0; i < errorPass.length; i++) {
      errorPass[i].style.border = "2px solid red";
    }
    errorNoti.style.visibility = "visible";
  }
})

console.log(errorPass)