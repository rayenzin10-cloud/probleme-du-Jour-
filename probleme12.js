function each(tab,func){
    for(var i=0;i<tab.length;i++){
        func(tab[i],i);
    }
}
// 1 - Écrire une fonction qui prend un tableau de chaînes et retourne un tableau contenant la longueur de chaque chaîne.
function longeurchaine(chaines){
    var tab1=[];
    each(chaines,function(n){
        tab1.push(n.length);

    });
    return tab1;
}
longeurchaine(["rayen","zinoubi"])

// 2 - Écrire une fonction qui prend un tableau de chaînes et une lettre, et retourne un tableau contenant uniquement les chaînes qui contiennent cette lettre.
function chaine(chaines,lettre){
    var tab1=[];
    each(chaines,function(n){
        if(n.includes(lettre)){
        tab1.push(n);
        }
    });
    return tab1;
}
chaine(["rayen","zinoubi","ray","zin"],"a")

// 3 -Écrire une fonction qui prend un tableau d’objets représentant des étudiants et retourne un tableau ne contenant que les noms.
function objet(objet){
    var tab1=[];
    each(objet,function(n){
        
        tab1.push(n.nom);
        
    });
    return tab1;
}
objet([{nom:"rayen",prenom:"zinoubi"},{nom:"ray",prenom:"zin"},{nom:"r",prenom:"z"}])

//4-Écrire une fonction qui prend un tableau de tableaux de nombres et retourne la somme de tous les nombres.

function somme(tableau){
    var s=0;
    each(tableau,function(n){
        s=s+n;
        
        
    });
    return s;
}
objet([1,2,3],[2,3],[,1,3,2])
  
