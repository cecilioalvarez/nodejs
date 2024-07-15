const lista=[1,2,3,4];


/*
for (let i=0; i<lista.length; i++){
    console.log(lista[i]);
}

*/
// aqui es donde tenemos que entrar a detalle

//high order function


var mifuncion= function(datos){
    console.log(datos);
}


lista.forEach( mifuncion);

