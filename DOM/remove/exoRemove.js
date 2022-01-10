imgToDelete = document.querySelector("img");
console.log(imgToDelete);
imgToDelete.remove()

var divToAdd = document.createElement("div");

var texte = "un texte \n";
divToAdd.innerHTML = texte;
var main = document.querySelector("main");
main.replaceChild(divToAdd, document.querySelector("main h1"))
