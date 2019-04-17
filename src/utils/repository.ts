import { CompanyModel } from "../models/company.model";

/** 
 * On collectionne des infos dans un repositroy
 * @name Repository
 * @desc Classe abstraite definissant une collection d'objets
 * @author Benjamin
 * @version 1.0.0
**/

export abstract class Repository<T>{
    //attribut de type map (=structure qui a pour objet dassocier une cle et une valeur)
    protected repository: Map<number, T> = new Map<number, T>(); //Map cest lattribut qui contiendra reellemetn les infos

    public abstract add(object: T): void;

    public abstract remove(object: T): void;

    public abstract get(id: number): T;

    /**
     * @override
     * @param company 
    */
    public getSize(): number {
        return this.repository.size;
    }
}