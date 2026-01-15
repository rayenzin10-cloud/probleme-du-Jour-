
// 1- Crée une fonction qui prend une heure (0–23) et retourne :
// "matin" si < 12
// "après-midi" si entre 12 et 18
// "soir" si > 18

function heure(h){
    if(h<12){
        return "matin";
    }else if((h<=18)&&(h>=12)){
        return "aprés-midi";
    }else if(h>18){
        return"soir"
    }
    return "heure incorrect"

}
heure(14);
heure(8);


// 2- Crée une fonction qui prend un score et retourne :
// "excellent" si score >= 90
// "bon" si score >= 70
// "moyen" si score >= 50
// "faible" sinon

function score(s){
if(s>=90){
        return "exellent";
    }else if(s>=70){
        return "bon";
    }else if(s>=50){
        return"moyen"
    }
    return "faible"
}
score(85);
score(100);

// 3- Crée une fonction qui prend trois nombres et retourne le **plus petit** des trois

**sans utiliser Math.min**

function pluspetit(n1,n2,n3){
    if((n1<n2)&&(n1<n3)){
        return n1;
    }if((n2<n1)&&(n2<n3)){
        return n2;
    }else if((n3<n2)&&(n3<n1)){
        return n3;
    }
    return "faible"

}
pluspetit(10,2,30);
pluspetit(10,20,30);
pluspetit(100,20,30);