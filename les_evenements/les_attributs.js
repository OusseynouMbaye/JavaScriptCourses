function changeColor(partie){
  
    // var partieClick = document.querySelector("#"+partie);
    // // console.log(partieClick);
     partie.classList.toggle('selected')
 
//   console.log(partie)
}
function changement(){
    console.log("chngament effectu/");
}
function clickSurImage(){
    var baliseImg =  document.querySelector('img');
    baliseImg.classList.toggle('border');
}
/*
var cnt=0;
function clicSurparties(){
    cnt=parseInt(cnt)+parseInt(1);
    console.log( " tu clique " + cnt + " fois ")
    var divData=document.getElementById("partie2");
    var p = document.createElement("p");
    p.innerHTML = "Number of Downloads:" + cnt;
    divData.appendChild(p)
}*/