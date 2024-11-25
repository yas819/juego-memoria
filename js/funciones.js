// variables globales
let imgN1 =[
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitanAmerica", url:"imagenes/capitanAmerica.jpg"},
    {nombre:"flash", url:"imagenes/flash.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"superman", url:"imagenes/superman.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitanAmerica", url:"imagenes/capitanAmerica.jpg"},
    {nombre:"flash", url:"imagenes/flash.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"superman", url:"imagenes/superman.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"}
];
let imgN2 =[
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitanAmerica", url:"imagenes/capitanAmerica.jpg"},
    {nombre:"flash", url:"imagenes/flash.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"superman", url:"imagenes/superman.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitanAmerica", url:"imagenes/capitanAmerica.jpg"},
    {nombre:"flash", url:"imagenes/flash.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"superman", url:"imagenes/superman.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"hombrearaña", url:"imagenes/hombrearaña.jpg"},
    {nombre:"hombrearaña", url:"imagenes/hombrearaña.jpg"},
    {nombre:"aironman", url:"imagenes/aironman.jpg"},
    {nombre:"aironman", url:"imagenes/aironman.jpg"}
];
let imgN3 =[
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitanAmerica", url:"imagenes/capitanAmerica.jpg"},
    {nombre:"flash", url:"imagenes/flash.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"superman", url:"imagenes/superman.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitanAmerica", url:"imagenes/capitanAmerica.jpg"},
    {nombre:"flash", url:"imagenes/flash.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"superman", url:"imagenes/superman.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"hombrearaña", url:"imagenes/hombrearaña.jpg"},
    {nombre:"hombrearaña", url:"imagenes/hombrearaña.jpg"},
    {nombre:"aironman", url:"imagenes/aironman.jpg"},
    {nombre:"aironman", url:"imagenes/aironman.jpg"},
    {nombre:"deadpool", url:"imagenes/deadpool.jpg"},
    {nombre:"deadpool", url:"imagenes/deadpool.jpg"},
    {nombre:"wolverine bebe", url:"imagenes/wolverine bebe.jpg"},
    {nombre:"wolverine bebe", url:"imagenes/wolverine bebe.jpg"}
];

let tablero = document.querySelector(".tablero");
 let imagenNombre =[]; //guaradr nombres de imagenes 
let imagenID =[]; //guardar posiciones
let aciertos = 0;
let totalIntentos =0;
let totalTiempo =0;
let tiempoSobrante = 0;
let intentos =0;
let tiempo =60;
let nivel =1;
let mostrarNivel = document.querySelector (".niveles");
let mostrarIntentos = document.querySelector(".intentos");
let mostrarAciertos = document.querySelector(".aciertos");
let mostrarTiempo = document.querySelector(".tiempo");
let tiempotranscurrido;
let btn_iniciar = document.querySelector(".btn-iniciar");
let imagenNivel;
let estoyJugando = false;
let sonidoSeleccionar = new Audio("./sonidos/seleccion.wav");
let sonidoAdivinar = new Audio("./sonidos/good.wav");
let sonidoFallar = new Audio("./sonidos/fail.wav");
let sonidoPerdio = new Audio("./sonidos/gameover.wav");
let sonidoGanar = new Audio("./sonidos/finish.wav");
let mostrarJugador = document.querySelector(".jugador");
let tabla = document.querySelector(".table tbody");
let fondoBody = document.body;


document.addEventListener("DOMContentLoaded", ()=>{
    fondoBody.classList.add("fondo1");
mostrarDatos();
});


// agregar el evento de boton 

btn_iniciar.addEventListener("click", function(){
    //alert("juego iniciado");
    // cmprovar si esta cativo
    if(estoyJugando == false && nivel== 1){
        ventanaModal();
     
 }else if(estoyJugando == false && nivel == 2){
    estoyJugando = true;
    nivel2 ();

 }else if(estoyJugando == false && nivel == 3){
    estoyJugando = true;
    nivel3 ();
 }

});


// funcion para agregar las imagenes al tablero
function agregarImagenes(){
//   agregar imagenes al nivel 
    if(  nivel ==1){
        imagenNivel= imgN1;
      
    }else if(nivel ==2){
        imagenNivel = imgN2;

    }else if(nivel ==3){
    imagenNivel = imgN3;

}
// desordenarlas 

imagenNivel.sort(()=>
    Math.random() -0.5);

    imagenNivel.forEach((img, i)=>{
        let div = document.createElement("div");
        div.className = "col-3 my-2";
        let imagen = document.createElement("img");
        imagen.src = "imagenes/ocultar.jpg";
        imagen.className ="img-fluid altura";
        imagen.id = i;
        imagen.addEventListener("click", mostrarImagenes);
        div.appendChild(imagen);
        tablero.appendChild(div);
     
    });
}
// funcion para mostrar las imagenes 
function mostrarImagenes(){
    sonidoSeleccionar.play();
   let imgID= this.getAttribute("id");
//    alert("Imagen #" + imgID);
       this.src = imagenNivel[imgID].url;
       imagenNombre.push( imagenNivel[imgID].nombre); //guardar los nombre de las img
       imagenID.push(imgID);//guardar la posicion de la imagen
      

       if(imagenNombre.length == 2){
        setTimeout (compararImg, 200);
        
       }
        

}

//  funcion para comparar img

function compararImg(){
    let imagenesTablero = document.querySelectorAll(".tablero > div > img");
    if(imagenNombre[0] == imagenNombre[1]){
        if(imagenID[0] != imagenID[1]){
            // alert("adivinaste");
            sonidoAdivinar.play();
            imagenesTablero[imagenID[0]].src = "imagenes/ok.jpg";
            imagenesTablero[imagenID[1]].src = "imagenes/ok.jpg";
            imagenesTablero[imagenID[0]].removeEventListener("click", mostrarImagenes);
            imagenesTablero[imagenID[1]].removeEventListener("click", mostrarImagenes);
            aciertos++
            mostrarAciertos.textContent = aciertos;
        }else{
            // alert("debes escoger otra imagen");
            imagenesTablero[imagenID[0]].src = "imagenes/ocultar.jpg";
            intentos++;
            mostrarIntentos.textContent = intentos;

            

        }
     }else{
    //     alert("fallaste");
    sonidoFallar.play();
        imagenesTablero[imagenID[0]].src = "imagenes/ocultar.jpg";
        imagenesTablero[imagenID[1]].src = "imagenes/ocultar.jpg";
        intentos++;
        mostrarIntentos.textContent = intentos;
    }
    imagenNombre =[];
    imagenID =[];

    // comprovar si se adivinaron 
    if( nivel ==1 && aciertos ==6){
        alert("FELICITACIONES, PASASTE DE AL SIGUIENTE NIVEL 🥳🥳");
        fondoBody.classList.replace("fondo1", "fondo2");
        // recargar pagina
    //    location.reload();
    totalIntentos += intentos;
    totalTiempo += tiempo;
    tiempoSobrante += (60 - tiempo);
    obtenerDatos();
    sonidoGanar.play();
    nivel++;
    mostrarNivel.textContent = nivel;
    intentos=0;
    mostrarIntentos.textContent= intentos
    aciertos=0;
    mostrarAciertos.textContent=aciertos
    clearInterval(tiempotranscurrido);
    tiempo= 50;
    mostrarTiempo.textContent= tiempo;
    estoyJugando = false;
    quitarImg();
  

    } else if(nivel == 2 && aciertos == 8){
        alert("FELICITACIONES, PASASTE DE AL SIGUIENTE NIVEL 🥳🥳");
        fondoBody.classList.replace("fondo2", "fondo3");
        sonidoGanar.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos=0;
        mostrarIntentos.textContent= intentos
        aciertos=0;
        mostrarAciertos.textContent=aciertos
        clearInterval(tiempotranscurrido);
        tiempo= 45;
        mostrarTiempo.textContent= tiempo;
        estoyJugando = false;
        quitarImg();

    }else if(nivel ==3 && aciertos == 10){
        alert("FELICITACIONES, PASASTE DE AL SIGUIENTE NIVEL 🥳🥳");
        sonidoGanar.play();
        location.reload();
    }
}

function nivel1(){
       //agregar imagenes
   agregarImagenes();
   mostrarNivel.textContent = nivel;
   tiempoDejuego();
}

function nivel2(){
    //agregar imagenes
agregarImagenes();
tiempoDejuego();
}
function nivel3(){
    //agregar imagenes
agregarImagenes();
tiempoDejuego();
}


function tiempoDejuego(){
  // ejecuta una vez cuando pasa determinado tiempo
        // controlar el tiempo 

    tiempotranscurrido = setInterval (()=>{
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if(tiempo == 10){
        //   alert("rapido el tiempo se esta agotando 😬");
          mostrarTiempo.classList.add("tiempoAgotado");
       
        }else if( tiempo == 0){
          alert("el tiempo se agoto perdiste ");
          sonidoPerdio.play();
          clearInterval(tiempotranscurrido);
          setTimeout(()=>{
            location.reload();
          }, 3000)
         
  
      }
     }, 1000);

}

function quitarImg(){
    let imagenQuitar = document.querySelectorAll(".tablero div");
    imagenQuitar.forEach((img)=>{
    img.remove();
    });
}
// mostrar ventana modal
function ventanaModal(){
    let mostrarModal = document.querySelector("#exampleModal");
    let cerrarModal= document.querySelectorAll(".cerrar");
    let inputJugador = document.querySelector(".nombre-jugador");
    let btnJugador = document.querySelector(".registrar-jugador");
    // BOTONES PARA CERRAR 
    cerrarModal.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            mostrarModal.classList.remove("show");
            mostrarModal.style.display="none";
        });
    });
    // MOSTRAR LA VENTANA MODAL 
    mostrarModal.classList.add("show");
    mostrarModal.style.display ="block";
    // EVENTO CLICK AL BOTON AZUL 
    btnJugador.addEventListener("click",()=>{
        // MOSTRAR EL NOMBRE
        mostrarJugador.textContent = inputJugador.value;
        // CERRAR MODAL
        mostrarModal.classList.remove("show");
        mostrarModal.style.display="none";
        // INICIAR NIVEL 1
        estoyJugando = true;
        nivel1();

    });
}
