<script>
    $('h1').html("hellojQuerry");

//const monH1 = document.querySelector('h1');
//monH1.innerHTML = 'Hello jQuery natif JS';

//Deactivate previous click
$('.company').on( //.company fait appel a tous les class qui on ce nom
    "click",
    function (event) {
        const theOne = $(this);//l'objet clique
        let removeClass = true;// Par defaut, j'estime qu'il faut retirer la classe

        if (theOne.hasClass('selected')) {
            removeClass = false;
            $(this).children('ul').hide();
        }

        //Supprime pour tout le monde la classe .selected
        $('.company').removeClass('selected');
        $('.company ul').hide();


        //Appliqur sur lelement ce qui doit etre fait
        if (removeClass) {
            $(this).addClass('selected');
            $(this).children('ul').show();
        } else {
            $(this).removeClass('selected');
            $(this).children('ul').hide();
        }
    }
);

//Challenge #1 detecter un click sur le bouton + de l'interface: complete
//Challenge #2 recuperer la valeur du span.value: complete
//Challenge #3 Ajouter 1 a la valeur courance du span value : complete
//Challenge #4 Remplacer le contenu de span.value par la nouvelle valeur

$('.up').on(
    "click", function (event) {
        console.info("Click sur + détecté!");
        //#1,2 :objet qui contient la valeur a incrementer
        const value = $('.value');
        console.log('Valeur courante de span class==value:' + value.html());

        //#3 Ajouter 1 a la valeur courante
        let nextValue = parseInt(value.html());
        if (nextValue < 10) {
            nextValue = nextValue + 1;

        } else {
            nextValue = 10
        }
        console.log('Apres incrementation la valeur devient :' + nextValue);

        //#4 Remplacer la nouvelle valeur sur le html
        value.html(nextValue);
    }
);
$('.down').on(
    "click", function (event) {
        console.info("Click sur + détecté!");
        //#1,2 objet qui contient la valeur a incrementer
        const value = $('.value');
        console.log('Valeur courante de span class==value:' + value.html());

        //#3 Ajouter 1 a la valeur courante
        let nextValue = parseInt(value.html());
        if (nextValue > 1) {
            nextValue = nextValue - 1;
        } else {
            nextValue = 1
        }
        console.log('Apres incrementation la valeur devient :' + nextValue);

        //#4 Remplacer la nouvelle valeur sur le html
        value.html(nextValue);
    }
);
</script>