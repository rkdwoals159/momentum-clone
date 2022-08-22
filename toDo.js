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
    //요소 추가
    newToDo.appendChild(toDoName);
    newToDo.appendChild(removeButton);
    newToDo.appendChild(updateButton);

    //마진 추가 및 toDoList내 최종적으로 추가
    removeButton.style.marginLeft = "15px";
    removeButton.style.marginRight = "5px";
    toDoList.appendChild(newToDo);

    //toDos 리스트 내 id와 같이 추가해서 저장
    if (!toDos.length) {
      toDos.push([0, toDoName]);
    } else {
      toDos.push([toDos.at(-1)[0] + 1, toDoName]);
    }
    toDoInput.value = "";
    newToDo.setAttribute("id", toDos.at(-1)[0]);
    //remove, update 기능 구현
    removeButton.onclick = () => remove(newToDo);
    updateButton.onclick = () => update(newToDo);
  });
}

function update(toDo) {
  console.log("update", toDo.id);
}
function remove(toDo) {
  console.log("remove", toDo.id);
}
export default toDo;
