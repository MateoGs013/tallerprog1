function calcular_baskara(a1,b1,c1) {

    const parte1 = Math.pow(b1,2)
    const parte2 = parte1 - (4 * a1 * c1)
    const parte3 = Math.sqrt(parte2)
    const resultado1 = -(b1 + parte3) / (2*a1)
    const resultado2 = -(b1 - parte3) / (2*a1)
    
    return resultado1.toFixed(2)+' '+ resultado2.toFixed(2)
}
function mostrar_baskara() {

    const a = document.getElementById("inp_a").value
    const b = document.getElementById("inp_b").value
    const c = document.getElementById("inp_c").value
    
    const respuesta = calcular_baskara(a,b,c)

    alert(respuesta)
}