import { Paintable } from "./paintable-interface";
import { Comparable } from "./comparable-interface";

export abstract class dalleFactory implements Paintable, Comparable<dalleFactory> {
    /**
     * @var string Libelle du type de dalle a produire
     */
    protected typeDalle: string;

    /**
     * Methode abstraite: impose les concepteurs de dalles a definir dans leurs classes metiers la methode dessiner()
     */
    public abstract dessiner(): void;

    public setTypeDalle(type: string) {
        this.typeDalle = type;
    }
    public paint(color: string): void {
        console.log('Peinture de ' + this.typeDalle + ' en ' + color);
    }

    public abstract compareTo(object: dalleFactory): number;

}
