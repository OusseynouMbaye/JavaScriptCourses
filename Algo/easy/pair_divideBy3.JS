var readline = require("readline-sync");
var nbre = -1;
var essai = 0;
do {
    essai++;
    if (essai > 1){
        console.log("Esai numero: ",essai)
    }
     nbre = readline.questionInt("Sasir un nbre pair et divisible par 3 : ");

     if (nbre % 2 != 0 ) {
        console.log("nbre n'est par pair");
      }
      if (nbre % 3 != 0 ) {
        console.log("nbre pas divisble par 3");
      }
 
    
} while ((nbre % 2 != 0 || nbre % 3 != 0));
console.log(`Le ${nbre} saisi est divisible par 2 et par 3`)
