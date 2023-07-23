### 🦁멋쟁이사자처럼 프론트엔드스쿨 6기
### 💎 Javascript Mission-02

![transition](https://github.com/GwonH/lion-javascript/assets/130988491/6481a11a-0615-41c2-b44c-f52cb1c1cc6a)

## 🔖코드 설명
- getNode함수로 필요한 node들을 변수에 할당하였다.  
</br>

  ```js 
  const body = document.querySelector("body");
  const navigation = getNode(".nav");
  const navUl = getNode(".navUl");
  const mainImage = getNode(".visual img");
  const nickName = getNode(".nickName");
  ```

- `handleSlider()`를 통해 `navigation`의 클릭이벤트를 수행한다. 
  
  ```js
  const list = [...navUl.children];
  const index = attr(target, "data-index");

  list.forEach((li) => removeClass(li, "is-active"));
  addClass(target, "is-active");
  ```
  `[...navUl.children]`로 `navUl`의 자식요소인`li`를 `list`라는 배열로 할당. 내가 선택하지 않은 모든 li에서 `is-active` 클래스 제거한다.

- attr()를 이용해 `mainImage`의 `src`,`alt`를 변경하도록 하였다.

  ```js
  const selectedImg = button.querySelector("img");
  const src = selectedImg.getAttribute("src");

  attr(mainImage, "src", src);
  attr(mainImage, "alt", data[index - 1].alt);
  ```


- setName()을 이용해 `h1`의 텍스트를 `data`배열의 인덱스에 맞는 객체의 `name`값으로 바뀌도록 했다.

  ```js
  function setName(nickName, data) {
  nickName.textContent = data.name;
  }
  ```
- `data`배열의 `color`값으로 배경이 그라데이션 처리되도록 했다.
- 
  ```js
  const backgroundColor = data[index - 1].color;
  const bgGradient = `linear-gradient(to bottom, ${backgroundColor[0]}, ${backgroundColor[1]})`;
  body.style.background = bgGradient;
  ```