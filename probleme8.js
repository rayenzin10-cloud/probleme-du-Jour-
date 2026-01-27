// 1- Crée une fonction qui prend un nombre et retourne true s’il est pair, sinon false.

function nombrepair_impair(n){
    if(n%2===0){
        return true;
    }return false;

}
nombrepair_impair(4)


// 2- Crée une fonction pour inverser une chaîne donnée avec une boucle for

function inverse_chaine(chaine){
    var chaine2=""
    for(var i=chaine.length-1;i>=0;i--){
        chaine2+=chaine[i];
        
        
    }
    return chaine2;
    

}
inverse_chaine("rayen")


// 3- Crée une fonction pour supprimer le dernier élément d’un tableau et le retourner sans itérer
function tab(tableau){
    tableau.pop();
    return tableau;
    

}
tab([0,1,2,3])



// 4- Crée une fonction pour supprimer le premier élément d’un tableau et le retourner sans itérer

function tab(tableau){
    tableau.shift();
    return tableau;
    

}
tab([0,1,2,3])


// 5- Crée une fonction pour trouver le premier nombre divisible par 3 et 5 entre 1 et 50 avec une boucle while



function divisible(n){
    var i=1;
    while(i<=n){
        if(i%3===0 && i%5===0){
            return i;
        }
        i++;
    }
    
    

}
divisible(50)
