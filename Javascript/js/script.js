// message en console
console.log("coucou");
//popup
//alert("Vous avez été hacké !");

boutton = document.querySelector("#monbouton");

boutton.addEventListener("click",function (){
    //alert("Click ! click !");
    document.querySelector("#para").style.color='blue';
    document.querySelector("h1").style.display="none";
    document.querySelector("img").style.display="block";
});

image = document.querySelector("img");
image.addEventListener("mouseover", function () {
    image.style.display= "none";

});




