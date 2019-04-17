import { OutputInterface } from "src/utils/output-interface";
import { CompanyModel } from "../company.model";

export class AllStrategy implements OutputInterface<CompanyModel> {
    public output(companyModel: CompanyModel): JQuery {
        const object: JQuery = $('<div>');

        const title: JQuery = $('<h2>');
        title.html(companyModel.getName());

        // Juste j'ajoute le titre à la div
        title.appendTo(object);

        // C'est parti pour l'adresse
        const address: JQuery = $('<address>');
        address.html(companyModel.getAddress());
        address.appendTo(object);

        /** const postalAddress: JQuery = $('<p>');
        postalAddress.html(companyModel.getAddress());
        postalAddress.appendTo(object); */

        const zipCode: JQuery = $('<span>');
        zipCode.html(companyModel.getZipCode());
        zipCode.appendTo(object);

        const city: JQuery = $('<span>');
        city.html(companyModel.getCity());
        city.appendTo(object);

        /** const wrapper: JQuery = $('<p>');
        zipCode.appendTo(wrapper);
        city.appendTo(wrapper);*/

        return object;
    }
}