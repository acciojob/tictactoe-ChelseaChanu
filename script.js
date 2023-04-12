//your JS code here. If required.
const firstContainer = document.querySelector(".conatiner-1");
const secondContainer = document.querySelector(".conatiner-2");
const
const btn = document.getElementById("submit");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player1");
const message = document.querySelector(".message");

btn.addEventListener("click",(e)=>{
    if((player1.value==="" && player2.value==="") || (player1.value!=="" && player2.value==="")
	  || (player2.value!=="" && player1.value==="")){
        e.preventDefault();
    }
	else{
		firstContainer.style.display = "none";
	    secondContainer.style.display = "block"
        message.textContent = `${player1.value}, you're up`;
	}
}); 

