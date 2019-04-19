import { ControllerInterface } from "src/utils/controller-interface";
import { Controller } from './../../utils/controller';

export class CompanyController extends Controller implements ControllerInterface {

    public constructor() {
        super();
        this.loadView();// charge le html company-form est le balance dans le main/index
        this.setListeners(); // fait ca voir plus bas
    }

    public loadView(): void {


        $.get(
            './src/modules/company/view/company-form.html',
            (data: any) => {
                const form: any = $.parseHTML(data), nodeNames = [];
                Controller.app.append(form);
            }
        );
    }

    public setListeners(): void {
        Controller.app.on(
            'keyup',// ecouter les appuis sur les touches du clavier
            '#company', //restreint aux elements qui portent lidentifiant company donc le formulaire
            (event: any): void => this._checkZipCode(event)
        );
    }

    private _checkZipCode(event: any): void {

        const object: JQuery = $(event.target);
        //console.log('Détection de touche ' + object.attr('id'));
        let api: string = 'https://vicopo.selfbuild.fr/cherche/';

        if (object.attr('id') == 'company-zipcode') {
            // Check if value has 5 digits
            if (object.val().toString().length === 5) {
                // Call the API...
                console.log('Call the API with : ' + object.val());
                $.ajax({
                    url: api + object.val(),
                    method: 'get',
                    dataType: 'json',
                    success: (data: any) => {
                        const cities: Array<any> = data.cities;
                        //console.log(JSON.stringify(cities));

                        const liste: Array<string> = cities.map((ville) => {
                            return ville.city;
                        });

                        // Old school before map methode
                        const citiesListing: Array<string> = new Array<string>();
                        cities.forEach((ville) => {
                            citiesListing.push(ville.city);
                        });

                        //Maintenant on doit pouvoir envoyer la liste vers la page html. "=>"Function lambda
                        const docking: JQuery = object.next('div');
                        const HtmlList: JQuery = $('<ul>');
                        liste.forEach((ville) => {
                            let HtmlRow: JQuery = ($('<li>')).html(ville.toString());
                            HtmlList.append(HtmlRow);
                        });
                    },
                    error: (xhr, error) => {
                        // NOOP
                    }
                });
            }
        }
    }
}