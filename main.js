var baliseDiv = document.createElement("div");


// methode 2: Courement utilise
var contenu = "<p>Paragraphe numero 1 </p>\n";
contenu += "<hr />\n";
contenu += "<p>Paragraphe numero 2 </p>\n";
baliseDiv.innerHTML = contenu;
document.querySelector(".partie p").appendChild(baliseDiv);

// add image
var img = document.createElement("img");
img.src = "./images/logo.png";
img.style = "width:100px;border:1px solid black;";
var src = document.querySelector("body"); //document.querySelector("#partie2");
//apenchild :permet d'ajouter un noeud a la fin d'un autre element
src.appendChild(img);

