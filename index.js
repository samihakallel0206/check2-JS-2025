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
console.log(resultat);

function factorielFOR(n) {
  var fact = 1;
  for (var i = n; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorielFOR(5));
// ****************************************************
