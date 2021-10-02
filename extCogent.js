import extCogentCharacterSheet from "./sheets/extCogentCharacterSheet.js"
import extCogentItemSheet from "./sheets/extCogentItemSheet.js"

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "modules/extCogent/templates/partials/character/assist-block.hbs",
        "modules/extCogent/templates/partials/character/skill-block.hbs",
        "modules/extCogent/templates/partials/character/vocation-sheet.hbs"
    ];
    return loadTemplates(templatePaths);
}

Hooks.once("init",function() {
    console.log("Ext Cogent | Initializing Cogent Extended Character Sheet");
    Actors.registerSheet("extCogent", extCogentCharacterSheet, {makeDefault: true});
    Items.registerSheet("extCogent", extCogentItemSheet, {makeDefault: false});
    preloadHandlebarsTemplates();
})