let prod = {
    // "no" nome dos produtos
    1: {no: 'Hortifruti', quant: 0 },
    2: {no: 'Laticínios', quant: 0 },
    3: {no: 'Carnes', quant: 0 },
    4: {no: 'Peixes', quant: 0 },
    5: {no: 'Aves', quant: 0 },
};
let opcao;

do {
    opcao = parseInt(prompt('Digite o produto:\n\n(1) Hortifruti\n(2) Laticínios\n(3) Carnes\n(4) Peixes\n(5) Aves\n(6) Fechar pedido'));
    if (opcao >= 1 && opcao <= 5) {
        let quant = parseInt(prompt(`Digite a quantidade ${prod[opcao].no}:`));
        prod[opcao].quant += quant;
    } 
    else if (opcao !== 6) {
        alert('ERRO. Tente novamente.');
    }
} while (opcao !== 6);


let mQuant = 0;
let pMQuant = '';

    for (let opcao in prod) {
        if (prod[opcao].quant > mQuant) {
        mQuant = prod[opcao].quant;
        pMQuant = prod[opcao].no;
    }
}

alert(`A maior quantidade foi de: ${pMQuant}`);
