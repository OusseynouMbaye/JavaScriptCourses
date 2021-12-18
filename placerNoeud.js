var baliseDiv = document.createElement("div");


// add image
var img = document.createElement("img");
img.src = "./images/logo.png";
img.style = "width:100px;border:1px solid black;";
var src = document.querySelector("body"); //document.querySelector("#partie2");
//apenchild :permet d'ajouter un noeud a la fin d'un autre element
src.appendChild(img);

/****permet d'inserer le hr avant la photo */
var baliseHr = document.createElement("hr");
src.appendChild(baliseHr); // add la baslie hr apres l'image
//baslise insert before
src.insertBefore(baliseHr,img) // add la balise hr avant l'image

//insertAdjacentHTML : methode qui va inserer un h2 apres le h2 de la partie 1
var methodeInsertAdjacentHtml =  document.querySelector("#partie1 h2").
                                insertAdjacentHTML('afterend','<h2>methode witth insert adjacent html</h2>');

//insertAdjacentElement : methode qui inserer paler l'image juste apres le
var methodeInsertAdjacentElement =  document.querySelector("#partie2").insertAdjacentElement('beforeend',img);
document.querySelector("#partie2").appendChild(img);

var balsieP = document.createElement("p");
balsieP.innerHTML = "Voici un texte";
document.querySelector("#partie2").insertAdjacentElement("beforebegin",balsieP)