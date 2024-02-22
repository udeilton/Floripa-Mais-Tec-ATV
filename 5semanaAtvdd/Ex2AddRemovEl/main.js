const ent = require('prompt-sync') ({sigint: true});

let ft1 = ent("Digite = ");
let ft2 = ent("Digite = ");
let ft3 = ent("Digite = ");
let ft4 = ent("Digite = ");

const fts = [ft1, ft2, ft3];

fts.push(ft4);
fts.shift()
console.log(fts);