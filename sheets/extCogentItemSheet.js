import cogentItemSheet from "../../../systems/cogent/module/sheets/cogentItemSheet.js"

export default class extCogentItemSheet extends cogentItemSheet {
    get template() {
        if(this.item.data.type == "misc") {
            return `modules/extcogent/templates/sheets/misc-sheet.hbs`;
        }
        else{
            return super.template;
        }
    }
    getData() {
        const data = super.getData();
        return data;
    }
}