
// creo la funcion que hace el calculo con argumento
function calcular_division(d1,d2) {

    // realizo la operacion
    const resultado = d1/d2
    // estoy entregando una respuesta
    return resultado

}

// creo la funcion que muestra el resultado
function mostrar_resultado(params) {
    // recolecto el dato de la forma 1
    const dato1 = document.getElementById("inp_dato1").value
    // recolecto el dato de la forma 2
    const dato2 = document.querySelector("#inp_dato2").value
    
    // ejecuto la funcion y envio los datos
    // recibimos una respuesta de la funcion
    const respuesta = calcular_division(dato1,dato2)

    // mostramos el resultado
    alert(respuesta)
}