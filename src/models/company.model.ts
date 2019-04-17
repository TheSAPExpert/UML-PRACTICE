import { OutputInterface } from "../utils/output-interface";
import { AllStrategy } from "./strategies/all-strategy";

export class CompanyModel {    // export in javascript allows it to be imported in other file
    //#Attributes ////// ALWAYS NAME THEM STARTING WITH LOWER CASE
    private id: number;
    private name: string;
    private address: string;
    private zipcode: string;
    private city: string;
    private strategy: OutputInterface<CompanyModel> = new AllStrategy(); //Attribut output interface nomme strategy

    //#Methodes :
    public constructor(id: number) {
        this.id = id;
    }

    //Set the xxxx of the company to:...
    public setName(value: string) { //(value:......)=parametre/ set the name of the company
        this.name = value; //"#This. = reference de linstance courante de la classe"
    }
    public setAddress(value: string) { //(value:......)=parametre/ set the name of the company
        this.address = value; //"#This. = reference de linstance courante de la classe"
    }
    public setZipCode(value: string) { //(value:......)=parametre/ set the name of the company
        this.zipcode = value; //"#This. = reference de linstance courante de la classe"
    }
    public setCity(value: string) { //(value:......)=parametre/ set the name of the company
        this.city = value; //"#This. = reference de linstance courante de la classe"
    }
    public setId(value: number) {
        if (this.id == null) {
            this.id = value;
        }
    }
    public setStrategy(strategy: OutputInterface<CompanyModel>) {
        this.strategy = strategy;
    }

    //Get xxxx of the comapany
    public getName(): string {
        return this.name;
    }
    public getAddress(): string {
        return this.address;
    }
    public getZipCode(): string {
        return this.zipcode;
    }
    public getCity(): string {
        return this.city;
    }
    public getId(): number {
        return this.id;
    }

    //create and use methode output interface
    public useOutputStrategy(): JQuery {
        return this.strategy.output(this);
    }

    //Format html
    public toString(howTo: number): string {
        let output: string :
        if (howTo == 1) {
            output = '<div class ="col-12">';
            output += '<h2><i class="icon-office">&nbsp</i>' + this.name + '</h2>';
            output += '<i class="icon-location2">&nbsp</i>' + this.address + '<br>';
            output += this.zipcode + '<em>' + this.city + '</em><br><br></div>';
            return output;
        } else if (howTo == 2) {

        }
    }
}