

function each(tab, func) {
  for (var i = 0; i < tab.length; i++) {
    func(tab[i], i);
  }
}

function map(array, func) {
  var result = [];
  each(array, function (el, i) {
    result.push(func(el, i));
  });
  return result;
}


// 1 - Écrire une fonction qui prend un tableau de nombres et retourne un tableau où chaque nombre est augmenté de 10 % en utilisant map.
function nombre_augmente(nombres) {
  return map(nombres, function (n) {
    return n + (n / 10);
  });
}
nombre_augmente([10, 20, 30, 40])

// 2 - Écrire une fonction qui prend un tableau de phrases et retourne un tableau contenant le nombre de lettres de
//  chaque phrase (sans compter les espaces) en utilisant each .

function phrase(phrases) {
  var tab1 = [];

  each(phrases, function (n, i) {

    tab1.push(n.replace(/\s/g, '').length);
  });
  return tab1;
}
phrases(["rayen zinoubi", "dev"])

// 3 - Écrire une fonction qui prend un tableau de nombres et affiche la moyenne de tous les nombres en utilisant each .

function moyenne(nombres) {

  var s = 0;
  var m = 0;
  each(nombres, function (n) {
    s = s + n;


  });
  return m = s / nombres.length

}
moyenne([10, 12, 8, 14])
// 4 - Écrire une fonction appelée agesEnMinutes qui
//  prend en paramètre un tableau d’objets et
//  retourne un nouveau tableau d’objets après avoir converti les âges de années en minutes
//  en utilisant map.
// 
//  var personnes = [{
//        nom: {
//              prenom: 'Majd',
//            secondPrenom: 'Eddin',
//      },
//       age: 30
//       }, {
//       nom: {
//             prenom: 'Fatima',
//             nomFamille: 'Himmamy'
//        },
//        age: 26
//        }, {
//        nom: {
//              prenom: 'Sahar',
//              secondPrenom: 'MHD'
//        },
//        age: 27
//        }, {
//        nom: {
//              prenom: 'Nour',
//              secondPrenom: 'Eddin',
//        },
//        age: 15
//        }, {
//        nom: {
//              prenom: 'Ahmad',
//              nomFamille: 'Awad'
//        },
//        age: 33
//  }];
// 


function agesEnMinutes(personnes) {
  return map(personnes, function (n) {
    return n.age * 365 * 24 * 60;
  });
}
var personnes = [{
  nom: {
    prenom: 'Majd',
    secondPrenom: 'Eddin',
  },
  age: 30
}, {
  nom: {
    prenom: 'Fatima',
    nomFamille: 'Himmamy'
  },
  age: 26
}, {
  nom: {
    prenom: 'Sahar',
    secondPrenom: 'MHD'
  },
  age: 27
}, {
  nom: {
    prenom: 'Nour',
    secondPrenom: 'Eddin',
  },
  age: 15
}, {
  nom: {
    prenom: 'Ahmad',
    nomFamille: 'Awad'
  },
  age: 33
}];
agesEnMinutes(personnes)