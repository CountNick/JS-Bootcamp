// Opdracht 5.1 - Flattening


// Source: https://medium.freecodecamp.org/reduce-f47a7da511a9

// Array containing multiple arrays
var arrays = [[1, 2, 3], [4, 5], [6]];

// reduce function
var sum = arrays.reduce( function(total, amount){
    
    return total.concat(amount);
  
}, []);

// Log variable with reduce funtion
console.log(sum);

