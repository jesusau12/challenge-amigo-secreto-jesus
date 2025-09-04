// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// lo primero que hice, fue crear una lista
let amigos = [];


// cree una funcion para ir agregando amigos a la lista

function agregarAmigo() {
// cree una variable para añadir a la lista los nombres que ingrese el usuario
    let nombre = document.getElementById ('amigo').value;
   console.log(nombre);
// cree una condicion que le indica al usuario que para precionar el boton añadir debe isertar un nombre antes
   if (nombre===""){
    alert("por favor inserte un nombre");
    return;
   }
// utilice el metodo push para agregar el nombre insertado por el usuario al final de la lista
   amigos.push(nombre);
   // utilice este fragmento para tomar el valor o el texto escrito por el usuario y luego utilizarlo en el codigo añadiendolo a la lista
   document.getElementById('amigo').value = "";
}
// utilice el console.log para asegurarme que los nombres se esten agregando correctamente a la lista
console.log(amigos);

// cree la funcion obtenerLista y llame a la variable (amigos) para trabajar directamente con la lista
function obtenerLista(amigos) {
// lista de amigos contenedor, es el elemento del DOM donde voy a mostrar la lista de amigos
    let lista = document.getElementById("listaAmigos");
// cree esta linea para vaciar el contenido de la lista, para asegurarme que siempre se muestre la informacion actualizada    
    lista.innerHTML = "";

// cree este bucle for para poder recorrer la lista desde 0 hasta el ultimo valor de la lista de forma ordenada
    for(let i = 0; i < amigos.length; i++) {
// cree el elemento <li> para asignar cada nombre como un item dentro de la lista    
        let nuevoElementoLista = document.createElement ("li");
// cree esta proxima linea en el codigo para asignar el nombre del amigo al elemento de lista        
        nuevoElementoLista.textContent = amigos[i];
//con esta linea agregue el nuevo elemento de la lista al contenedor de la lista para mostrar en la pagina    
    lista.appendChild(nuevoElementoLista);
// cree este console.log para comprobar que el elemento se agregue correctamente y que contenga el contenido que espero, de esta manera me aseguro que todo este bien
    console.log(nuevoElementoLista);
    }
}

// cree la funcion sortearAmigo() para ejecutar el sorteo y mostrar en la pagina el resultado
function sortearAmigo() {
 // valide que hayan almenos dos amigos disponibles para realizar el sorteo
    if (amigos.length < 2) {
    alert("Debes ingresar dos o más nombres para realizar el sorteo");
    return;
  }

// cree el indiceAleatorio para seleccionar un amigo aleatorio del arreglo  
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
// cree esta variable para obtener el nombre del amigo secreto
  let amigoSecreto = amigos[indiceAleatorio];

  console.log(amigoSecreto);
  console.log(indiceAleatorio);

// actualice el contenido del elemento de resultado para luego mostrar el amigo sorteado  
  let resultadoElemento = document.getElementById("resultados");
  resultadoElemento.innerHTML = "Tu amigo secreto es: " + amigoSecreto;
}