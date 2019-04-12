import { CompanyModel } from "./models/company.model";
/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */
//Creer une instance de la classe CompanyModel
const aelion = new CompanyModel();
aelion.setName("Aelion");
//Creation dune autre instance de classe. 
const cap = new CompanyModel();
cap.setName("Cap\"Gemini"); //"\"= prime dans un string
//Pour controle
console.log("Objet aelion : " + aelion.getName());
console.log("Objet cap : " + cap.getName());
