// 1-Créer une fonction qui combine ton prénom et ton nom et retourne le résultat avec un espace entre les deux.

function fullname (nom,prenom){
    return prenom+" "+nom;
}
fullname("Zinoubi","Rayen");







// 2-Écris une fonction qui prend deux nombres et retourne la moyenne.
function moyenne(note1,note2){
    return (note1+note2)/2;
}
moyenne(16,17.5);
// 3-Crée une fonction qui prend une chaîne de caractères et retourne le nombre de caractères qu'elle contient.
function nbr_c(ch){
    return ch.length;
}
nbr_c("three alpha");
// 4-Crée une fonction qui retourne la sous-chaîne à partir d'une position donnée jusqu'à la fin.

function sous_chaine(ch,position){
    return ch.slice(position);
}
sous_chaine("chaine de caractéres",9);






