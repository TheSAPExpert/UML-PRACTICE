import { FabVehicules } from "/Users/Benjamin/typescript-workspace/Ex_Fabrication voiture/src/Usine/FabVehicules";

export class Moto extends FabVehicules {

    public constructor(id: string) {
        super(id); //constructor explicite. Rappelle la classe parente car settypedalle est definit dans la classe parente. Obligatorire pour constructor de definir une classe parente
        this.setType('Moto');
    }
}

