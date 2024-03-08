class Produto {
    nome;
    preco;
    quantidade;

    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
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

    exibirQuantidade(){
        console.log(this.quantidade)
    }
    

   
} 

let Produ = new Produto("manga", 10, 5);
Produ.repor(5)
Produ.vender(6)
Produ. exibirQuantidade()
