// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

for(let i=0; i < 10; i++){
    const userNumber = parseInt(prompt(`Inserisci un numero`));
    
    if(userNumber % 2 == 0){
        console.log(userNumber);

    } else if(userNumber % 2 == 1){
        console.log(userNumber + 1);
    }

}