let shoppingList = [
    "Cera al Lanciafiamme",
    "Sciarpa per piccioni",
    "Calice di fuoco",
    "Maschera di IronMan",
    "Bentley infuocata",
    "Sacco a pelo per gatti",
    "Piume di pavone"
];

const ulElement = document.querySelector("ul.list-group");
// Seleziono l'elemento ul presente in HTML
let i = 0;

while (i < shoppingList.length){
    const newLiElement = document.createElement("li");
    // Creo in Js, un elemento li (che si ripeterà per tutti gli elementi della lista, grazie a while)
    
    newLiElement.classList.add("list-group-item");
    // Aggiungo ad ogni li, una classeù (in sto caso, tipica di bootstrap)
    
    newLiElement.append(shoppingList[i]);
    // Ad ogni li appendo un elemento della lista

    // newLiElement.innerHTML = shoppingList[i];
    // Posso utilizzare anche questo metodo al posto di append
    
    ulElement.append(newLiElement);
    // Così appendo ogni li già composto, all'interno dell'ul

    console.log(newLiElement);

    i++;
    // Scrivo le istruzioni di uscita per far terminare il loop alla fine delle indicazioni di esecuzione
}

