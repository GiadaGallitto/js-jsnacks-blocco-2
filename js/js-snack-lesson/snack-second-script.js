/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
 * da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];

let guests = [];


// Creo un ciclo while in cui do la condizione dove finchè la lunghezza della lista non arriva ad un numero di elementi da me scelto
// allora continuerà a creare randomicamente nomi e cognomi dalle due liste, per poi aggiungerli nella lista guests
while (guests.length < 20){
    
    let randomNameIndex = Math.floor(Math.random()* names.length);
    // In questo modo posso generare un elemento randomico della lista names per tutta la sua lunghezza
    
    let randomLastNameIndex = Math.floor(Math.random()* lastnames.length);
    // Faccio la stessa cosa per quanto riguarda i lastnames
    
    const guest = names[randomNameIndex] + " " + lastnames[randomLastNameIndex];
    // Creo un variabile in cui viene inserito l'elemento randomico dei names e quello dei lastnames
    
    guests.push(guest);
    // Con questo comando, aggiungo gli elementi creati, alla lista guests
}

console.log(guests);

