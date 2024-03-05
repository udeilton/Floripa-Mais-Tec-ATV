fetch('https://api.thecatapi.com/v1/images/search?limit=10 ')
.then(Res => Res.json())
.then(data => {
    const gallery = document.getElementById('gallery');
    data.forEach(cat => {
        const imgElement = document.createElement('img');
        imgElement.src = cat.url;
        imgElement.alt = "Imagem de Gato";
        imgElement.style.width = '100%';
        gallery.appendChild(imgElement);
        
    });
})
.catch (error => console.error('Error ao carregar as imagens:', error));