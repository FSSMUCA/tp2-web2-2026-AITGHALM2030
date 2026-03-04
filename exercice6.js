let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;
let variables = [
    ["nom", nom],
    ["age", age],
    ["ville", ville],
    ["score", score],
    ["actif", actif]
];
console.log("=== Partie A : opérateur ?? ===");
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0];
    let valeur = variables[i][1];
    console.log(nomVar + " ?? \"valeur par défaut\" -> " + (valeur ?? "valeur par défaut"));
}
console.log("=== Partie B : opérateur || ===");
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0];
    let valeur = variables[i][1];
    console.log(nomVar + " || \"valeur par défaut\" -> " + (valeur || "valeur par défaut"));
}
console.log("=== Partie C : comparaison ===");
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0];
    let valeur = variables[i][1];
    let resultatNullish = valeur ?? "valeur par défaut";
    let resultatOr = valeur || "valeur par défaut";
    if (resultatNullish === resultatOr) {
        console.log(nomVar + "   : ?? et || -> même résultat");
    } else {
        console.log(nomVar + "   : ?? et || -> résultat différent");
    }
}