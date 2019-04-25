// Opdracht 4.1 - Sum of Range

// Global lege array om nummers in op te slaan
var nummers = [];

// Aanmaken van functie met als parameter start en eind cijfer
function range(start, end){

    // Loop die van het opgegeven start nummer tot het eind nummer loopt
    for(var i = start; i <= end; i++){

        // Elk nummer binnen de loop word in de array gepusht
        nummers.push(i);
        
    }
    

    // De gevulde array word gereturnd zodat deze ook buiten de scope van de functie te zien is
    return nummers;
}

// Aanmaken van functie 
function sum(){

// Lege variabele om de som van de items in de array in op te slaan
var totaal = 0;

// Loop die door de lengte van de array heen loopt
for(var i = 0; i < nummers.length; i++){
    
    // Elk nummer dat in de array zit word bij het totaal variabele opgeteld
    totaal += nummers[i];

}

// Totaal waarde word gereturned
return totaal
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));



