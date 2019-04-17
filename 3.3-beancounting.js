//Opdracht 3.3 Bean Counting

// Aanmaken van functie die aantal B's telt
function countBs(woord){

    console.log(countChar(woord,"B"));
}

// Aanmaken van functie die aantal letters telt van opgegeven woord
function countChar(woord, karakter){

    //leeg variabele om het aantal keer dat een letter voorkomt in bij te houden
    var letterTeller = 0;

    // Deze loop gaat het aantal letter af dat in het opgegeven woord zitten
    for(var i = 0; i < woord.length; i++){
        
        // Controleert of de letter die gecheckt moet worden in het woord zit, als dit zo is word deze opgeteld
        if(woord[i] == karakter){
            letterTeller ++;
        }

    }

    // Het aantal keer dat een letter is voorgekomen in het opgegeven woord word naar de console gelogd
    console.log(letterTeller);
}

// Aanroepen functie, met als argument BBC: Laat zien hoe vaak B in het woord zit
countBs("BBC");

// Aanroepen functie, met twee arguments: Laat zien hoe vaak de letter k in kakkerlak zit
countChar("kakkerlak", "k");