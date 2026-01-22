// Exercice 1 : Création d'un tableau de données

var A_array = new Array();

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

for (let I_index = 0 ; I_index < 20 ; I_index++) {
    let value = getRandomInt(-10, 40);
    A_array.push((value));
    console.log(A_array[I_index]);
}


// Exercice 2 : HTML

// Exercice 3 : DOM : modification du contenu d'un noeud

var tableau = document.getElementById("affichage")
var index = 0

function affichage(){
  tableau.firstChild.nodeValue = A_array[index] 
}

var ID = setInterval(() => {
  if (index == A_array.length){
    clearInterval(ID)
  }

  affichage()
  index++
},500)