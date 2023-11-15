//pirma uzduotis
let p =10

if (3>=p && p>=1){console.log('neigiamas pazimys');}
else if (5>=p&&p>=4)console.log('teigiams bet reikia pasistenkti')
else if (7>=p&&p>=6)console.log('vidutiniskai, ar tau to uztenka?')
else if (9>=p&&p>=8)console.log('pagirk save')
else if (p==10)console.log('Super!')
else{console.log('pateikta netinkama reiksme')}

//antra uzduotis
men = 'kovas'
switch(men.toLowerCase()){
    case 'gruodis':
    case 'sausis':
    case 'vasaris':
        console.log('ziema');break;
    case 'kovas':
    case 'balandis':
    case 'geguze':
        console.log('pavasaris');break;
    case 'birzelis':
    case 'liepa':
    case 'rugpjutis':
        console.log('vasara');break;
    case 'rugsejis':
    case 'spalis':
    case 'lapkritis':
        console.log('ruduo');break;
}
//trecia uzduotis

let h =19

if (11>=h && h>=6){console.log('Labas rytas');}
else if (18>=h&&h>=12)console.log('laba diena')
else if (21>=h&&h>=19)console.log('Labas vakaras')
else if (24>=h&&h>=22)console.log('Labanakt')
else if (5>=h&&h>=0)console.log('Labanakt')
else{console.log('pateikta netinkama reiksme')}

//ketvirta uzduotis
const date = new Date()
const day = date.getDay()
console.log(date)
console.log(day)

//penkta uzduotis

let am = 18
let turi = false
if (am >=18&&am<=90){
    if (turi)
        console.log('turi vairuotojo teisias')
    else {console.log('neturi vairuotojo teisiu')}
}
else {console.log('per jaunas')}

//sesta uzduotis
let z = -1
if (z<0){console.log('neigiamas')}
else if (z==0){console.log('nulis')}
else{console.log('teigiamas')}

//septinta uzduotis
let logged = true
let usertype ='admin'
const username = 'mantas'
if (logged){
    if (usertype.toLowerCase() =='admin'){
        console.log('welcome Admin!!');
    }
    else{
        console.log(`welcome, ${username}`);
    }
}
else{
    console.log('you have to log in first')
}

//astunta uzduotis
let loggedin = true
let userType ='simple user'
let skelbimas =true
if (loggedin){
    if (userType.toLowerCase() =='admin'){
        console.log('Skelbimas patvirtintas');
    }
    else if (userType.toLowerCase() =='simple user'){
        if(skelbimas){
        console.log(`jei norite galiti sukurti ar istrinti skelbima`);
        }
        else{console.log('galite sukurti skelbima')}
    }
    else{
        console.log('jokie veiksmai negalimi')
    }
}
else{
    console.log('you have to log in first')
}

//devinta uzduotis

// const sk = parseInt(prompt('iveskite skaiciu'))
// if (sk>50){
//     console.log(`ivestas skaicius yra ${sk}`)}
// else if (sk<50){
//     console.log(`ivestas kaicius ${sk} mazesnis uz 50`)}
// else{console.log(`ivestas skaicius ${sk} yra lygus 50`)}

//desimta uzduotis
sk1 = parseInt(prompt('iveskite pirma skaiciu'))
z = prompt('iveskite zenkla')
sk2 = parseInt(prompt('iveskite antra skaiciu'))
suma = 0
if (z ==='-'){
    suma = sk1 - sk2
    console.log(`${sk1} - ${sk2} = ${suma}`)
}
else if (z === '+'){
    suma = sk1 + sk2
    console.log(`${sk1} + ${sk2} = ${suma}`)
}
 else if (z ==='*'){
    suma = sk1 * sk2
    console.log(`${sk1} * ${sk2} = ${suma}`)
}
 else if (z === '/'){
    suma = sk1 / sk2
    console.log(`${sk1} / ${sk2} = ${suma}`)
}
else{console.log('neteisingai ivestas zenklas')}