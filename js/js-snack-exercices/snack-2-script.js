// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

for(let i=0; i < 10; i++){
    const userNumber = parseInt(prompt(`Inserisci un numero`));
    
    if(userNumber % 2 == 0){
        console.log(userNumber);

    } else if(userNumber % 2 == 1){
        console.log(userNumber + 1);
    }

}

// Potevo anche fare un solo if nel caso di un numero dispari con la modifica già scritta di sopra
// e fuori mettere un console log con la variabile generale:
// Così che se il numero è dispari, mi fa la modifica e poi lo stampa, se è pari, lo stampa e basta=

// if(numeroUtente % 2 == 1){
// numeroUtente++;
// }

// console.log(numeroUtente)