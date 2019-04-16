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
            $('#button-decrease').removeAttr('disabled');
            $('[role="alert"]').hide();
        }
        if (inputField.val() == maxVal) {
            //Afficher le message maxi atteint
            const deactivate = $('#button-increase');
            $('#button-increase').attr('disabled', 'disabled');
            $('[role="alert"] span.message').html('Vous avez atteint la valeur maximale! ');//all tags that have alert
            $('[role="alert"]').show();
        }
    }
);

/** Gestionnaire d'evenement sur le bouton - (id=decrease-qty) */
$('#button-decrease').on(
    "click", function (event) {
        //Deja je vais lire la valeur du champs siais (input)
        const inputField = $('#quantity');
        console.log('Nouvelle valeur attendue 1:' + inputField.val());

        //Recuperer la valeur min autorisee : data-max=n// .attri recup donne de lattribut objet
        const minVal = parseInt(inputField.attr('data-min'));

        //Introduire la contrainte fonctionnelle: newVal < maxVal... sinon stop
        if (inputField.val() > minVal) {
            //Incrementer la valeur de -1
            let newVal = parseInt(inputField.val()) - 1;
            //Afficher la nouvelle valeur
            inputField.val(newVal);
            $('#button-increase').removeAttr('disabled');
            $('[role="alert"]').hide();
        }
        if (inputField.val() == minVal) {
            //Afficher le message mini atteint
            const deactivate = $('#button-decrease');
            $('#button-decrease').attr('disabled', 'disabled'); //affect an attribute and disable it
            $('[role="alert"] span.message').html('Vous avez atteint la valeur minimale! ');
            $('[role="alert"]').show();
        }
    }
);