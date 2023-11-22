/*Esercizio 1: Variabili e Stringhe (10 punti)
Crea un programma JavaScript che:
1. Chieda all'utente il suo nome e lo memorizzi in una variabile. (2.5 punti)
2. Chieda all'utente il suo anno di nascita e lo memorizzi in un'altra variabile. (2.5
punti)
3. Visualizzi un messaggio che saluta l'utente con il suo nome e gli dice se è nato
in un anno bisestile. (5 punti)
⚠️ Un anno è bisestile se:
è divisibile per 4 e allo stesso tempo non è divisibile per 100;
oppure
se l'anno è divisibile per 400;*/


/*-------------------------------------------------

let nomeUtente = prompt('Inserisci il tuo nome');
let datadiNascita = prompt('Inserisci la tua data di nascita')
    if (datadiNascita % 4 === 0) {
    alert ('Sei nato in un anno bisestile')
}else {
    alert ('Non sei nato in un anno bisestile')
}

---------------------------------------------------*/



/*Esercizio 2: Cicli e Condizioni (15 punti)
Scrivi una funzione JavaScript che:
1. Accetta un array di stringhe come argomento.
2. Calcola la concatenazione di tutte le stringhe che iniziano con la lettera "A" o "a".
(10 punti)
3. Se la lunghezza della stringa concatenata supera i 10 caratteri, troncala a 10
caratteri e restituiscila. (5 punti)
4. Se il ciclo si completa senza che la stringa superi i 10 caratteri, restituisci la
stringa concatenata.*/


/*--------------------------------------------------

function concatenaStringhe(stringhe){
    let array= [];
    for (let i=0; i<array.length; i++) {
        let parola = array[i];

        if (parola[0] === 'A' || currentString[0] === 'a') {
        array += parola;

        if (array.length > 10){
            array = array.slice(0,10);
            break;
        }
        }
    }
    return array
}

--------------------------------------------------------*/


/*Esercizio 3: Array e Oggetti (20 punti)
Dato il seguente oggetto che rappresenta un libro, esegui i compiti sottostanti:
Esame Modulo JavaScript 2
const book = {
title: "Il Grande Gatsby",
author: "F. Scott Fitzgerald",
year: 1925,
};
1. Aggiungi una nuova proprietà rating all'oggetto libro, che rappresenta il rating
del libro, e inizializzalo a 6 .
2. Aggiungi un metodo increaseRating che accetta come argomento un valore
numerico e che incrementa il rating del libro del valore passato alla funzione. (10
punti)
Il nuovo rating risultante, non può superare 10. (2.5 punti)
3. Rimuovi la proprietà year dall'oggetto libro. (2.5 punti)
4. Stampa in console ogni proprietà dell'oggetto libro in questo formato: "[chiave]:
[valore]" . (5 punti)*/


/*---------------------------------------------

const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    };

    const addRating = function(book, initialRating = 6) {
        book.rating = initialRating;
      }
    let increaseRating = function(book, value) {
        book.rating += value;
        book.rating = Math.min(book.rating, 10);
    }

    const deleteYear = function(book){
        delete book.year;
    }

    addRating(book)
    increaseRating(book,3)
    deleteYear(book)

    for (const key in book) {
        console.log(`[${key}]: ${book[key]}`);
      }
      
      
      ------------------------------------------*/



      /*