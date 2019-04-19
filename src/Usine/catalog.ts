import { FabVehicules } from "./FabVehicules";
import { Car } from "./voiture";

export class Catalog {
    private catalog: Array<FabVehicules> = new Array<FabVehicules>();


    //Method to add a vehicule to the catalog. Must add in main when creating a new vehicle.
    public add(vehicule: FabVehicules): Catalog {
        this.catalog.push(vehicule);
        return this;
    }

    public catalogue(): string {
        let listing: string;

        this.catalog.forEach((vehicle) => {
            if (vehicle instanceof Car) {
                listing += 'Car ';
            } else {
                listing += 'Moto ';
            }
            listing += vehicle.getType() + ' Prix catalogue : ' + vehicle.getSalePrice() + '\n';
        });
        return listing;
    }

    public getTotalProfit(): number {
        let marge: number = 0;
        this.catalog.forEach((vehicle) => {
            marge += vehicle.getProfitVehicule();
        });
        return marge;
    }

    public getTotalSales(): number {
        let sales: number = 0;
        this.catalog.forEach((vehicle) => {
            sales += vehicle.getSalePrice();
        });
        return sales;
    }
}