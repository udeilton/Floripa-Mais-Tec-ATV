fetch('./data.json')
    .then(response => response.json()) 
    .then(data => { 
        
        const infoDiv = document.getElementById('userInfo');
        infoDiv.innerHTML = `
            <p>Nome: ${data.nome}
            </p>
            <p>Idade: ${data.idade}</p>
            <p>Email: ${data.email}</p>;
        `; 
    })
    .catch(error => {
        console.error('Falha ao carregar o arquivo JSON:', error);
    });