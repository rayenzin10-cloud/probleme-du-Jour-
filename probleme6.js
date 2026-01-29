

// 1- Écris une fonction factorielleN qui calcule la factorielle de n avec une boucle while.
function factorielle(n){
    var s=1;
    var compteur=1;
    while(compteur<=n){
        s=s*compteur;
        compteur++;
    }
    return s;
}
factorielle(4);


// 2- Écris une fonction afficheMultiplesDe3 qui prend un nombre n et affiche tous les multiples de 3 de 0 jusqu’à n.

function afficheMultiplesDe3(n){
    
    var compteur=0;
    while(compteur<=n){
        if(compteur%3===0){
        console.log(compteur);
    }compteur++;
    }
    
}
afficheMultiplesDe3(6);

// 3- Écris une fonction compteVoyelles qui prend une chaîne de caractères et compte le nombre de voyelles avec une boucle while.

function compteVoyelles(ch){
    var s=0;
    var compteur=0;
    while(compteur<ch.length){
        if(ch.charAt(compteur)==="a" || ch.charAt(compteur)==="e" || ch.charAt(compteur)==="y" || ch.charAt(compteur)==="i" || ch.charAt(compteur)==="o" || ch.charAt(compteur)==="u"){
        s=s+1;
    }compteur++;
    } return s;
    
}
compteVoyelles("rayen");