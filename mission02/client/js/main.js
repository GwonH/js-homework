/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const body = document.querySelector("body");
const navigation = getNode(".nav");
const navUl = getNode(".navUl");
const mainImage = getNode(".visual img");
const nickName = getNode(".nickName");

function handleSlider(e) {
  e.preventDefault();
  const target = e.target.closest("li");
  const button = e.target.closest("button");

  if (!target || !button) return;

  const list = [...navUl.children];
  const index = attr(target, "data-index");

  list.forEach((li) => removeClass(li, "is-active"));
  addClass(target, "is-active");

  // 캐릭터 사진 변경
  const selectedImg = button.querySelector("img");
  const src = selectedImg.getAttribute("src");

  attr(mainImage, "src", src);
  attr(mainImage, "alt", data[index - 1].alt);

  // 캐릭터 이름 변경
  setName(nickName, data[index - 1]);

  // 배경 그라데이션
  const backgroundColor = data[index - 1].color;
  const bgGradient = `linear-gradient(to bottom, ${backgroundColor[0]}, ${backgroundColor[1]})`;
  body.style.background = bgGradient;
}

// setName 함수
function setName(nickName, data) {
  nickName.textContent = data.name;
}

navigation.addEventListener("click", handleSlider);
