/* 
- chiedi all'utente nome e cognome e memorizzalo
- chiedi all'utente il numero di km che vuole percorrere e memorizzalo
- chiedere all'utente l'età e memorizzalo
- calcola il prezzo del biglietto (km * 0.21)
- ? SE l'utente ha meno di 18 anni applica uno sconto del 20%
    ° ticketPrice = ticketStandard - ( ticketStandard / 100 * 20 )
:? ALTRIMENTI SE l'utente ha più di 65 anni applica uno sconto del 20%
    ° ticketPrice = ticketStandard - ( ticketStandard / 100 * 40)
: ALTRIMENTI 
    ticketPrice =  ticketStandard
- formatta il ticketPrice con due decimali 
*/

// - chiedi all'utente nome e cognome e memorizzalo
let userNameSurnameEl = document.getElementById("user-name-surname");

// - chiedi all'utente il numero di km che vuole percorrere e memorizzalo
let userTripKmEl = document.getElementById("user-trip-km");

// - chiedere all'utente l'età e memorizzalo
let userAgeEl = document.getElementById("user-age");

// - Prezzo al km
const priceKm = 0.21;

let ticketPrice;

//prendo il button #user-generate
let userGenerateEl = document.getElementById("user-generate");

//prendo i campi Nome Cognome, Offerta, costo biglietto
let nameSurnameEl = document.getElementById("name-surname-generated");
let offerEl = document.getElementById("offer-generated");
let ticketCostEl = document.getElementById("ticket-cost-generated");
let ticketGeneratedEl = document.querySelector(".ticket-generated");

// aggiungo un evento al click del button #user-generate
userGenerateEl.addEventListener("click", function(){

if (userAgeEl.value < 18) {
    discount20 = ( userTripKmEl.value * priceKm ) / 100 * 20;
    ticketPrice = userTripKmEl.value * priceKm - discount20;
    offerEl.innerHTML = "Sconto 20%";
    
} else if (userAgeEl.value >= 65) {
    discount40 = ( userTripKmEl.value * priceKm ) / 100 * 40;
    ticketPrice = userTripKmEl.value * priceKm - discount40;
    offerEl.innerHTML = "Sconto 40%";

} else {
    ticketPrice = userTripKmEl.value * priceKm;
    offerEl.innerHTML = "Biglietto Standard";
}

ticketCostEl.innerHTML = ticketPrice.toFixed(2) + "€";
ticketGeneratedEl.style.display = "block";
nameSurnameEl.innerHTML = userNameSurnameEl.value;

});




