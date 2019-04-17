export interface OutputInterface<T> {
    // méthode output objet type inconnu T, objet de type JQUery
    output(object: T): JQuery;
}