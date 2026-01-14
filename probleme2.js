// 1- Crée une fonction qui prend un nombre et retourne "positif", "négatif" ou "zéro" selon sa valeur.

function nombre(number){
    if(number>0){
        return "positif";
    }else if(number===0){
        return "zero";
    }else{
        return "negatif";
    }

}
nombre(10);
nombre(0);
nombre(-15);


// 2- Crée une fonction qui prend un nombre et retourne "divisible par 3", "divisible par 5" ou "autre" selon le cas.

function nombred(number){
    if(number%3===0){
        return "divisible par 3";
    }else if(number%5===0){
        return "divisible par 5";
    }else{
        return "autre";
    }

}
nombred(9);
nombred(20);
nombred(4);



// 3- Crée une fonction qui prend deux nombres et retourne le plus grand des deux.

function plusgrand(nombre1,nombre2){
    if(nombre1>nombre2){
        return nombre1;
    }else if(nombre1<nombre2){
        return nombre2;
    }else{
        return "meme valeur";
    }

}
plusgrand(12,15);
plusgrand(12,5);
plusgrand(12,12);
// 4- Crée une fonction qui prend une note (0 à 20) et retourne "réussi" si la note est >= 10, sinon "échoué".
function note(n){
    if(n>=10){
        return "réussi";
    }else {
        return "échoué";
    }
}
note(15);
note(7);