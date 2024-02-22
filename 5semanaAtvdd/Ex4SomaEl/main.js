const num = require('prompt-sync') ({sigint: true});

let An = parseInt(num ("Digite = "));
let Bn = parseInt(num ("Digite = "));
let Cn = parseInt(num ("Digite = "));
let Dn = parseInt(num ("Digite = "));
let En = parseInt(num ("Digite = "));

const nu = [An,Bn,Cn,Dn,En];

let soma = nu.reduce(function(soma, i) {
    return soma + i;
});
console.log(soma);