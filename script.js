//your JS code here. If required.
const firstContainer = document.querySelector(".conatiner-1");
const secondContainer = document.querySelector(".conatiner-2");
const btn = document.getElementById("submit");
const player1 = document.getElementsByTagName("input")[0].value;
const player2 = document.getElementsByTagName("input")[1].value;
const play = document.querySelector("label")[1];

btn.addEventListener("click",()=>{
	firstContainer.style.display = "none";
	secondContainer.style.display = "block"
});