import { Paintable } from "./paintable-interface";

export class Table implements Paintable {
    private length: number;
    private width: number;

    public constructor(length: number, width: number) {
        this.length = length
        this.width = width;
    }

    // 'void' for a method that mustnt return anything VS 'number' that makes a method have to return something therfore it must have 'return"
    public make(): void {
        console.log('Construction d\`une table L:' + this.length + 'x l : ' + this.width)
    }

    public increaseDimensions(): Array<number> {
        return [this.length * 2, this.width * 2];
    }

    public paint(color: string): void {
        console.log('Peinture de la table en ' + color + ' avec un pistolet de peinture')
    }


}