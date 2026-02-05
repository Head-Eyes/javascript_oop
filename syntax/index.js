import { muvelet, muveletLetrehoz } from "./functions.js"
import { Gomb } from "./gomb.js"


const input = document.createElement('input')
document.body.appendChild(input)
const inputKetto = document.createElement('input')
document.body.appendChild(inputKetto)
const div = document.createElement('div')
document.body.appendChild(div)
const gomb = document.createElement('button')
gomb.innerText = 'Valami'
document.body.appendChild(gomb)

gomb.addEventListener('click', function(){
    const osszeg = Number(input.value)
    const osszegKetto = Number(inputKetto.value)

    //const eredmeny = muvelet(osszeg,osszegKetto, muveletLetrehoz("+") )

    const {result} = muvelet(osszeg,osszegKetto, muveletLetrehoz("+") )

    div.innerText = result
})

const fv = muveletLetrehoz("+")
console.log(fv(1,2))

new Gomb (input, inputKetto, "+", div)
new Gomb (input, inputKetto, "-", div)
new Gomb (input, inputKetto, "*", div)