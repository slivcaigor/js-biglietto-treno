//Calcolo biglietto treno
let distance, passengerAge, ticketPrice, discountUnder, discountOver, newTicketPriceUnder, newTicketPriceOver, priceUnder, priceOver;
const basePrice = "0.21";

//Chiedere numero di KM da percorrere
distance = parseInt(prompt("Inserisci qua sotto quanti KM devi percorrere"));

//Chiedere l'eta' del passeggero
passengerAge = parseInt(prompt("Inserisci qua sotto quanti anni hai"));

//Il prezzo e' definito in base ai KM (0.21€ al KM)
ticketPrice = basePrice * distance;

// Variabili dello sconto applicato
discountUnder = ((ticketPrice / 100) * 20);
discountOver = ((ticketPrice / 100) * 40);

//Alert sconto ricevuto
if (passengerAge < 18) {
  alert("Hai diritto ad uno sconto del 20% ovvero: " + discountUnder + " €");
  console.log("Sconto in €: " + discountUnder);

} else if (passengerAge > 17 && passengerAge < 66) {
  alert("Il costo del tuo biglietto è di: " + ticketPrice + " €");
  console.log("Costo biglietto: " + ticketPrice);

} else if (passengerAge > 65) {
  alert("Hai diritto ad uno sconto del 40% ovvero: " + discountOver + " €");
  console.log("Sconto in €: " + discountOver);
}

//Calcolo costo biglietto scontato
newTicketPriceUnder = (ticketPrice - discountUnder);
newTicketPriceOver = (ticketPrice - discountOver);

//Decimali
priceUnder = (newTicketPriceUnder.toFixed(2));
priceOver = (newTicketPriceOver.toFixed(2));

//Alert sconto applicato
if (passengerAge < 18) {
  alert("Il prezzo del tuo biglietto scontato è di: " + priceUnder + " €");
  console.log("Prezzo biglietto scontato: " + priceUnder + " €");

} else if (passengerAge > 65) {
  alert("Il prezzo del tuo biglietto scontato è di: " + priceOver + " €");
  console.log("Prezzo biglietto scontato: " + priceOver + " €");
}