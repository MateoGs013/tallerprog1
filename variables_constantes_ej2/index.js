//funcion clasica
/*function mostrar() {
    //declaramos una variable
    let num = 15;
    //se imprime en la consola del navegador
    console.log(num);   
}
function evaluar() {

    let dato = 22;

    if (dato > 10) {
        let dato = 77
        console.log(dato)
    }
    console.log(dato)
    
}
function validar() {
    
    const valor = prompt('ingrese calificacion');
    /*
    if (valor>=7) {
        alert('¡Estas Aprobado!')
    } else {
        alert('Nos vemos en diciembre :c')
    }
    //expresion ternaria

    (valor >= 7) ? alert('Estas Aprobado!') : alert('A casa!')

}*/
//invocamos la funcion validar
//validar()

/*function calcular() {
    
    //forma 1
    //const dato = document.getElementById("inp_dato1").value

    //forma 2
    const dato = document.querySelector("#inp_dato1").value
    const resultado = dato * 10;
    alert(resultado)
}
*/

function calcular() {
    const dato1 = document.getElementById("inp_dato1").value
    const dato2 = document.getElementById("inp_dato2").value
    const resultado = dato1*dato2/2
    alert(resultado)

}
