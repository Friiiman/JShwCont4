"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputEl = document.querySelector("#from");
const spanInput = inputEl.nextElementSibling;

inputEl.addEventListener("input", (e) => {
  spanInput.textContent = inputEl.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const button = document.querySelector(".messageBtn");
const messageEl = document.querySelector(".message");

button.addEventListener("click", (e) => {
  messageEl.classList.add("animate_animated", "animate_fadeInLeftBig");
  messageEl.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector("form");
const formInput = form.querySelectorAll(".form-control");

function errorAdd(element) {
  element.classList.remove("error");
  element.style.borderColor = "red";
}

function errorRemove(element) {
  element.classList.remove("error");
  element.style.borderColor = "";
}

form.addEventListener("submit", (e) => {
  formInput.forEach((element) => {
    if (!element.value) {
      e.preventDefault();
      errorAdd(element);
      element.addEventListener("input", (e) => {
        if (element.value) {
          errorRemove(element);
        }
      });
    } else {
      errorRemove(element);
    }
  });
});
