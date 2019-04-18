export abstract class dalleFactory {
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

}