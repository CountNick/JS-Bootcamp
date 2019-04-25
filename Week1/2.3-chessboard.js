//Opdracht 2.3 Chessboard


// Lege string om hashtag of een spatie in op te slaan
var schaakbord = "";

// Met deze variabele kan de hoogte en breedte van het schaakbord veranderd worden
var grootte = 8;

// loop om elke keer als 8 is bereikt een linebreak toe te voegen
for(var y = 1; y <= grootte; y++){

    //loop om een horizontale lijn te vullen
    for(var x = 1; x <= grootte; x++){

        //Als de waarde van x en y samen te delen is door 2 voeg dan een hashtag toe aan schaakbord
        if((x + y) % 2 == 0 ){

            schaakbord += "#";

        }

        //Als de waarde van x en y samen niet te delen is door 2(oneven nummer) voeg dan een spatie toe aan schaakbord
        else{

            schaakbord += " ";
    
        }

}

//start volgende iteratie op new line
schaakbord += "\n";

}

//laat gevulde waarde van schaakbord in console zien
console.log(schaakbord);

