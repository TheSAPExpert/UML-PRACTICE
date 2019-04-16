/**
* @name my-counter
* @author benjamin
* @version 1.0.0
* @description Gere in composant de type compteur
**/

/** Gestionnaire d'evenement sur le bouton + (id=increase-qty) */
$('#button-increase').on(
    "click", function (event) {
        //Deja je vais lire la valeur du champs siais (input)
        const inputField = $('#quantity');
        console.log('Nouvelle valeur attendue 1:' + inputField.val());
        //Recuperer la valeur max autorisee : data-max=n// .attri recup donne de lattribut objet
        const maxVal = parseInt(inputField.attr('data-max'));
        //Introduire la contrainte fonctionnelle: newVal < maxVal... sinon stop
        if (inputField.val() < maxVal) {
            //Incrementer la valeur de 1
            let newVal = parseInt(inputField.val()) + 1;
            //Afficher la nouvelle valeur
            inputField.val(newVal);

            //TODO: ne pas oublier dactiver le bouton
        }
        if (inputField.val() >= maxVal) {
            //Afficher le message maxi atteint
            alert("10 est le maximum possible!")
            const deactivate = $('#button-increase');
            $('#button-increase').attr('disabled', 'disabled');


        }
        //TODO: afficher un message si maximum atteint
        //TODO: desactiver le bouton + si maxi atteint
    }
);