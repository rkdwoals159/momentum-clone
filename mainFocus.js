function mainFocus() {
  const mainFocusDiv = document.querySelector(".mainFocusDiv");
  const mainFocusForm = document.querySelector("#mainFocusForm");
  const mainFocusInput = document.querySelector("#mainFocusInput");
  const mainFocusListDiv = document.querySelector(".mainFocusListDiv");

  mainFocusForm.addEventListener("submit", (e) => {
    e.preventDefault();
    mainFocusDiv.style.display = "none";
    mainFocusListDiv.style.display = "block";
    mainFocusListDiv.querySelector("#mainFocusList").innerText = mainFocusInput.value;
  });
}
export default mainFocus;
