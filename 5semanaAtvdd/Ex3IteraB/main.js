const num = require('prompt-sync') ({sigint: true});

let An = num ("Digite = ");
let Bn = num ("Digite = ");
let Cn = num ("Digite = ");
let Dn = num ("Digite = ");
let En = num ("Digite = ");

const nu = [An,Bn,Cn,Dn,En];



for (let i = 0; i < nu.length; i++){
    console.log(nu[i]);    
}


