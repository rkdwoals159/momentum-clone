function toDo() {
  const toDoClass = document.querySelector(".toDo");
  const toDos = [];
  const toDoMainButton = document.querySelector("#toDoMainButton");
  const toDoTitle = document.querySelector("#toDoTitle");
  const toDoInput = document.querySelector("#toDoInput");
  const toDoForm = document.querySelector("#toDoForm");
  const toDoList = document.querySelector("#toDoList");
  toDoTitle.style.display = "block";
  toDoInput.style.display = "block";

  //toDo버튼 on/off 구현
  toDoMainButton.onclick = () => {
    if (toDoClass.style.display === "block") {
      toDoClass.style.display = "none";
    } else {
      toDoClass.style.display = "block";
    }
  };

  toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newToDo = document.createElement("li");
    const toDoName = toDoInput.value;
    const toDoNameInDiv = document.createElement("div");
    toDoNameInDiv.innerText = toDoName;

    const dropDownButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    dropDownButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    dropDownButton.setAttribute("width", "25");
    dropDownButton.setAttribute("height", "21");
    dropDownButton.innerHTML =
      '<path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"/>';

    //요소 추가
    newToDo.appendChild(toDoNameInDiv);
    newToDo.appendChild(dropDownButton);

    //마진 추가 및 toDoList내 최종적으로 추가
    newToDo.style.display = "flex";
    dropDownButton.style.marginLeft = "15px";
    dropDownButton.style.marginRight = "5px";
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
    dropDownButton.onclick = () => dropDown(newToDo);
  });
}

function dropDown(toDo) {
  console.log(toDo.id);
}

export default toDo;
