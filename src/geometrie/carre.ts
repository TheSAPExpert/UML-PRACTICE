import { dalleFactory } from "./dalleFactory";

export class Carre extends dalleFactory {
    //att
    private sideLength: number = 200; //default value

    //meth
    public constructor() {
        super();
        this.setTypeDalle('Carre');
    }

    public dessiner(): void {
        this.typeDalle = 'Carré'
        console.log('Je suis un : ' + this.typeDalle);
        console.log('J\`ai un cote de ' + this.sideLength);

    }
    public setSideLength(side: number): void { //side = new lenght to be made
        this.sideLength = side;
    }
    public compareTo(object: Carre): number {
        return this.sideLength === object.sideLength ? 0 : -1; //operateur ternaire (3) si repoonse oui alors 0 else -1.
    }
}