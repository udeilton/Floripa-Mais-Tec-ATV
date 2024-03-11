
class Pessoa {
    nome;
    idade; 
    profissao;

    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
} 

class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde
    
    constructor(nome, idade, profissao, telefone, email, clienteDesde) {
        super(nome, idade, profissao)
        this.telefone = telefone;
        this.email = email;
        this.clienteDesde = clienteDesde
    }
    
}

const clienteJoao = new Cliente('joao', 31, 'dev', '48991768608', 'joaodev@gmail.com', '2024-03-11');
console.log(clienteJoao);