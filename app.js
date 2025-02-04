// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendNames  = []

function agregarAmigo (){
const friend = document.getElementById("amigo");
const friendValue = friend.value.trim(); // elimina los espacion en blando al comienzo y final de la palabra

if (friendValue === ""){
    alert("Campo vacio, porfavor ingrese un nombre");
} else {
    friendNames.push(friendValue);
    friend.value = "";
    console.log(friendNames);

    const listItem = document.createElement("li"); //crear un nuevo li
    listItem.textContent =friendValue // asignarle el nombre a li

    //añadir el li a la lista de HTML
    document.getElementById("listaAmigos").appendChild(listItem);
}
}

function sortearAmigo(){
    if (friendNames.length===0){
        alert("No hay ningun nombre para sortear por favor agreguelos")
        return
    }
    const ranIndex  = Math.floor(Math.random()*friendNames.length);
    const amigoSorteado = friendNames[ranIndex];
    document.getElementById("sorteoResultado").innerHTML= `<li> El nombre es: ${amigoSorteado}</li>`;
}