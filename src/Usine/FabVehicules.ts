import { Car } from "./voiture";
import { Moto } from "./moto";

export abstract class FabVehicules {
    /**
     * @var string Libelle du type de vehicule a produire
     */
    public manufacturer: string;
    public type: string;
    public model: string;
    public salePrice: number;
    protected manufacturingCost: number;
    public profitVehicule: number;
    protected CoeffMargin: number = 1.7;


    /**
     * Methode abstraite: impose les concepteurs de dalles a definir dans leurs classes metiers la methode dessiner()
     */
    public constructor(id: string) {
        this.model = id;
    }

    public setType(id: string) {
        this.type = id;
        console.log('Vehicle is a : ' + this.type + '.');
    }

    public setManufacturer(id: string) {
        this.manufacturer = id;
        console.log('The manufacturer is : ' + this.manufacturer + '.');
    }

    public setModel(): void {
        this.model = this.model;
        console.log('The model is : ' + this.model);
    }

    public setSalePrice(): void {
        this.salePrice = this.manufacturingCost * this.CoeffMargin;
        console.log('The sale price is : ' + this.salePrice + ' euros.');
    }

    public setManufacturingCost(cost: number) {
        this.manufacturingCost = cost;
        console.log('The manufacturing cost is : ' + this.manufacturingCost + ' euros.');
    }

    public setProfitVehicule(): void {
        this.profitVehicule = this.salePrice - this.manufacturingCost;
        console.log('This profit margin is : ' + this.profitVehicule + ' euros.');
    }

    public getManufacturingCost(): number {
        return this.manufacturingCost;
    }

    public getType(): string {
        return this.type;
    }

    public getSalePrice(): number {
        return this.salePrice;
    }

    public getProfitVehicule(): number {
        return this.profitVehicule;
    }
}
