// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresSorteados = [];


function agregarAmigo() {
   let nombre = document.getElementById ('amigo').value;
   console.log(nombre);
   if (nombre===""){
    alert("por favor inserte un nombre");
    return;
   }
   nombresSorteados.push(nombre);
   console.log(nombresSorteados);
   amigo.value = "";
}

function obtenerLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < ListaAmigos.length; i++) {
        
    }
    
}