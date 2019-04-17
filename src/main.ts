import { CompanyModel } from "./models/company.model";
import { ToHtml } from "./utils/to-html";
/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */

//Create an instance/objet "aelion" of class CompanyModel as a new companyModel class with attributes set to...
const aelion: CompanyModel = new CompanyModel();//instance=objet dune classe
aelion.setId(1);
aelion.setName("Aelion");
aelion.setAddress("95 Chemin de Gabardie")
aelion.setPostalCode("31200")
aelion.setCity("Toulouse")

//Create an instance/objet "CapGemin" of class CompanyModel as a new companyModel class with attributes set to...
const capgem: CompanyModel = new CompanyModel();
capgem.setId(2);
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

//Ecouter le clic dans le document
const clickDetection: any = document.querySelectorAll('.click'); //".click fait reference a tous les elements qui porte la classe "click"
clickDetection.addEventListener( //Gestion des evenement "document.addEventListener"
    'click',
    () => {  //""=>"" veut dire associe moi a cette fonction "()" ca "{}""
        alert('Merci CC!!!!!!!!')
    }
);
