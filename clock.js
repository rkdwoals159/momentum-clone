function clock() {
  const time = document.querySelector("#clock");
  const date = new Date();
  const result = `${date.getHours()}:${date.getMinutes()}`;
  time.innerText = result;
}
export default clock;
