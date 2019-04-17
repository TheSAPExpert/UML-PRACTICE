export class CompanyModel {    // export in javascript allows it to be imported in other file
    //#Attributes ////// ALWAYS NAME THEM STARTING WITH LOWER CASE
    private id: number;
    private name: string;
    private address: string;
    private postalcode: string;
    private city: string;

    //#Methodes :
    public constructor(id: number) {
        this.id = id;
    }

    public setId(value: number) {
        if (this.id == null) {
            this.id = value;
        }
    }

    public getId(): number {
        return this.id;
    }


    //Set the xxxx of the company to:...
    public setName(value: string) { //(value:......)=parametre/ set the name of the company
        this.name = value; //"#This. = reference de linstance courante de la classe"
    }
    public setAddress(value: string) { //(value:......)=parametre/ set the name of the company
        this.address = value; //"#This. = reference de linstance courante de la classe"
    }
    public setPostalCode(value: string) { //(value:......)=parametre/ set the name of the company
        this.postalcode = value; //"#This. = reference de linstance courante de la classe"
    }
    public setCity(value: string) { //(value:......)=parametre/ set the name of the company
        this.city = value; //"#This. = reference de linstance courante de la classe"
    }

    //Get xxxx of the comapany
    public getName(): string {
        return this.name;
    }
    public getAddress(): string {
        return this.address;
    }
    public getPostalCode(): string {
        return this.postalcode;
    }
    public getCity(): string {
        return this.city;
    }

    //Format html
    public toString(): string {
        let output: string = '<div class ="col-12">';
        output += '<h2><i class="icon-office">&nbsp</i>' + this.name + '</h2>';
        output += '<i class="icon-location2">&nbsp</i>' + this.address + '<br>';
        output += this.postalcode + '<em>' + this.city + '</em><br><br></div>';
        return output;
    }
}