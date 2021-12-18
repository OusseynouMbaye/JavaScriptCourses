/***** remove child******/
// va remove la partie 2
// document.querySelector("#partie2").remove(); 
 
// var parties = document.querySelectorAll(".partie");

// for (let i = 0; i < parties.length; i++) {
//   parties[i].remove();
// }

/***** remove child******/
var pPartie2 = document.querySelector("#partie2 p");
var partie2 = document.querySelector("#partie2");
// partie2.removeChild(pPartie2);

/***** replace child******/
var img  =  document.querySelector("img");
img.src = "./images/logo.png";
img.style = "width:100px";
partie2.replaceChild(img,pPartie2);