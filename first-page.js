let reg = /a/
console.log(reg.test('a')) //true
console.log(reg.test('aaaa')) //true
console.log(reg.test('A')) //false

// Try to find match the pattern 'a' and case sensetive
/*
eg: aaaaaaaaaaa
/aa/ = matches aa in string = five matches
/a{2, } = two or more match = one match
/a{1,}/ or /a+/ = one time or infinit amount = one match
/a+?/ = match single one char 
/a?/ = match empty or infinity

*/
let aReg = /a/i; //match without case sensetive
console.log(aReg.test('aaaaaaaaa'))

let bReg = /a{4, }/i //atleast 4 a should be there
console.log(bReg.test('aaa')) //false

let cReg = /a.c/ 
// match start with a and end with c
console.log(cReg.test('abc')) // match any char = a1c, abc
// abbbc => false

let dReg = /a.+c/
console.log(dReg.test('a1c1221213434abc')) // true = matches whole thing

let eReg = /a.+?c/
console.log(eReg.test('a1c1221213434abc'))  //true = matches 2 times

//==================================================================================

let fReg = /[xyz]/
console.log(fReg.test('xyz'))  //matche xyz only

/*
[a-z] = matches a-z
[a-z0-9] = matches a-z or 0-9

[a-z0-9]\] = it matches square bracket with escape \] => "a]" => meta char
[a-z0-9}.] => }}}}}}}}}}............ //matches '}', '.' and range

*/
console.log("================ SPECIAL ====================")
// SPECIAL 
let gReg = /\w/g //matches all 
console.log(gReg.test('asfdfdgd456657???.........')) //true

let hReg = /\W/g
console.log(hReg.test('......asfdfdgd456657???')) //true

/*

/d = matches all digit
/D = match non digit
/s = white space 
/S = match non white space

*/