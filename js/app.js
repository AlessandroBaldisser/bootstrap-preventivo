// Dichiaro le variabili per gli elementi del form e l'output
const nomeUtenteElement = document.getElementById("firstName");
const cognomeUtenteElement = document.getElementById("lastName");
const emailUtenteElement = document.getElementById("email");
const selectElement = document.getElementById("selectButton");
const promoCodeElement = document.getElementById("promoCode");
const prezzoOutput = document.getElementById("prezzoFinale");
const buttonElement = document.getElementById("btn");

// Aggiungo gli event lister per togliere la classe is-invalid quando clicco sul form
nomeUtenteElement.addEventListener("click", function () {
    nomeUtenteElement.classList.remove("is-invalid");
});

cognomeUtenteElement.addEventListener("click", function () {
    cognomeUtenteElement.classList.remove("is-invalid");
});

emailUtenteElement.addEventListener("click", function () {
    emailUtenteElement.classList.remove("is-invalid");
});

selectElement.addEventListener("click", function () {
    selectElement.classList.remove("is-invalid");
});

/* Aggiungo l'event listener al bottone */
buttonElement.addEventListener("click", function () {
    // Prendo i valori di tutti gli elementi del form
    const nome = nomeUtenteElement.value;
    const cognome = cognomeUtenteElement.value;
    const email = emailUtenteElement.value;
    const select = selectElement.value;

    // Se il form non è compilato aggiungo la classe is-invalid
    if (nome === "") {
        nomeUtenteElement.classList.add("is-invalid");
    }
    if (cognome === "") {
        cognomeUtenteElement.classList.add("is-invalid");
    }
    if (email === "") {
        emailUtenteElement.classList.add("is-invalid");
    }
    if (select !== "Backend" && select !== "Frontend" && select !== "Project") {
        selectElement.classList.add("is-invalid"); 
    }

    // Calcolo il prezzo del biglietto
    // Creo la variabile "prezzo"
    let prezzo = 0;

    // Prendo dal form il tipo di lavoro
    if (select === "Backend") {
        // Prendo il prezzo orario del lavoro e lo moltiplico per 10
        prezzo = 20.50 * 10;
    } else if (select === "Frontend") {
        // Prendo il prezzo orario del lavoro e lo moltiplico per 10
        prezzo = 15.30 * 10;
    } else if (select === "Project") {
        // Prendo il prezzo orario del lavoro e lo moltiplico per 10
        prezzo = 33.60 * 10;
    }

    /* Controllo se l'utente ha un codice promozionale valido,
    se si gli applico uno sconto, altrimenti lo avverto e calcolo normalmente il prezzo */

    // Creo la variabile promoCode
    let promoCode = promoCodeElement.value;

    // Creo un array con tutti i codici promozionali
    const arrayPromoCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

    // Creo la variabile sconto
    const sconto = prezzo * 0.25

    // Verifica
    if (arrayPromoCodes.includes(promoCode)) {
        prezzo = prezzo - sconto;
    } else if (promoCode === "") { }
    else { alert("Il codice non è corretto, il prezzo verrà calcolato senza l'applicazione dello sconto.") }


    // Divido il prezzo in parte intera e decimale
    const prezzoDiviso = prezzo.toFixed(2);
    const [parteIntera, parteDecimale] = prezzoDiviso.split("."); //la funzione split dividerà il numero quando vedrà il "."

    // Creo l'output con la parte intera in grassetto
    const prezzoFinaleOutput = `<strong>${parteIntera}</strong>,${parteDecimale}`;

    // Mando a schermo il risultato se l'elemento esiste
    prezzoOutput.innerHTML = prezzoFinaleOutput;
});
