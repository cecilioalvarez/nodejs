setTimeout(function() {

    console.log('se ejecuta después de 2 segundos');
},2000);

setTimeout(function() {

    console.log('se ejecuta después de 3 segundos');
},3000);
// que no estamos ante un codigo bloqueante
// sino que estamos ante un codigo no bloqueante
console.log("todo ha finalizaod");