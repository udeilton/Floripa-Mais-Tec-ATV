document.getElementById('buscarCep').addEventListener('click', function(){
    const cep = prompt('Digite seu CEP para busca:');
    const url = `https://viacep.com.br/ws/${cep}/json`;

    fetch(url,{method: 'GET'})
       .then(res => res.json())
       .then(data => {
        if(data.erro) {
            alert('CEP não encontrado.');
            return
        }
        alert(`${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`);

       })
       .catch(error => console.error('falha na requisição:', error))
})