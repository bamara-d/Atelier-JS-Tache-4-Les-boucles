/* Les Boucles En JavaScript

    Les types de boucles en JavaScript 

  -- Boucle for : Elle est utilisée pour itérer un nombre fixe de fois.
        for (initialisation; condition; mise à jour) {
          // Code à exécuter
        }
  
  -- Boucle while : Elle exécute un bloc de code tant qu'une condition est vraie.
      while (condition) {
        // Code à exécuter
      }

  -- Boucle do...while : Elle est semblable à la boucle while, mais elle s'exécute au moins une fois.
      do {
        // Code à exécuter
      } while (condition);

  -- Boucle for...of : Elle est utilisée pour itérer sur les valeurs d'un tableau ou d'autres objets itérables.    
      for (const élément of tableau) {
        // Code à exécuter
      }

  -- Boucle for...in : Elle est utilisée pour itérer sur les propriétés d'un objet.
      for (const clé in objet) {
        // Code à exécuter
      }
*/

// 2-- Utiliser une boucle for pour afficher les nombres de 1 à 10 dans la console.
for (var i = 0; i < 11; i++) {
  console.log(i);
}

// 3-- Utiliser une boucle while pour afficher les nombres de 1 à 10 dans la console.
var nombre = 0;
while (nombre < 11) {
  console.log(nombre);
  nombre++;
}

// 4-- Créer un tableau de noms de fruits (au moins 5 noms). Utilisez une boucle for pour afficher chaque nom de fruit dans la console.
const fruits = ['Coco', 'banane', 'cerise', 'orange', 'pomme'];
for (let b = 0; b < fruits.length; b++) {
  console.log(fruits[b]); 
}