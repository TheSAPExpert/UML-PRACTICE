export class CompanyModel {
    //#Methodes : Set the name of the company to:...
    setName(name) {
        this.name = name; //"#This. = reference de linstance courante de la classe"
    }
    //#Methodes :Get the name of the comapany
    getName() {
        return this.name;
    }
}
