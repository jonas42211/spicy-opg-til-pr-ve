let mainImage = document.getElementById("mainImage");
let imgOne = document.getElementById("imgOne");
let imgTwo = document.getElementById("imgTwo");
let imgThree = document.getElementById("imgThree");
let imgFour = document.getElementById("imgFour");
 
imgOne.addEventListener("click", function() {
    let temp = mainImage.src;
    mainImage.src = imgOne.src;
    imgOne.src = temp;
});
 
imgTwo.addEventListener("click", function() {
    let temp = mainImage.src;
    mainImage.src = imgTwo.src;
    imgTwo.src = temp;
});
 
imgThree.addEventListener("click", function() {
    let temp = mainImage.src;
    mainImage.src = imgThree.src;
    imgThree.src = temp;
});
 
imgFour.addEventListener("click", function() {
    let temp = mainImage.src;
    mainImage.src = imgFour.src;
    imgFour.src = temp;
});