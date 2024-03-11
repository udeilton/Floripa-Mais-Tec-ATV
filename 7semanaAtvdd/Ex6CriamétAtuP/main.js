class Produto {
    nome;
    preco;
    quantidade;

    constructor(nome, preco, quantidade, marca, cor){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        this.marca = marca 
        this.cor = cor
    }

    repor(quantidadeReposta){
        this.quantidade += quantidadeReposta
    }

   

    vender(quantidadeVendidas){
        if(quantidadeVendidas > this.quantidade){
            console.log("Estoque Insuficiente!")
            return           
        }

        this.quantidade -= quantidadeVendidas
    
    }

    atualizarPreco(novoValor){

        this.preco = novoValor 
        
    }

    mostraEstoque(){
        console.log(`O produto ${this.nome} ${this.marca} ${this.cor} de R$ ${this.preco} possui ${this.quantidade} unidades disponíveis`)

    }
  
} 

let Produ = new Produto("caneta", 10, 5, "bic", "azul");
Produ.repor(5)
Produ.vender(6)
Produ.atualizarPreco(7)
Produ.mostraEstoque()
