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
}