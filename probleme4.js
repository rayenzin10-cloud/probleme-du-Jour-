// 1- Crée une fonction qui prend deux nombres et retourne :
// "égaux" s’ils sont identiques
// "différents" sinon
function nombres(n1,n2){
    if(n1===n2){
        return "égaux";
    }
    return "differents"
}
nombres(10,10);
nombres(5,10);




// 2- Crée une fonction qui prend une chaîne et retourne true
// si elle est vide, sinon false
function chaine(ch){
    if(ch===""){
        return true;

    }return false
}
chaine("ch");
chaine("");


// 3- Crée une fonction qui prend une vitesse et retourne :
// "lent" si inférieure à 30
// "normal" si entre 30 et 90
// "rapide" si supérieure à 90
function vitesse(v){
    if(v<30){
        return "lent"

    }else if((v>=30)&&(v<=90)){
        return "normal"

    }else if(v>90){
        return "rapide"

    }return "vitesse incorrect"
}




// 4- Crée une fonction qui prend un nombre et retourne true
// s’il est divisible par 2 OU par 3
// MAIS PAS par les deux en même temps
function divisible(number){
    if((number%2===0)||(number%3===0)){
        return true

    }else if ((number%2!==0)||(number%3!==0)){
        return true
    }return false
}

divisible(2);
divisible(12);
divisible(1);