import { CompanyModel } from "./models/company.model";
import { ToHtml } from "./utils/to-html";
import { CompanyRepository } from "./models/company-repository";
import { NameStrategy } from "./models/strategies/name-strategy";
import { NameAndZipStrategy } from "./models/strategies/nameandzip-strategy";
import { AllStrategy } from "./models/strategies/all-strategy";
import { Carre } from "./geometrie/carre";
import { Table } from "./geometrie/table";
import { Cercle } from "./geometrie/cercle";
import { Triangle } from "./geometrie/triangle";
import { Paintable } from "./geometrie/paintable-interface";
import { Car } from "./Usine/voiture";
import { Moto } from './Usine/moto';
import { Catalog } from '/Users/Benjamin/typescript-workspace/uml-practice/src/Usine/catalog'
import { CompanyController } from "./modules/company/company-controller";

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

//Ilustration des classes, heritages et interfaces
//On fait des instance (objet) de la classe, d'abord on importe la classe définissant le carré qu'on range instance grandCarre construite à partir de la classe carré
// Carre c'est la classe (dans tous les cas dans la console il y aura marqué dans la console je suis un carré) grandCarre c'est l'objet on créer un nouvelle objet dans la classe
const grandCarre: Carre = new Carre();
grandCarre.dessiner();

const petitCarre: Carre = new Carre();
//Demander a Robert de refaire de carres a 100
petitCarre.setSideLength(50);
petitCarre.dessiner();

const jeSuisUnCercle: Carre = new Carre();
//Demander a Robert de refaire de carres a 100
jeSuisUnCercle.setSideLength(100);
jeSuisUnCercle.dessiner();

//Je demande a Robert de produire des dalles circulaire de 75
const dalleCirculaire75: Cercle = new Cercle();
dalleCirculaire75.setDiametre(75);
dalleCirculaire75.dessiner();

//Cest bon robert, tu peux lancer la prod de triangles
const dalleTriangulaire: Triangle = new Triangle();
dalleTriangulaire.whatkind('Equilateral');
dalleTriangulaire.dessiner();

//
const laTable: Table = new Table(100, 100);

//Maurice cest toi de jouer, je tenvoie le chariot avec les trucs a peindre
const toCabine: Array<Paintable> = new Array<Paintable>();
toCabine.push(grandCarre); //=append in python...
toCabine.push(petitCarre);
toCabine.push(jeSuisUnCercle);
toCabine.push(dalleCirculaire75);
toCabine.push(dalleTriangulaire);
toCabine.push(laTable);

//Vas-y Maurice.... lets paint it black
toCabine.forEach((Object: any) => {
    Object.paint('Black');
});

//Vehicule Factory
//Create a catalog
const catalogToday: Catalog = new Catalog();

//FAB Car
const BMW_535: Car = new Car('Serie 535');
BMW_535.setManufacturer('BMW');
BMW_535.setModel();
BMW_535.setManufacturingCost(30000);
BMW_535.setSalePrice();
BMW_535.setProfitVehicule();
catalogToday.add(BMW_535);

//FAB Moto
const KAWASAKI_N650: Moto = new Moto('Ninja 650');
KAWASAKI_N650.setManufacturer('Kawasaki');
KAWASAKI_N650.setModel();
KAWASAKI_N650.setManufacturingCost(10000);
KAWASAKI_N650.setSalePrice();
KAWASAKI_N650.setProfitVehicule();
catalogToday.add(KAWASAKI_N650);

//TOTAL SALES/ PROFIT MARGIN
console.log('Total Profit : ' + catalogToday.getTotalProfit() + 'euros.');
console.log('Total Sales : ' + catalogToday.getTotalSales() + 'euros.');

//Je suis content
const companyForm: CompanyController = new CompanyController();