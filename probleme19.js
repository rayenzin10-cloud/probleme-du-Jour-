// commonCharacters:
/**
 *
 * Écrire une fonction qui prend deux chaînes de caractères en arguments
 * et retourne une chaîne contenant les caractères présents dans les deux chaînes
 * (sans duplication), dans l’ordre où ils apparaissent dans `a`.
 * N’oubliez pas d’ignorer les espaces et les caractères déjà rencontrés !
 *
 * Exemple : commonCharacters('acexivou', 'aegihobu')
 * Retourne : 'aeiou'
 *
 * Doit retourner null s’il n’y a aucun caractère en commun.
 *
 *
 */
var commonCharacters = function (string1, string2) {
  chaine3 = "";
  ch1 = string1.replace(" ", "");
  ch2 = string2.replace(" ", "");
  for (i of ch1) {
    if (ch2.includes(ch1[i]))
      chaine3 += ch[i];

  }
  return chaine3;
};
