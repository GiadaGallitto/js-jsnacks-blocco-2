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

let i = 0;

while (i < shoppingList.length){
    const newLiElement = document.createElement("li");
    
    newLiElement.classList.add("list-group-item");
    
    newLiElement.append(shoppingList[i]);
    newLiElement.innerHTML = shoppingList[i];
    
    ulElement.append(newLiElement);

    console.log(newLiElement);

    i++;
}

