import toDo from "./Todo.js";

function inputName() {
  const question = document.querySelector("#question");
  const name_ = document.querySelector("#name");
  const hi = document.querySelector("#hi");
  const form = document.querySelector("#form");
  const clock = document.querySelector("#clock");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    hi.innerText = "Good Morning, " + name_.value + ".";
    question.style.display = "none";
    name_.style.display = "none";
    hi.style.display = "block";
    clock.style.display = "block";
    toDo();
  });
}

export default inputName;
