//Opdracht 3.1 Minimum

// Hier word de functie aangemaakt, en er voor gezorgd dat deze twee arguments meeneemt 
function min(nummer,nummer2){

    // De berekening van het minimale nummer van de twee word in een nieuwe variabele gestopt
    var uitkomst = Math.min(nummer,nummer2);
    
    // De uitkomst word naar de console gelogd
    console.log(uitkomst);

}

// De functie word hier aangeroepen, met als als argument de twee nummers waar het minimum over berekent moet worden
min(30, 100);