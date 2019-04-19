import { dalleFactory } from "./dalleFactory";

export class Triangle extends dalleFactory {
    private whatKind: string = 'Isocele';

    public constructor() {
        super();
        this.setTypeDalle('Triangulaire');
    }

    public whatkind(kind: string) {
        this.whatKind = kind
    }

    public dessiner(): void {
        this.typeDalle = 'Triangle'
        console.log('Je suis un : ' + this.typeDalle);
        console.log('De type ' + this.whatKind);
    }

    public compareTo(object: Triangle): number {
        return this.whatKind === object.whatKind ? 0 : -1; //operateur ternaire (3) si repoonse oui alors 0 else -1.
    }
}