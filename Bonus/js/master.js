//Calcolo biglietto treno
let distance, passengerAge, ticketPrice, discountUnder, discountOver, priceUnder, priceOver, message;
const basePrice = "0.21";
const calculate = document.querySelector(".calculate");

calculate.addEventListener("click",

  function () {

    //Chiedere numero di KM da percorrere
    distance = parseInt(prompt("Inserisci qua sotto quanti KM devi percorrere"));

    //Chiedere l'eta' del passeggero
    passengerAge = parseInt(prompt("Inserisci qua sotto quanti anni hai"));

    //Il prezzo e' definito in base ai KM (0.21€ al KM)
    ticketPrice = basePrice * distance;

    // Variabili dello sconto applicato
    discountUnder = ((ticketPrice / 100) * 20);
    discountOver = ((ticketPrice / 100) * 40);

    // //Calcolo costo biglietto scontato
    priceUnder = (ticketPrice - discountUnder);
    priceOver = (ticketPrice - discountOver);

    //Alert sconto ricevuto
    if (passengerAge < 18) {
      alert("Hai diritto ad uno sconto del 20% ovvero: " + (discountUnder.toFixed(2)) + " €");
      message = `Il prezzo del tuo biglietto scontato è di: ${priceUnder.toFixed(2)} €`;

    } else if (passengerAge > 17 && passengerAge < 66) {
      message = `Il costo del tuo biglietto è di: ${ticketPrice.toFixed(2)} €`;

    } else if (passengerAge > 65) {
      alert("Hai diritto ad uno sconto del 40% ovvero: " + (discountOver.toFixed(2)) + " €");
      message = `Il prezzo del tuo biglietto scontato è di: ${priceOver.toFixed(2)} €`;
    }

    document.getElementById('pricing').innerHTML = message;
  }
);


