import { dalleFactory } from "/Users/Benjamin/typescript-workspace/uml-practice/src/geometrie/dalleFactory";

export class Cercle extends dalleFactory {
    private diametre: number = 200;
    private whatKind: string;

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

    public compareTo(object: Cercle): number {
        return this.whatKind === object.whatKind ? 0 : -1; //operateur ternaire (3) si repoonse oui alors 0 else -1.
    }
}