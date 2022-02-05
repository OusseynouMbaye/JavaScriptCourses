console.log(trouverLePlusLong("Il faudrait apprendre plus que les autres"));

function trouverLePlusLong(str) {
  words = str.split(" ");
  let longMax = 0;
  for (let i = 0; i < words.length; i++) {
     if (words[i].length > longMax){
         longMax = words[i].length;
     }
  }
  return longMax;
}

