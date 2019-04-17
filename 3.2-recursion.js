//Opdracht 3.2 Recursion


// Aanmaken van de functie waar een argument aan mee kan worden gegeven
function isEven(nummer){

    //checkt of het opgegeven nummer gelijk is aan 0
    if(nummer == 0){
       
        return true;
    
    }
    
    //checkt of het nummer gelijk is aan 1
    else if (nummer == 1){

        return false;
    }

    //checkt of het nummer een negatieve waarde heeft
    else if (nummer < 0 ){

        return isEven(-nummer);

    }

    else{
        
        return isEven(nummer -2);
    
    }
}

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));