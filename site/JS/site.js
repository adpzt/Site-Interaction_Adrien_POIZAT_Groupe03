"use strict";

let boxGauche = document.getElementById("imageg1");
boxGauche.addEventListener('click', tourneImage)
function tourneImage() {
    let sourceImage = boxGauche.getAttribute("src")
    switch (sourceImage) {
        case "Image/khalilaylow.png":
            boxGauche.src="Image/kgauche2.png"; 
            break;

        case "Image/kgauche2.png":
            boxGauche.src="Image/kgauche3.png";
            break;

        case "Image/kgauche3.png":
            boxGauche.src="Image/khalilaylow.png";
            break;
    }
}

let boxDroite = document.getElementById("imaged1");
boxDroite.addEventListener('click', tourneImage2)
function tourneImage2() {
    let sourceImage2 = boxDroite.getAttribute("src")
    switch (sourceImage2) {
        case "Image/rounhaayvnnis.png":
            boxDroite.src="Image/rdroite2.png"; 
            break;

        case "Image/rdroite2.png":
            boxDroite.src="Image/rdroite3.png";
            break;

        case "Image/rdroite3.png":
            boxDroite.src="Image/rounhaayvnnis.png";
            break;
    }
}

const overlay = document.querySelector('.overlay');
const menu = document.getElementById('menu');
const burgerIcon = document.getElementById("burger-icon")
burgerIcon.addEventListener('click', function(){
    menu.classList.toggle('actif');
    overlay.classList.toggle('visible-overlay')
} )