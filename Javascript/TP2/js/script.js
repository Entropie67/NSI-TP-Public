
var perso1 = 0;
var perso2 = 0;
var perso3 = 0;
function action(){
    perso1++;
    personnageID =  this.getAttribute('id')
    console.log("compteur",);
    alert("Tu as cliqué sur " + personnageID);
}

bouttons = document.querySelectorAll(".vote");
for (let i=0; i<3; i++){
    bouttons[i].addEventListener("click", action);
}

