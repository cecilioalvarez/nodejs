const lista=[1,2,3,4];


/*
for (let i=0; i<lista.length; i++){
    console.log(lista[i]);
}

*/
// aqui es donde tenemos que entrar a detalle

//high order function

//una variable de tipo funcion que nos permite flexibilidad
var mifuncion1= function(datos){
    console.log(datos);
}

var mifuncion2= function(datos){
    console.log("****"+datos+"****");
}
//template string de javascript es6
var mifuncion3= function(datos){
    console.log(`----${datos}----`);
}

// esta es una funcion
// que recibe dos parametros
// el primer parametro es una lista de elementos o array
// el segundo parametro es una funcion y ese no esta tan claro
//lo que habitualmente se llama una high order function
// es una funcion que recibe como parametro otra funcion
function formatearLista(lista,funcion){
    for (let i=0; i<lista.length; i++){
        funcion(lista[i]);
    }
}
// la plasticidad aque aporta la programacion funcional

formatearLista(lista,mifuncion1);
formatearLista(lista,mifuncion2);
formatearLista(lista,mifuncion3);

