document.addEventListener("DOMContentLoaded", function() {
    var boutonMusique = document.getElementById('boutonMusique');
    var musique = document.getElementById('musique');

    // Réglage du volume à 0.5
    musique.volume = 0.3;

    boutonMusique.addEventListener('click', function() {
        if (musique.paused) {
            musique.play();
        } else {
            musique.pause();
        }
    });
});
