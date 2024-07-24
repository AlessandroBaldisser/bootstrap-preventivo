let nomeUtenteElement = document.getElementById("firstName");
let cognomeUtenteElement = document.getElementById("lastName");
let emailUtenteElement = document.getElementById("email");
let selectELement = document.getElementById("selectButton");
let promoCodeElement = document.getElementById("promoCode")

let prezzoFinaleOutput = document.getElementById("prezzoFinale")


const buttonElement = document.getElementById("btn");


buttonElement.addEventListener("click", function(){
    console.log(nomeUtenteElement.value)
})