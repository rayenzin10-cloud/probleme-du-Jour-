// 1- Crée une fonction qui prend un tableau et retourne le nombre d’éléments pairs avec une boucle while.

function tabnobmnre(tab){
    var i=0;
    var s=0;
    while(i<tab.length){
        if(tab[i]%2===0){
            s=s+1;
        }
        i++;
    }return s;
}
tabnobmnre([12,11,10])

// 2- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments en ordre inverse avec une boucle for.

function tabinverse(tab){
    
    
    for(var i=tab.length-1;i>=0;i--){
        var s=Array.map(tab[i])
        


    }
    return s;
}
tabinverse([12,11,10])

// 3- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant seulement les nombres impairs avec une boucle while.

function nombreimpaire(tab){
    var t=[];
    var i=0;

    while(i<tab.length){
        if(tab[i]%2!==0){
            t.push(tab[i]);

        }

    }return t;
}
nombreimpaire([1,2,3,5,,10])

// 4- Crée une fonction qui prend un tableau et retourne le nombre d’éléments positifs avec une boucle while.

function elementpositif(tab){
    var i=0;
    var s=0;
    while(i<tab.length){
        if(tab[i]>=0){
            s++;

        }i++;
    }return s;
}
elementpositif([-1,-2,0,1,3])

// 5- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments à l’index pair avec une boucle for.

function tabpair(tab,index){
    var t=new Array();
    for(var i=0;i<=tab.length;i++){
        if(i%2===0){
            t.push(t[i]);
        }
        


    }
    return t;
}
