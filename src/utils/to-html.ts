export class ToHtml {
    private static readonly placeholder: string = 'myApp'; //static = referencer une variable qui est static sur pour le projet global pour ne pas le repeter dans chaque classe. Sinon il faudrait faire appel via get/set...

    public toPage(object: any) {
        const htmlPlaceHolder: JQuery = $('[' + ToHtml.placeholder + ']');
        let content: string = htmlPlaceHolder.html();
        content += object.toString();
        htmlPlaceHolder.html(content);
    }
}