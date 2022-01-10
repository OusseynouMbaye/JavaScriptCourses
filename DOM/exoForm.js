var monForm = document.createElement("form");

var contenu ="<label for=''>Quel est votre ?</label>\n";
contenu += "<input type='number' name='age'>\n";
contenu += "<input type='submit' value='Valider'> \n";


monForm.innerHTML = contenu;
// document.querySelector("#partie3").appendChild(monForm);
document.querySelector("#partie3").insertAdjacentElement("beforebegin",monForm);

var urlParams =  new URLSearchParams(window.location.search); // recupere donnes url
var age = urlParams.get('age');
var balsieP = document.createElement("p");
if(age !== null){
    balsieP.innerHTML = "L'age est de " + age + " ans";
    // console.log(age)
    monForm.insertAdjacentElement("afterend", balsieP);
}
