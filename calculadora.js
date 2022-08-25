
/*
INTEGRANTES:
-DIEGO PAOLO MORALES LOPEZ ML20011
-EDWIN EISMAELI BARRERA ARCE BA20010
*/

function Calculadora(){
    this.evaluar = (cadena)=>{
        return eval(cadena)
    }
}
function Cientifica(){
    Calculadora.call(this)
    this.potencia= (n1, n2)=>{
        return Math.pow(n1,n2)
    }
    this.raiz= (n1)=>{
        return Math.sqrt(n1)
    }
}


Cientifica.prototype = Object.create(Calculadora.prototype)
Cientifica.prototype.constructor = Cientifica

calcu = new Calculadora()
calcuc = new Cientifica()

console.log()

const numeros = document.querySelectorAll('.numero')
console.log(numeros)
numeros.forEach(numero => {
    numero.addEventListener('click', ()=>{
        let a = numero.innerText
        let b = document.getElementById('resultado1')
        b.innerText = b.innerText + a
    })
})

const igual = document.querySelector('.igual')

igual.addEventListener('click', ()=>{
    let b = document.getElementById('resultado1')
    let a = calcu.evaluar(b.innerText)
    b.innerText=a
})

const limpiar = document.querySelector('.limpiar')

limpiar.addEventListener('click', ()=>{
    console.log("a")
    let b = document.getElementById('resultado1')
    b.innerText=""
})

const cuadrada = document.querySelector('.sqrt')

cuadrada.addEventListener('click', ()=>{
    let b = document.getElementById('resultado1')
    let a = calcuc.raiz(b.innerText)
    b.innerText=a
})

