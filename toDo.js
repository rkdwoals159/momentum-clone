function toDo() {
  const toDos = [];
  const toDoTitle = document.querySelector("#toDoTitle");
  const toDoInput = document.querySelector("#toDoInput");
  const toDoForm = document.querySelector("#toDoForm");
  const toDoList = document.querySelector("#toDoList");
  toDoTitle.style.display = "block";
  toDoInput.style.display = "block";

  toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newToDo = document.createElement("li");
    const toDoName = document.createTextNode(toDoInput.value);
    const removeButton = document.createElement("button");
    removeButton.innerText = "❌";
    const updateButton = document.createElement("button");
    updateButton.innerText = "🔧";
    newToDo.appendChild(toDoName);
    newToDo.appendChild(removeButton);
    newToDo.appendChild(updateButton);
    removeButton.style.marginLeft = "15px";
    removeButton.style.marginRight = "5px";
    toDoForm.appendChild(newToDo);

    //toDos 리스트 내 id와 같이 추가해서 저장
    if (!toDos.length) {
      toDos.push([0, toDoName]);
    } else {
      toDos.push([toDos.at(-1)[0] + 1, toDoName]);
    }
    toDoInput.value = "";
  });
}

function update() {}
function remove() {}
export default toDo;
