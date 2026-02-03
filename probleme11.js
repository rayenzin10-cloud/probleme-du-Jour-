// 1-Écris une fonction removeByIndex qui supprime l’élément à l’index donné et retourne le nouveau tableau.

function removeByIndex(tableau,index){
    tableau1=tableau.slice();
    for(var i=0;i<tableau.length-1;i++){
        if(tableau[i]===index){
            tableau1.splice(i,1);

        }
    }return tableau1;

}removeByIndex([10,20,30],20);


// 2-Écris une fonction pick qui prend un objet et un tableau de clés, et retourne un nouvel objet avec seulement ces clés.


function pick(objet,tableau){
    var objet1={};
    for(var cle in tableau){

        if(cle in objet){
            objet1[cle]=objet[cle];
        }
    }return objet1;

        
    }

pick({a:10,b:20,c:30,d:40},["a","b","c"]);


//3- Écris une fonction mostFrequent qui prend un tableau et retourne la valeur qui apparaît le plus souvent dans un tableau.

function mostFrequent(tableau){
    var s=0;
    var valeur=tableau[0];
    while(valeur<tableau.length){
    for(var i=0;i<tableau.length;i++){

        if(valeur===tableau[i]){
            s=s+1;
        }

    }
}

        
    }

mostFrequent([a,b,c]);