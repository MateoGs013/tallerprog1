function calcular_farenheit(cel) {

    const calculo = (cel*1.8)+32

    return calculo
    
}
function mostrar_farenheit(){

    const celsius = document.getElementById("inp_cel").value

    const respuesta = calcular_farenheit(celsius)

    alert(respuesta)

}