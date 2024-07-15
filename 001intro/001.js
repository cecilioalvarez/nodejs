window.onload = function() {
    
    //javascript y vainilla de javascript

    let boton= document.getElementById("boton");
    boton.addEventListener("click", function(){  //evento de click
       alert("Hola Mundo");
   })
// ejecucion asincrona cada 3 segundos
   setInterval(function(){ //funcion de tiempo
     console.log("Hola Mundo");
   }, 1000);


}