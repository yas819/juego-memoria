let NombreJugador = document.querySelector(".jugador");
let listaJugadores = "jugadores";


// funcion para obtener los datos
function obtenerDatos() {
    // crear objetos para los datos del jugador
    let datosJugador ={
        "nombre": NombreJugador.textContent,
        "intentos" : totalIntentos,
        "tiempototal": totalTiempo,
        "tiemposobrante": tiempoSobrante
    }
        // mostrar los datos en consola
        console.log(datosJugador);
        guardarDatos(datosJugador);
          
}
// funcion para guardar en localstorage
function  guardarDatos(datos) {
    // array para los datos antiguos
    let jugadores = [];
    // datos en localstorage
    let datosPrevios = JSON.parse( localStorage.getItem(listaJugadores));
    if( datosPrevios!= null){
        jugadores = datosPrevios;

    }
    jugadores.push(datos);
    localStorage.setItem(listaJugadores, JSON.stringify(jugadores));
}

function mostrarDatos(){
     // array para los datos antiguos
     let jugadores = [];
     // datos en localstorage
     let datosPrevios = JSON.parse( localStorage.getItem(listaJugadores));
     if( datosPrevios!= null){
         jugadores = datosPrevios;
 
     }
    //  organizar los jugadores
    jugadores.sort((a,b)=>{
       if (a.tiempototal< b.tiempototal){
        return -1;
       }
       if(a.intentos < b.intentos){
        return 1;
       }
    })

    //  mostrar los datos
    jugadores.forEach((jugador,i) => {
        // crear fila
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <td> ${i+1}</td>
        <td> ${jugador.nombre} </td>
        <td> ${jugador.tiempototal} </td>
        <td> ${jugador.intentos} </td>
        <td> ${jugador.tiemposobrante} </td>
        `;
        tabla.appendChild(fila);
        
    });

}