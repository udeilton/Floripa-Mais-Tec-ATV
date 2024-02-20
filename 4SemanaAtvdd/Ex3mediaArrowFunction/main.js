const readline = require('readline-sync') ({sigint: true});

 
let notaA = parseInt (readline.question("Digite sua nota "));
let notaB = parseInt (readline.question("Digite sua nota "));
let notaC = parseInt (readline.question("Digite sua nota "));
let notaD = parseInt (readline.question("Digite sua nota "));


const nota = [notaA, notaB, notaC, notaD];

const med = nota.reduce((accumulator, value) => accumulator + value, 0)

let media = med / nota.length ;


    if(media > 5){
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }


console.log(`Sua media final é = ${media} !`);

    


