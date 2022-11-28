// Crea un array di numeri interi e fai 
// la somma di tutti gli elementi che sono in posizione dispari

const numbers = [2, 5, 7, 29, 18, 13, 17, 46, 35, 79];

let somma = 0;
// Creo una variabile somma

for (let i=0; i < numbers.length; i++){

    // In questo modo calcolo se il valore dell'indice della lista è pari o dispari e in seguito do le istruzioni
    if( i % 2 === 1){
        somma += numbers[i];
    }
    
}

console.log(somma);

// Un'altra possibilità che potevo utilizzare nel quale invece di verificare, determino che i non deve sommarsi a se
// stesso, ma deve sommarsi a 2 per avere la posizione corretta, e in seguito eseguire le istruzioni:

// for (let i=0; i < numbers-length; i+=2){
//     somma += numbers [i];
// }