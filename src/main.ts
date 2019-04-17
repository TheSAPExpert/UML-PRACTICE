import { CompanyModel } from "./models/company.model";
import { ToHtml } from "./utils/to-html";
import { CompanyRepository } from "./models/company-repository";
import { NameStrategy } from "./models/strategies/name-strategy";
import { NameAndZipStrategy } from "./models/strategies/nameandzip-strategy";
import { AllStrategy } from "./models/strategies/all-strategy";

/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */

// Instancier un 'repository' de companyModel
const companyRepository: CompanyRepository = new CompanyRepository();

// Create an instance/objet "aelion" of class CompanyModel as a new companyModel class with attributes set to...
const aelion: CompanyModel = new CompanyModel(1);//instance=objet dune classe
aelion.setStrategy(new AllStrategy());
aelion.setName("Aelion");
aelion.setAddress("95 Chemin de Gabardie")
aelion.setZipCode("31200")
aelion.setCity("Toulouse")

// Ajoute aelion dans le repo...
companyRepository.add(aelion);

// Create an instance/objet "CapGemin" of class CompanyModel as a new companyModel class with attributes set to...
const capgem: CompanyModel = new CompanyModel(2);
capgem.setStrategy(new AllStrategy());
capgem.setName("Cap Gemini");
capgem.setAddress("109 Avenue du Général Eisenhower")
capgem.setZipCode("31000")
capgem.setCity("Toulouse")

// Ajoute capgem dans le repo...
companyRepository.add(capgem);

//

// #PRINT: Pour controle
console.log("Objet Name Company : " + aelion.getName());
console.log("Objet Address : " + aelion.getAddress());
console.log("Objet Zip Code : " + aelion.getZipCode());
console.log("Objet City : " + aelion.getCity());

console.log("Objet Name Company : " + capgem.getName());
console.log("Objet Address : " + capgem.getAddress());
console.log("Objet Zip Code : " + capgem.getZipCode());
console.log("Objet City : " + capgem.getCity());

// Envoyer les informations vers la page web
const toHtml = new ToHtml();
toHtml.appendToPage(aelion.useOutputStrategy());
toHtml.appendToPage(capgem.useOutputStrategy());