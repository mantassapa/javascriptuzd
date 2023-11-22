"use strict"
//1.uzduotis------------------
function hello(){
    return 'hey'
}
function greeting(vardas){
    console.log(hello(), vardas)
}
// greeting('mantas')
// greeting('jonas')

//2. uzduotis------------------

function didesnisSk(){
    let sk1 = parseInt(prompt('iveskite pirma skaiciu')) 
    let sk2 = parseInt(prompt('iveskite antra skaiciu'))
    if (sk1>sk2){
        alert('Pirmas skaicius didesnin')
        return sk1}
    else if (sk2>sk1){
        alert('Antras skaicius didesnis')
        return sk2}
    else{
        alert('skaiciai lygus')
        return sk1}
}
// didesnisSk()

//3. uzduotis-----------------

function fizzAndBuzz(zodis){
    if (zodis == 'fizz'){
        console.log('buzz')}
    else if (zodis == 'buzz'){
        console.log('fizz')}
    else{
        console.log('Please provide fizz or buzz')}
}
// fizzAndBuzz('fizz')

//4. uzduotis---------------

let TrikampioLinija = (sk2,sk3) => {
    let sk1 = didesnisSk()
    if (sk1 + sk2 > sk3 && Math.abs(sk1 - sk2) < sk3){
        console.log('galimas trikampis')}
    else{
        console.log('trikampis negalimas')
    }
}
// TrikampioLinija(5,6)

//5. uzduotis----------------

let kvadratas = (sk1,sk2) =>{
    let sumaKv = sk1*sk2
    return sumaKv
}
let staciakampis = (sk1, sk2) =>{
    let sumaSt = (sk1 *sk2)/2
    return sumaSt
}
function figura(){
    let zodis = prompt('iveskite kvadratas arba staciakampis')
    if (zodis == 'kvadratas'){
        let k1 = parseInt(prompt('iveskite pirma skaiciu'))
        let k2 = parseInt(prompt('iveskite antra skaiciu'))
        let suma = kvadratas(k1,k2)
        console.log(`kvadrato plotas ${suma}`)}
    else if (zodis == 'staciakampis'){
        let s1 = parseInt(prompt('iveskite pirma skaiciu'))
        let s2 = parseInt(prompt('iveskite antra skaiciu'))
        let suma = staciakampis(s1,s2)
        console.log(`staciakampio plotas ${suma}`)}
    else{
        console.log('iveskite kvadratas arba staciakampis')}
}
// figura()

//6. uzduotis -------------------

function inSeven(x){return x=='7' ? true:false;}
// console.log(inSeven(7))

//7. uzduotis ------------------

function isEqual(z,y){return Math.round(z), Math.round(y) ? true:false;}
// console.log(isEqual(7,7))

//8.uzduotis---------------------

function sandauga(prob,prize,pay){return prob*prize>pay ? true:false;}
// console.log(sandauga(5,5,30))

//9. uzduotis--------------------
function laikas(minutes){
    let sec = minutes*60
    console.log(`${minutes}min = ${sec}s`)
}
// laikas(9)

//10. uzduotis------------------

function skaiciuotuvas(){
    let sk1 = parseInt(prompt('iveskite pirma skaiciu'))
    let z = prompt('iveskite zenkla ,-,+,*,/,')
    let sk2 = parseInt(prompt('iveskite antra skaiciu'))
    let suma = 0
    if (z ==='-'){
        suma = sk1 - sk2
        alert(`${sk1} - ${sk2} = ${suma}`)
    }
    else if (z === '+'){
        suma = sk1 + sk2
        alert(`${sk1} + ${sk2} = ${suma}`)
    }
    else if (z ==='*'){
        suma = sk1 * sk2
        alert(`${sk1} * ${sk2} = ${suma}`)
    }
    else if (z === '/'){
        suma = sk1 / sk2
        alert(`${sk1} / ${sk2} = ${suma}`)
    }
    else{alert('neteisingai ivestas zenklas')}
}
skaiciuotuvas()