import { CompanyModel } from "./models/company.model";
import { ToHtml } from "./utils/to-html";

/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */

//Create an instance/objet "a company" of class CompanyModel
const aelion: CompanyModel = new CompanyModel();
aelion.setName("Aelion");
aelion.setAddress("95 Chemin de Gabardie")
aelion.setPostalCode("31200")
aelion.setCity("Toulouse")

//Create an instance/objet "a company" of class CompanyModel
const capgem: CompanyModel = new CompanyModel();
capgem.setName("Cap Gemini");
capgem.setAddress("109 Avenue du Général Eisenhower")
capgem.setPostalCode("31000")
capgem.setCity("Toulouse")


//#PRINT: Pour controle
console.log("Objet Name Company : " + aelion.getName());
console.log("Objet Address : " + aelion.getAddress());
console.log("Objet Postal Code : " + aelion.getPostalCode());
console.log("Objet City : " + aelion.getCity());

console.log("Objet Name Company : " + capgem.getName());
console.log("Objet Address : " + capgem.getAddress());
console.log("Objet Postal Code : " + capgem.getPostalCode());
console.log("Objet City : " + capgem.getCity());

//Envoyer les informations vers la page web
const x = new ToHtml();
x.toPage(aelion);
x.toPage(capgem);

