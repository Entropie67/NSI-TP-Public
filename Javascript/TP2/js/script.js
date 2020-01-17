
var perso1 = 0;
var perso2 = 0;
var perso3 = 0;
function action(){

    personnageID =  this.getAttribute('id')
    //alert("Tu as cliqué sur " + personnageID);
    switch (personnageID){
        case "CM":
            alert("Tu as choisi Carole");
            perso1++;
            break;
        case "WM":
            alert("Tu as choisi Wanda");
            perso2++;
            break;
        case "BW":
            alert("Tu as choisi Natasha");
            perso3++;
            break;
        default:
            console.log("bug");
    }
    console.log("Résultats :",perso1,perso2,perso3);

}

bouttons = document.querySelectorAll(".vote");
for (let i=0; i<3; i++){
    bouttons[i].addEventListener("click", action);
}

