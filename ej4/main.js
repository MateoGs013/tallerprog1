function calcular_area_circ(d1) {
    const parte1 = Math.pow(d1,2)
    const resultado = Math.PI * parte1
    return resultado
}
function mostrar_area() {
    const dato1 = document.getElementById("inp_dato1").value

    const respuesta = calcular_area_circ(dato1)
    
    alert(respuesta)
}