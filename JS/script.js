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
var tableau = document.getElementById("tableau")
var affichage = document.getElementById("affichage")
var index = 0

function afficher(){
  affichage.firstChild.nodeValue = A_array[index] 

  let value = A_array[index]

  if (value >= -10 && value <0) {
      tableau.setAttribute("class", "blue-border");
  }

  else if (value >= 0 && value <20 ) {
      tableau.setAttribute("class", "green-border");
  }

  else if (value >= 20 && value <30) {
      tableau.setAttribute("class", "orange-border");
  }

  else if (value >= 30 && value <= 40) {
      tableau.setAttribute("class", "red-border");
  }

}

var ID = setInterval(() => {
  if (index == A_array.length){
    clearInterval(ID)
  }

  afficher()
  index++
},1000)

// Exercice 4 : CSS

// Exercice 5 : DOM : modification des attributs d'un noeud
