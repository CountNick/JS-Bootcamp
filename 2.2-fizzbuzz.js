//Opdracht 2.2 FizzBuzz

// loop van 1 tot 100
for(var nummer = 1; nummer <= 100; nummer++){

//lege string variabele om Fizz of Buzz in op te slaan
var woord = "";

    // Als het nummer gedeeld kan worden door 3 en 5 word woord gevult met FizzBuzz
    if(nummer % 2 == 0 && nummer % 5 ==0){

    woord = "FizzBuzz";

    }

    // Als het nummer alleen gedeeld kan worden door 3 word woord gevult met Fizz
    else if(nummer % 3 == 0){

    woord = "Fizz";

    }

    // Als het nummer alleen gedeeld kan worden door 5 word woord gevult met Buzz
    else if(nummer % 5 == 0){

    woord = "Buzz";    

    }


// De or operator checkt of de linkerkant, in dit geval woord true is, als dit zo is word woord laten zien bij false komt de default waarde te zien: nummer
console.log(woord || nummer);

}