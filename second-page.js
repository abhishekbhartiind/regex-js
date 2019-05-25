// 09-09-2018

let reg = /\d\d-\d\d-\d\d\d\d/
console.log(reg.test('09-09-2018')) //true

let aReg = /[0-9]-[0-9]-[0-9]/
console.log(aReg.test('09-09-2018'))


let bReg = /^t$/
console.log(bReg.test('test')) // starts with t and end with t

//match 012021
let cReg = /0(12|21|31)/
console.log(cReg.test('012 021'))

// 0 is common (12 pipe/or 21)
let dReg = /I am (?=great)/
console.log(dReg.test('I am great'))
//it only matches 1 am

let x = 'I am great'.replace(/I am (?=great)/, 'We are ')
console.log(x)