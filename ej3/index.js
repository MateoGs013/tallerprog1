function calcular_area() {
    
    const dato1 = parseInt(document.getElementById("inp_menor").value)
    
    const dato2 = parseInt(document.getElementById("inp_mayor").value)
  
    const dato3 = parseInt(document.getElementById("inp_altura").value)
  
    let calculo = (dato1+dato2)*dato3
    let resultado = calculo/2
    alert(resultado)

}