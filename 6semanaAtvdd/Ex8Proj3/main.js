document.addEventListener("DOMContentLoaded", function(){
    const botaoConsultarCep = document.getElementById('consultarCep');


    botaoConsultarCep.addEventListener('click', function(){
        const enderecoSalvo = localStorage.getItem("endereco");
        if (enderecoSalvo) {
            const desejaNovoEndereco = confirm("Já existe um endereço salvo. Deseja buscar um novo endereço?");
            if (! desejaNovoEndereco) {
                return;
            }
        }

        let cep = prompt("Digite seu CEP: ");
        if  (!cep) return;
    
        fetch(`https://viacep.com.br/ws/${cep}/json`,{ method: 'GET'})
           .then(res => res.json())
           .then(data => {
            if(data.erro) {
                alert('CEP não encontrado.');
                return
            }
            const enderecoFormatado = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
            const confirmacao = confirm(`O endere está correto? ${enderecoFormatado}`)
    
            if (confirmacao){
                localStorage.setItem("endereco", JSON.stringify(data));
                alert("Endereço salvo com sucesso!")
            }
    
           })
           .catch(error => console.error('falha na requisição:', error))
    })
})

