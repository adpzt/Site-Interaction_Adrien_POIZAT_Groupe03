"use strict";

let email2Input = document.getElementById("email2");
let email2Error = document.getElementById("emailError");
let pseudoInput = document.getElementById("pseudo");
let pseudoError = document.getElementById("pseudoError");
let passwordInput = document.getElementById("mdp2");
let passwordError = document.getElementById("mdpError");

let form2 = document.querySelector('.boxFormulaire2');
form2.addEventListener('submit', function (event) {
    event.preventDefault(); 
    validateEmail()
    validatePseudo()
    validatePassword()
})

function validateEmail() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email2Input.value)) {
        email2Error.textContent = '';
        email2Error.classList.remove('show');  // Cacher le message d'erreur
        return true;  // Mot de passe valide
    } else {
        email2Error.textContent = "L'E-mail doit être valide";
        email2Error.classList.add('show');  // Afficher le message d'erreur
        return false;  // Mot de passe invalide
    }
}

function validatePseudo() {
    let pseudoRegex = /^\S{5,}$/;  // Au moins 5 caractères, pas d'espaces

    if (pseudoRegex.test(pseudoInput.value)) {
        pseudoError.textContent = '';
        pseudoError.classList.remove('show');  // Cacher le message d'erreur
        return true;  // Pseudo valide
    } else {
        pseudoError.textContent = "Le pseudo doit contenir 5 caractères et ne pas contenir d'espaces";
        pseudoError.classList.add('show');  // Afficher le message d'erreur
        return false;  // Pseudo invalide
    }
}

function validatePassword() {
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;

    if (passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = '';
        passwordError.classList.remove('show');  // Cacher le message d'erreur
        return true;  // Mot de passe valide
    } else {
        passwordError.textContent = "Le mot de passe doit contenir 6 caractères dont : une majuscule, une minuscule et un caractère spécial";
        passwordError.classList.add('show');  // Afficher le message d'erreur
        return false;  // Mot de passe invalide
    }
}

    let darkModeButton = document.querySelector('button');
    let fondContainer = document.querySelector('.fond');
    let footer = document.querySelector('footer');

    darkModeButton.addEventListener('click', function () {
        fondContainer.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
})
