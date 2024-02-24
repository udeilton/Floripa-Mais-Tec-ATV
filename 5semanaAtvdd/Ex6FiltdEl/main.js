const num = require('prompt-sync') ({sigint: true});

let An = parseInt(num ("Digite = "));
let Bn = parseInt(num ("Digite = "));
let Cn = parseInt(num ("Digite = "));
let Dn = parseInt(num ("Digite = "));
let En = parseInt(num ("Digite = "));

const par = x => x % 2 === 0 ;

const numero = [An,Bn,Cn,Dn,En];

const pares = numero.filter(par)

console.log(pares);