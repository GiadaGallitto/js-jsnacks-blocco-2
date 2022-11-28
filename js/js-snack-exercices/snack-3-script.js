// Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array.

const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let somma = 0;

let average = 0;

let maxValue = 0;

// Creo un ciclo in cui un elemento continua a sommarsi fino al decimo elemento della lista
for(let i=0; i < 10; i++){

    // In questo modo dico alla variabile somma, che per dieci volte, il suo elemento (che varia posizione a ogni
    // fase del ciclo), si aggiunge ad essa, sommandosi insieme agli altri, dandomi il risultato della somma totale
    somma+= numbers[i];
    // Il += in forma estesa vuol dire somma = somma + numbers[i]

    if(maxValue < numbers[i]){
        maxValue = numbers [i];
    }
    // In questo modo maxValue si confronta con l'index corrente, se è minore, sostituisce il proprio valore, con quello
    // dell'index e ripete l'azione con l'index seguente
}

average = parseInt(somma / 10);
// In questo modo divido la somma già fatta dei primi 10 numeri, diviso per la quantità di numeri (10), ottenendo quindi la media


console.log(somma, average, maxValue)


