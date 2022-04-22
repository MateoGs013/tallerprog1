let facturas = ['Cara sucias','medias-lunas dulces','Cañoncitos de dulce de leche','Cañoncitos de Crema pastelera']

// como saber la longitud de un arreglo
const longitud = facturas.length
console.log('Length'+longitud)

//Mostrar el elemento mediante su indice
const primero = facturas[0]
console.log('El primer elemento es: '+ primero)

//como acceder al ultimo elemento del arreglo
const ultimo = facturas[longitud-1]
console.log('El ultimo elemento de nuestro arreglo es: '+ultimo)

//como recorrer un arreglo usando foreach y mostrar su posicion/indice
facturas.forEach( (element,index) => {
    console.log(index+'-'+element)
});

//como agregar un nuevo elemento al final de un arreglo
facturas.push('Rosquitas')
console.log(facturas)

//Como eliminamos el ultimo elemento de un arreglo
facturas.pop()
console.log(facturas)

//como agregar un elemento al inicio del arreglo
facturas.unshift('Rosquitas')
console.log(facturas)

//como eliminar el primer elemento del arreglo
facturas.shift()
console.log(facturas)

//como obtener el indice de un elemento de un arreglo
const indice = facturas.indexOf('Cañoncitos de dulce de leche')
console.log('El indice del Elemento: '+indice)

//como eliminar un elemento segun su indice
facturas.splice(indice,1)
console.log(facturas)

//como eliminar mas de un elemento en un arreglo
const indice_1 = facturas.indexOf('medias-lunas dulces')
const eliminados = facturas.splice(indice_1,2)
//ademas de quitar elementos tambien que informa de los elementos eliminados
console.log('Eliminados: '+eliminados)
console.log(facturas)

//Como generar una copia de un arreglo
const copiaFacturas = facturas.slice()
copiaFacturas.push('Rosquita','Cañoncitos de dulce de leche','Churros :P')
console.log('Copia: '+copiaFacturas)
console.log('Original: '+facturas)

//como agregar un elemento en el medio del arreglo
copiaFacturas.splice(2,0,"bizcochitos")
console.log(copiaFacturas)