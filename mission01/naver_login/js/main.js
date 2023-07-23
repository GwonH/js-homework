
const idInput = document.querySelector('.user-email-input');
const pwInput = document.querySelector('.user-password-input');
const loginButton = document.querySelector('.btn-login')


const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}             


let trueId;
let truePw;

// User Id validation
idInput.addEventListener('input',()=>{
  const idVal = idInput.value;
  
  if(emailReg(idVal) && (idVal === user.id)){
      return trueId = true;
  }
})

// User password validation
pwInput.addEventListener('input',()=>{
  const pwVal = pwInput.value;
  
  if(pwReg(pwVal) && (pwVal === user.pw)){
      return truePw = true;
    }
})

loginButton.addEventListener('click', (e)=>{
  e.preventDefault();
  if(trueId && truePw ){
    window.location.href = '/naver_login/welcome.html';
  }
})



/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/



function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{10,16}$/;
  return re.test(String(text).toLowerCase());
}


