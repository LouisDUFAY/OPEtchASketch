//taille de la grille pour déterminer le nombre de cellules à créer
let gridSizeX = 16;
let gridSizeY = 16;

//Référence du container qui contiendra les cellules
const container = document.getElementById("container")

//création des cellules
for(i=0; i<gridSizeX * gridSizeY; i++){
    let div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
}