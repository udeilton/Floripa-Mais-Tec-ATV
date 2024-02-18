function adição(n1, n2, callback) {
    const soma = n1 + n2;
    callback(soma)

};

adição(8, 8, function (soma){
    console.log(`O resultado da soma é ${soma}`)
});
