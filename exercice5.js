let nombres = [
    0,
    NaN,
    Infinity,
    -Infinity,
    42,
    3.14,
    Number.MAX_SAFE_INTEGER + 1,-0
];
for (let i = 0; i < nombres.length; i++) {
    let valeur = nombres[i];
    let message;
    if (Number.isNaN(valeur)) {
        message = "INVALIDE";
    } else if (valeur === Infinity || valeur === -Infinity) {
        message = "INFINI";
    } else if (valeur === 0 && 1 / valeur === -Infinity) {
        message = "ZERO NEGATIF";
    } else if (Number.isInteger(valeur) && Number.isSafeInteger(valeur)) {
        message = "ENTIER SUR";
    } else if (Number.isInteger(valeur) && !Number.isSafeInteger(valeur)) {
        message = "ENTIER HORS LIMITES";
    } else {
        message = "DECIMAL";
    }
    console.log(String(valeur) + " -> " + message);
}