/* Author: 

*/

let key = document.querySelector(".key-value") 
let keyCode = document.querySelector(".key-code-value") 
let code = document.querySelector(".code-value") 
let pressSection = document.querySelector(".press-section")
let eventsSection = document.querySelector(".events-section")  

document.addEventListener("keydown", handleKey)

function handleKey(event) {
  key.innerHTML = event.key;
  keyCode.innerHTML = event.keyCode;
  code.innerHTML = event.code;
  pressSection.style.display = "none";
  eventsSection.style.display = "flex";
}