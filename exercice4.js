let tests = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];
let compteur = 0;
for (let i = 0; i < tests.length; i++) {
    let a = tests[i][0];
    let b = tests[i][1];
    let egalSimple = (a == b);
    let egalStrict = (a === b);
    if (egalSimple && !egalStrict) {
        compteur++;
    }
    console.log(String(a) + " == " + String(b) + "  -> " + egalSimple +  "    |   " +  String(a) + " === " + String(b) +   "  -> " + egalStrict);
}
console.log(compteur + " paire(s) où == et === donnent des résultats différents");