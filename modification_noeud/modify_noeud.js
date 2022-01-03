// partie1 = document.querySelector("#partie1");
// console.log(partie1.attributes)
// partie1.style.backgroundColor = "blue";
// partie1.innerHTML = "NEW TEXTE"

var my_form = document.querySelector("form");
my_form.style.backgroundColor = 'grey'
// console.log(my_form.classList.);
// console.log(my_form.attributes);
/**
 * ? Creation du Get
 */
// my_form.method = "GET";
var inputsForm = my_form.querySelectorAll("input");
for (let i = 0; i < inputsForm.length; i++) {
  /**
   * ?  Creation des name des input
   *
   */
  inputsForm[i].name = inputsForm[i].id;
}
/**
 * ? Creation du bouton
 */
var inputSubmit = document.createElement("input");
inputSubmit.type = "submit";
inputSubmit.value = "Valider";
my_form.appendChild(inputSubmit);

// /**
//  * ? Recuperation des donnees
//  */
// var urlParams = new URLSearchParams(window.location.search);

// var nom = urlParams.get("nom");
// var prenom = urlParams.get("prenom");
// /**
//  * ? affichage des donnees
//  */
// var balsieP = document.createElement("p");
// if (prenom !== null && nom != null) {
//   balsieP.innerHTML = "Le prenom est " + prenom + " et le nom " + nom;
//   my_form.insertAdjacentElement("afterend", balsieP);
// }

/**
 * ! Exo 
 */
var parties =  document.querySelectorAll(".partie");
for (let i = 0; i < parties.length; i++) {
    parties[i].classList.remove("partie"); // remove class
    var baliseH2 = parties[i].querySelector("h2")
    baliseH2.style.color = 'green';
    baliseH2.classList = 'border';
    var balisep = parties[i].querySelector("p");
    balisep.style.color = 'blue';
}

