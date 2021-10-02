import cogentCharacterSheet from "../../../systems/cogent/module/sheets/cogentCharacterSheet.js"
import * as Dice from "../../../systems/cogent/module/dice.js";

export default class extCogentCharacterSheet extends cogentCharacterSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "modules/extCogent/templates/sheets/character-sheet.hbs",
            classes: ["cogent", "sheet", "character"]
        });
    }
    
    getData() {
        const data = super.getData()
        data.data.extVocations = data.items.filter(function(item) {return item.data.type == "vocation"})
        return data;
    }

    activateListeners(html) {
        html.find(".ext-cogent-sroll").click(this._extCogentSkillRoll.bind(this));
        super.activateListeners(html);
    }

    _extCogentSkillRoll(event) {
        let att = this.actor.data.data.attributes;
        let parent = event.currentTarget.dataset.attribute;
        let parentValue = "0";
        if(parent == "CBT") {return;}
        else if(parent == "STR") {parentValue = att.str.value;}
        else if(parent == "REF") {parentValue = att.ref.value;}
        else if(parent == "INT") {parentValue = att.int.value;}
        else if(parent == "CHA") {parentValue = att.cha.value;}
        let base = 3+parseInt(event.currentTarget.dataset.value)+parseInt(parentValue)+parseInt(event.currentTarget.dataset.pvalue);
        Dice.rollCheck({
            actorData: this.actor.data.data,
            skillTotal: base,
            destiny: event.shiftKey,
            title: event.currentTarget.dataset.skill,
            additional: ""
        })
        super._render(false, this);
    }
}