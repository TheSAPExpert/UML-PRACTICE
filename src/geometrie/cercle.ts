import { dalleFactory } from "/Users/Benjamin/typescript-workspace/uml-practice/src/geometrie/dalleFactory";

export class Cercle extends dalleFactory {
    private diametre: number = 200;

    public constructor() {
        super(); //constructor explicite. Rappelle la classe parente car settypedalle est definit dans la classe parente. Obligatorire pour constructor de definir une classe parente
        this.setTypeDalle('Circulaire');
    }

    public dessiner(): void {
        this.typeDalle = "Cercle";
        console.log('Je suis un ' + this.typeDalle);
        console.log('Et j\'ai un diametre de : ' + this.diametre);
    }

    public setDiametre(diametre: number): void {
        this.diametre = diametre;
    }
}