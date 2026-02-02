 // 1 - Écris une fonction nommée removeElement qui prend un tableau et une valeur
 // en paramètres et retourne un nouveau tableau avec la première occurrence
 // de cette valeur supprimée. Si la valeur n’est pas trouvée, retourne le tableau original.
function removeElement(tab,valeur){
    var tab1=tab;
    
    for(var i=0;i<tab.length;i++){
        if(tab[i]===valeur){
            
            tab1.splice(i,1);

        return tab1;
        }return tab;
        }
    

}
removeElement([10,20,30],10);



 // 2 - Écris une fonction appelée reverseStr qui prend une chaîne de caractères
 // en entrée et retourne l’inverse de chaque lettre suivie d’un nombre
 // en commençant par zéro (à résoudre avec une boucle while).
 // exemple : reverseStr('hello'); ==> "o0l1l2e3h4"

 function reverseStr(chaine){
    var i=chaine.length-1;
    var s="";
    var j=0;
    while(i>=0){
        if(j<chaine.length-1){
    s=s+chaine[i]+i
     j++
}
    i--

    }return s;
}
reverseStr("hello");


 // 3- Écris une fonction nommée objKey qui prend un objet en paramètre
 //  et retourne un tableau contenant les clés de l’objet.
 // objKey({name:'ahmed', age:20}) ==> ['name','age']

function objKey(objet){
    var tab=[];
   
    
    tab=Object.keys(objet)
    return tab ;
}
objKey({name:'rayen', age:22});




// 4- Prends un tableau et supprime chaque deuxième élément de ce tableau.
// Garde toujours le premier élément et commence à supprimer à partir de l’élément suivant.
// Exemple :
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther(myArr) ==> ['Keep', 'Keep', 'Keep']


function tableau(tab){
    for(var i=1;i<tab.length;i+=2){
        tab.splice(i,1);
    }return tab;

}
tableau(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']);