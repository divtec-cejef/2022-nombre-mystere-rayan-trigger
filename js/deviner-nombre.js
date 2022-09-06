/**
* Jeu du nombre mystère
* @author  Rayan Rondez
* @version 0.1
* @since   2022-08-30
*/
const MAX_VAL = 100;
const MIN_VAL = 1;
// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';
    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let nbMystere = tireNombre(MIN_VAL, MAX_VAL);
    let mystereTrouver = false;
    let nbEssais = 0;
    do{
    let reponse = prompt('Le nombre à deviner est de 1 à 100');
    nbEssais += 1;
        if (reponse > nbMystere){
            alert('C´est moins !');
        }else if (reponse < nbMystere){
            alert('C´est plus !');
        }
        else {
            alert(`Vous avez trouvé après ${nbEssais} d´essais`);
            mystereTrouver = true;
        }
    }while(mystereTrouver === false);
}()); // main IIFE
