//your JS code here. If required.
const firstContainer = document.querySelector(".conatiner-1");
const secondContainer = document.querySelector(".conatiner-2");
const cells = document.querySelectorAll(".cell");
const btn = document.getElementById("submit");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const message = document.querySelector(".message");

btn.addEventListener("click",()=>{
    if(player1.value!=="" && player2.value!==""){
        firstContainer.style.display = "none";
	    secondContainer.style.display = "block"
        message.textContent = `${player1.value}, you're up`;
    }
});

let counter = 1;
for(let i=0;i<9;i++){
    cells[i].addEventListener("click",()=>{
        if(counter%2===1){
            message.textContent = `${player2.value}, you're up`;
            cells[i].textContent= "X";
        }
        else{
            message.textContent = `${player1.value}, you're up`;
            cells[i].textContent= "O";
        }
        counter++;
    });
}

