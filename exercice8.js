let nom = " Fatima ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";
let nomCorrige = nom.trim();
if (nomCorrige === "") {
    nomCorrige = "Inconnu";
}
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
let ageConverti = parseInt(age);
let ageMessage = (!Number.isNaN(ageConverti) && ageConverti > 0) ? ageConverti + " (valide)": "valeur invalide";
console.log("age : " + ageMessage);
let positionArrobase = email.indexOf("@");
let emailValide = false;
if (positionArrobase > 0) {
    let partieApresArrobase = email.slice(positionArrobase + 1);
    if (partieApresArrobase.includes(".")) {
        emailValide = true;
    }
}
let messageEmail = emailValide ? '"' + email + '" (valide)' : '"' + email + '" (invalide : pas de point après @)';
console.log("email : " + messageEmail);
let scoreNumerique = parseInt(scoreJeu);
if (Number.isNaN(scoreNumerique)) {
    scoreNumerique = 0;
}
console.log('scoreJeu : ' + scoreNumerique + ' (extrait depuis "' + scoreJeu + '")');
let estAdminBool = (estAdmin === "true");
console.log('estAdmin : ' + estAdminBool + ' (attention : Boolean("false") = true, conversion manuelle requise)');
let connexionFinale = derniereConnexion ?? "Jamais connecté";
console.log('derniereConnexion: "' + connexionFinale + '" (valeur par défaut via ??)');
let connexionsNum = Number(nombreConnexions);
let messageConnexions = (connexionsNum === 0)? '"Aucune connexion" (0 après conversion)': connexionsNum;
console.log("nombreConnexions : " + messageConnexions);