/* creo variabile del nome */
const nomeUtenteElement = document.getElementById("firstName");

/* creo variabile del cognome */
const cognomeUtenteElement = document.getElementById("lastName");

/* creo variabile della email */
const emailUtenteElement = document.getElementById("email");

let selectELement = document.getElementById("selectButton");

/* creo variabile del codice promozionale */
let promoCodeElement = document.getElementById("promoCode");

let prezzoFinaleOutput = document.getElementById("prezzoFinale")


const buttonElement = document.getElementById("btn");


buttonElement.addEventListener("click", function(){
    /* prendo i valori di tutti gli elementi del form */
    nome = nomeUtenteElement.value;
    cognome = cognomeUtenteElement.value;
    email = emailUtenteElement.value;
    select = selectELement.value;

    /* tolgo a tutti gli elementi la class is-invalid ma solo quando l'utente clicca sul form*/
    nomeUtenteElement.addEventListener("click", function(){
        nomeUtenteElement.classList.remove("is-invalid");
    })

    cognomeUtenteElement.addEventListener("click", function(){
        cognomeUtenteElement.classList.remove("is-invalid");
    })
    emailUtenteElement.addEventListener("click", function(){
        emailUtenteElement.classList.remove("is-invalid");
    })
    selectELement.addEventListener("click", function(){
        selectELement.classList.remove("is-invalid");
    })
    
    
    /* se il form non è compilato aggiungo la classe is-invalid */
    if(nome === ""){
        nomeUtenteElement.classList.add("is-invalid");
    }
    if(cognome === ""){
        cognomeUtenteElement.classList.add("is-invalid");
    }
    if(email === ""){
        emailUtenteElement.classList.add("is-invalid");
    }
    if(select != "Backend" && select != "Frontend" && select !="Project"){
        selectELement.classList.add("is-invalid")
    }

    /* calcolo il prezzo del biglietto */
    let prezzo = 0;
    
    /* prendo dal form il tipo di lavoro */

    if(select === "Backend"){

        /* prendo il prezzo orario del lavoro e lo moltiplico per 10 */
        prezzo = 20.50 * 10; 
        console.log(prezzo)
    }else if(select === "Frontend"){

        /* prendo il prezzo orario del lavoro e lo moltiplico per 10 */
        prezzo = 15.30 * 10;
        console.log(prezzo)
    }else if(select === "Project"){

        /* prendo il prezzo orario del lavoro e lo moltiplico per 10 */
        prezzo = 33.60 * 10;
        console.log(prezzo.toFixed(2))
    }
    
    /* mando a schermo il risultato */



    
})