//tester mon index.js/index.html
// alert("bonjour");

// Fonctions de manipulation de chaînes :
// Inverse d'une chaine
function inverseChaine(chaine) {
  var s = "";
  for (var i = chaine.length - 1; i >= 0; i--) {
    s = s + chaine[i];
  }
  return s;
}
// console.log(inverseChaine("gftrgdf"));

// **********************************
// compteur de car dans une chaine
function cptCaractere(chaine) {
  return chaine.length;
}

// console.log(cptCaractere("    _/-"));

// *************************************

// majuscule de la première lettre de chaque Mot

function capitalize(str) {
  var str2 = str[0].toUpperCase(); //cas exceptionelle du premier car
  for (var i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      str2 += str[i].toUpperCase();
    } else {
      str2 += str[i];
    }
  }
  return str2;
}

// console.log(capitalize("bonjour hello bonjour"));

// autre solution:
function capital(ph) {
  var str = ph.split(" ");
  for (var i = 0; i < str.length; i++)
    // console.log(str[i]);
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  return str.join(" ");
}

// console.log(capital("Hello il pleut!"));

// ************************************************************
// Fonctions de tableau :
// Max min dans tableau
function MaxMin(tab) {
  //hypothèse
  var max = tab[0];
  var min = tab[0];
  for (var i = 1; i < tab.length; i++) {
    if (min > tab[i]) {
      min = tab[i];
    }
    if (max < tab[i]) {
      max = tab[i];
    }
  }
  return `Le minimum dans ce tablea est ${min} et le maximum est ${max}`;
}

// console.log(MaxMin([0, 4, 8, 11, 1]));
// *****************************************************
// somme des élément d'un tableau
function somme(tab) {
  var s = 0;
  for (var num of tab) {
    s = s + num;
  }
  return s;
}

// console.log(somme([0, 4, 8, 11, 1]));
// ********************************************************
// filtre d'un tableau
function filtre(tab) {
  var tabPaire = [];
  for (var elt of tab) {
    if (elt % 2 === 0) tabPaire.push(elt);
  }
  return tabPaire;
}
// console.log(filtre([4, 8, 7, 9, 0, 1]));
// tab = [4, 8, 7, 9, 0, 1]-------> [4,8,0]

// *****************************************************
// a réfléchir???
function filtreCondition(tab, condition) {
  var tabPaire = [];
  for (var elt of tab) {
    if (condition) tabPaire.push(elt);
  }
  return tabPaire;
}

// console.log(filtreCondition([1, 5, 4],  % 2 !== 0));

// **************************************************

// Fonctions mathématiques :
// factoriel
// n=4 n!= 4*3*2*1
function factoriel(n) {
  var fact = 1;
  while (n !== 1) {
    fact = fact * n;
    n = n - 1;
  }
  return fact;
}

var resultat = factoriel(4);
// console.log(resultat);

function factorielFOR(n) {
  var fact = 1;
  for (var i = n; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}
// console.log(factorielFOR(5));
// ****************************************************
//nombre premier
// FOR
function premier(n) {
  for (var i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(premier(7))

// D21 = { 1, 3, 7, 21}
// D25 = { 1, 5, 25}
// D37 = {  2,3,4,5,6,7,8,9....36
//   1, 37,
// }

function premier(n) {
  // for (var i = 2; i <= n/2; i++){
  //   if (n % i === 0) { return false }

  // }
  var i = 2;
  while (i <= n / 2) {
    if (n % i === 0) {
      return false;
    }

    //changement
    i = i + 1;
  }

  return true;
}

// console.log(premier(7));

//Fibonacci
// u0 = 0;
// u1 = 1;
// un2 = un0 + un1 = 0 + 1
// un3 = un1 + un2 = 1 + 1 =2
// un4 = un2 + in3 = 1 + 2 =3
// un5 = 3 + 2= 5
// 0 1 1 2 3 5 8 13 21 34 55 89
function Fibonacci(n) {
  var tab = [0, 1];
  if (n === 0) return tab[0];
  if (n === 1) return tab;
  for (var i = 2; i <= n; i++) {
    tab[i] = tab[i - 1] + tab[i - 2];
  }
  return tab;
}

// console.log(Fibonacci(5));
// Tri par insertion.
function TriInsertion(tab) {
  // var key, i, j;
  for (var i = 1; i < tab.length; i++) {
    key = tab[i];
    j = i - 1;
    while (j >= 0 && tab[j] > key) {
      tab[j + 1] = tab[j];
      j--;
    }
    tab[j + 1] = key;
  }
  return tab;
}

// console.log([6,5,3,1,8])

// La longueur de la phrase (le nombre de caractères).
// Le nombre de mots dans la phrase (en supposant que les mots sont séparés par un seul espace).
// Le nombre de voyelles dans la phrase.

function algo1JS(ph) {
  var cptCar = ph.length;
  var cptMot = ph.split(" ").length;
  var cptV = 0;
  // var voyelle = ['a', 'e', 'i', 'u', 'o'];
  for (var i = 0; i < ph.length; i++) {
    if (
      ph[i].toLowerCase() === "a" ||
      ph[i].toLowerCase() === "u" ||
      ph[i].toLowerCase() === "i" ||
      ph[i].toLowerCase() === "e" ||
      ph[i].toLowerCase() === "o"
    )
      cptV++;
  }

  return `Le nombre de caracère dans cette phrase est: ${cptCar},
  le nombre de mot est : ${cptMot} et le nombre de voyelle est ${cptV} `;
}

// console.log(algo1JS("On est fatigué, fin de journée"));
